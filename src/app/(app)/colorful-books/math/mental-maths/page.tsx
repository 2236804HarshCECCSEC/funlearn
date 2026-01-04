'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function MentalMathsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Mental Maths</CardTitle>
                <CardDescription>Doing math in your head!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Mental math is like being a math superhero! You solve problems quickly without writing anything down.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg text-center">
                    <p className="text-2xl">Try this: What is 5 + 5?</p>
                    <p className="text-4xl font-bold">It's 10!</p>
                    <p>Practice makes you faster!</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math/money"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/math/levels">Practice with a Quiz!</Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
