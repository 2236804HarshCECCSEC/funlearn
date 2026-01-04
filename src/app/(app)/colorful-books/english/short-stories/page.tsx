'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ShortStoriesPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Short Stories</CardTitle>
                <CardDescription>Let's read a fun story!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Stories have a beginning, a middle, and an end. They have characters and a setting.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <h3 className="font-bold">The Lost Kite</h3>
                   <p>
                       One sunny afternoon, a boy named Leo was flying his new kite. It was bright blue with a long, colorful tail. Suddenly, a strong gust of wind pulled the string from his hand. The kite flew higher and higher until it was just a tiny dot. Leo was sad. He looked all around the park. Finally, he saw his kite stuck in a big tree. A kind park ranger helped him get it down. Leo was so happy to have his kite back!
                   </p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/question-words"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/paragraphs">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
