'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ParagraphsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Small Paragraphs</CardTitle>
                <CardDescription>Reading a group of sentences together.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>A paragraph is a group of sentences about one main idea.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <h3 className="font-bold">My Pet Cat</h3>
                   <p>
                       I have a pet cat named Whiskers. She is black with white paws. She loves to play with a small red ball. Every morning, she wakes me up by purring loudly. Whiskers is a very friendly cat.
                   </p>
                   <p className="mt-4"><strong>Main idea:</strong> Describing a pet cat named Whiskers.</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/short-stories"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                 <Button asChild>
                    <Link href="/english/levels">Practice with a Quiz!</Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
