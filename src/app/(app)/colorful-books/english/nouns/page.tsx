'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NounsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Common Nouns</CardTitle>
                <CardDescription>Words for people, places, and things.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>A noun is a naming word. It can be a person, a place, an animal, or a thing.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <p><strong>Person:</strong> boy, girl, teacher</p>
                   <p><strong>Place:</strong> school, park, house</p>
                   <p><strong>Thing:</strong> book, ball, chair</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/phonics"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/verbs">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
