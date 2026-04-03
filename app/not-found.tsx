"use client";

import Link from "next/link";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { usePlausible } from "next-plausible";


export default function NotFound() {
    const plausible = usePlausible()
    const handleClick = () => {
    plausible("Button clicked", {
      props: {
        btnText: "back",
        btnLocation: "404-Page",
      },
    })
  }

  return (
    <Empty className="min-h-[80vh]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Info />
        </EmptyMedia>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button asChild variant="outline" onClick={handleClick}>
          <Link href="/">Return Home</Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
