import { useEffect, useState } from "react"

export type GithubStats = {
  repositories: number
}

type UseGithubStatsResult = {
  stats: GithubStats | null
  loading: boolean
  error: string | null
}

export function useGithubStats(username: string): UseGithubStatsResult {
  const [stats, setStats] = useState<GithubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadStats = async () => {
      try {
        setLoading(true)
        setError(null)

        const userResponse = await fetch(
          `https://api.github.com/users/${encodeURIComponent(username)}`,
          {
            signal: controller.signal,
            headers: {
              Accept: "application/vnd.github+json",
            },
          },
        )

        if (!userResponse.ok) {
          throw new Error("GitHub user not found")
        }

        const user = (await userResponse.json()) as {
          public_repos: number
        }

        if (!controller.signal.aborted) {
          setStats({
            repositories: user.public_repos,
          })
        }
      } catch {
        if (!controller.signal.aborted) {
          setError("Statistiken konnten nicht geladen werden")
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadStats()

    return () => {
      controller.abort()
    }
  }, [username])

  return {
    stats,
    loading,
    error,
  }
}
