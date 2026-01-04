'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SynonymsAntonymsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Synonyms & Antonyms</CardTitle>
                <CardDescription>Words that are similar or opposite!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-xl text-blue-700">Synonyms (Same)</h3>
                        <p>Synonyms are words that have the same or a very similar meaning.</p>
                        <ul className="list-disc pl-5">
                            <li>Big → Large</li>
                            <li>Happy → Joyful</li>
                            <li>Fast → Quick</li>
                        </ul>
                    </div>
                     <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-bold text-xl text-orange-700">Antonyms (Opposite)</h3>
                        <p>Antonyms are words that have the opposite meaning.</p>
                        <ul className="list-disc pl-5">
                            <li>Hot → Cold</li>
                            <li>Up → Down</li>
                            <li>Day → Night</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/word-families"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/singular-plural">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
