'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AdjectivesPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Describing Words (Adjectives)</CardTitle>
                <CardDescription>Words that make our sentences colorful!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>An adjective is a word that describes a noun. It tells us more about it.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <p>The <strong>big</strong> red ball. (Big and red describe the ball)</p>
                   <p>A <strong>happy</strong> dog. (Happy describes the dog)</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/verbs"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/sight-words">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
