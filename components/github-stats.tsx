import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Folder } from "lucide-react"

export function GithubStatsCard() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-white/2 hover:bg-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm text-muted-foreground">
            <Folder className="h-4 w-4" />
            Repositories
          </CardTitle>
          <CardDescription className="text-3xl font-semibold text-primary">
            0
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
