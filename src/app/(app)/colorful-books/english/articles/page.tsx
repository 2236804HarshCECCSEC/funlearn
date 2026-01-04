'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ArticlesPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Articles (a, an, the)</CardTitle>
                <CardDescription>Small words with big jobs.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Articles help us know if we are talking about a specific thing or just one of many.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                   <p>Use <strong>a</strong> before words that start with a consonant sound. (e.g., a cat, a dog, a big apple)</p>
                   <p>Use <strong>an</strong> before words that start with a vowel sound (a, e, i, o, u). (e.g., an apple, an elephant, an ice cream)</p>
                   <p>Use <strong>the</strong> when you are talking about one specific thing. (e.g., The sun is bright. The dog I saw yesterday.)</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/singular-plural"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/tenses">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
