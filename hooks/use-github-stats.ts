import statsData from "@/public/stats.json"

type UseGithubStatsResult = {
  stats: typeof statsData
  loading: boolean
  error: string | null
}

export function useGithubStats(): UseGithubStatsResult {
  return {
    stats: statsData,
    loading: false,
    error: null,
  }
}
