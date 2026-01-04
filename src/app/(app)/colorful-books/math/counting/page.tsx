'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CountingPage() {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Counting 1 to 100</CardTitle>
                <CardDescription>Let's learn how to count together!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Counting is fun! We use numbers every day. Let's count all the way from 1 to 100.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 text-center font-mono text-lg">
                        {numbers.map((number) => (
                            <div key={number} className="p-2 rounded bg-background/50">
                                {number}
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Math</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/math/number-names">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
