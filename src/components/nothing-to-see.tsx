import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NothingToSeeHere() {
  return (
    <Card className="w-full m-3">
      <CardHeader>
        <CardTitle>Page not ready yet!</CardTitle>
        <CardDescription>
          Oops! looks like you&apos;re early to the party...🎉🎉🎉
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/">Cancel</Link>
        </Button>
        <Button asChild>
          <Link href="/">Back Home</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
