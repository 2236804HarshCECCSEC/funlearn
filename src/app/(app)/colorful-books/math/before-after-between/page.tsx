'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterBetweenPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Before, After, and Between</CardTitle>
                <CardDescription>Understanding the order of numbers.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Numbers have neighbors, just like you! Let's meet them.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                    <p>The number that comes <strong>before</strong> 5 is 4.</p>
                    <p>The number that comes <strong>after</strong> 5 is 6.</p>
                    <p>The number that is <strong>between</strong> 4 and 6 is 5.</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math/odd-even"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/math/addition">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
