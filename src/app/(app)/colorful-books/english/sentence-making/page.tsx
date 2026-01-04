'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SentenceMakingPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Making Simple Sentences</CardTitle>
                <CardDescription>Putting words together to make sense.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>A sentence is a group of words that makes a complete thought. It must have a noun and a verb.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                   <p>A sentence always starts with a capital letter.</p>
                   <p>It ends with a punctuation mark, like a period (.), question mark (?), or exclamation mark (!).</p>
                   <p><strong>Example:</strong> The dog runs. (This is a complete sentence!)</p>
                   <p><strong>Not a sentence:</strong> Big red car. (What about it?)</p>
                   <p><strong>A better sentence:</strong> The big red car is fast.</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/tenses"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/question-words">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
