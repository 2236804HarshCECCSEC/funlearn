'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VerbsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Action Words (Verbs)</CardTitle>
                <CardDescription>Words that show action!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>A verb is an action word. It tells us what someone or something is doing.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <p>Examples: <strong>run, jump, eat, sleep, play</strong></p>
                   <p>The dog <strong>runs</strong> fast. 🐕💨</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/nouns"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/adjectives">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
