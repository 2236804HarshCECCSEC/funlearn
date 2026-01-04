'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QuestionWordsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Question Words</CardTitle>
                <CardDescription>The words that help us ask things!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Question words help us get information. They usually start with "Wh".</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                   <p><strong>Who?</strong> (asks about a person) - Who is your teacher?</p>
                   <p><strong>What?</strong> (asks about a thing) - What is your name?</p>
                   <p><strong>Where?</strong> (asks about a place) - Where do you live?</p>
                   <p><strong>When?</strong> (asks about a time) - When is your birthday?</p>
                   <p><strong>Why?</strong> (asks for a reason) - Why is the sky blue?</p>
                   <p><strong>How?</strong> (asks about the way something is) - How are you?</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/sentence-making"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/short-stories">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
