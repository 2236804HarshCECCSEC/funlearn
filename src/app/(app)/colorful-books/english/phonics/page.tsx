'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PhonicsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Letter Sounds (Phonics)</CardTitle>
                <CardDescription>Every letter makes a sound!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Phonics helps us read by knowing the sounds letters make.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <p>The letter <strong>A</strong> says "aah" as in <strong>A</strong>pple 🍎.</p>
                   <p>The letter <strong>B</strong> says "buh" as in <strong>B</strong>all ⚾️.</p>
                   <p>The letter <strong>C</strong> says "cuh" as in <strong>C</strong>at 🐈.</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/alphabet"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/nouns">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
