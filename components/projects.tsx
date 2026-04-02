import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>12lua.github.io</CardTitle>
        <CardDescription>
          My website
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-wrap gap-2">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <a
            href="https://github.com/12LuA/12lua.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
