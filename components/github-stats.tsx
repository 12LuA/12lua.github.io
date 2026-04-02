"use client"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useGithubStats, type GithubStats } from "@/hooks/use-github-stats"
import { Folder } from "lucide-react"

type GithubStatsCardProps = {
  username: string
}

const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("de-DE").format(value)
}

export function GithubStatsCard({ username }: GithubStatsCardProps) {
  const { stats, loading, error } = useGithubStats(username)

  const display = (key: keyof GithubStats): string => {
    if (loading) {
      return "..."
    }

    if (error || !stats) {
      return "-"
    }

    return formatNumber(stats[key])
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-white/2 hover:bg-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm text-muted-foreground">
            <Folder className="h-4 w-4" />
            Repositories
          </CardTitle>
          <CardDescription className="text-3xl font-semibold text-primary">
            {display("repositories")}
          </CardDescription>
        </CardHeader>
      </Card>

      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : null}
    </div>
  )
}
