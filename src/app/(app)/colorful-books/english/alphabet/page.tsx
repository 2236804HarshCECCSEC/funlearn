'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AlphabetPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">The Alphabet: A to Z</CardTitle>
                <CardDescription>Let's learn our letters!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>The alphabet has 26 letters. Each letter has a big (capital) and small version.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg text-center">
                    <p className="text-4xl font-mono">Aa Bb Cc Dd Ee...</p>
                    <p>...and so on all the way to Zz!</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english"><ChevronLeft className="mr-2 h-4 w-4" /> Back to English</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/phonics">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
