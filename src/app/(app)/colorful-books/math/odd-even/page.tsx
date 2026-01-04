'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OddEvenPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Odd & Even Numbers</CardTitle>
                <CardDescription>Let's discover the difference between odd and even!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Numbers can be sorted into two teams: Team Even and Team Odd!</p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-xl text-blue-700">Even Numbers</h3>
                    <p>Even numbers are numbers you can split into two equal groups. They end in 0, 2, 4, 6, or 8.</p>
                    <p className="text-2xl font-mono tracking-widest">2, 4, 6, 8, 10, 12...</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg mt-4">
                    <h3 className="font-bold text-xl text-orange-700">Odd Numbers</h3>
                    <p>Odd numbers always have one left over if you try to make pairs. They end in 1, 3, 5, 7, or 9.</p>
                    <p className="text-2xl font-mono tracking-widest">1, 3, 5, 7, 9, 11...</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math/number-names"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/math/before-after-between">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
