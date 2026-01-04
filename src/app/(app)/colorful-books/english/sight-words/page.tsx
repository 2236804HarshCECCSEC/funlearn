'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SightWordsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Sight Words</CardTitle>
                <CardDescription>Words you should know by heart!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Sight words are common words that are hard to sound out. It's best to just remember them when you see them!</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <p className="font-bold text-xl text-center">the, a, and, is, it, in, I, for, to, you</p>
                   <p className="mt-4">Example sentence: <strong>I</strong> see <strong>a</strong> cat <strong>and a</strong> dog.</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/adjectives"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/word-families">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
