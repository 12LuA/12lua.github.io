"use client";

import { useEffect } from "react";
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

export default function NotFound() {
  useEffect(() => {
    if (window.plausible) {
      window.plausible("404", {
        props: {
          path: window.location.pathname,
        },
      });
    }
  }, []);

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
        <Button asChild variant="outline">
          <Link href="/">Return Home</Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
