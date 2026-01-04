'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MultiplicationPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Multiplication</CardTitle>
                <CardDescription>Adding the same number over and over.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Multiplication is a fast way to do addition! We use the times sign (x).</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg text-center">
                    <p className="text-4xl">3 groups of 2 stars</p>
                    <p className="text-5xl">(⭐️⭐️) (⭐️⭐️) (⭐️⭐️)</p>
                    <p className="text-2xl font-bold">3 x 2 = 6</p>
                    <p>(This is the same as 2 + 2 + 2)</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math/subtraction"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/math/division">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
