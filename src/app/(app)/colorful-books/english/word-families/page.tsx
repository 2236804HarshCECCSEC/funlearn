'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WordFamiliesPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Word Families</CardTitle>
                <CardDescription>Words that rhyme and look the same.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Word families are groups of words that have a common pattern. This makes them easier to read and spell!</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <h3 className="font-bold">The "-at" Family</h3>
                   <p className="text-xl">c<strong>at</strong>, h<strong>at</strong>, b<strong>at</strong>, m<strong>at</strong>, s<strong>at</strong></p>
                   
                   <h3 className="font-bold mt-4">The "-un" Family</h3>
                   <p className="text-xl">s<strong>un</strong>, r<strong>un</strong>, f<strong>un</strong>, b<strong>un</strong></p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/sight-words"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/synonyms-antonyms">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
