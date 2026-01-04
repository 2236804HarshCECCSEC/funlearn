'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CountingPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Counting 1 to 100</CardTitle>
                <CardDescription>Let's learn how to count together!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Counting is fun! We use numbers every day. Let's look at some numbers and how to count them.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                    <h3 className="font-bold text-xl">Counting from 1 to 10</h3>
                    <p className="text-4xl font-mono tracking-widest">
                        1 2 3 4 5 6 7 8 9 10
                    </p>
                    <p>Can you count the stars? ⭐️⭐️⭐️ (There are 3 stars!)</p>
                </div>
                
                <div className="mt-4">
                    <h3 className="font-bold text-xl">Numbers in Tens</h3>
                    <p>After 10, we keep going! The next big number is 20, then 30, and so on, all the way to 100!</p>
                    <p className="text-3xl font-mono tracking-widest">
                        10, 20, 30, 40, 50, 60, 70, 80, 90, 100
                    </p>
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
