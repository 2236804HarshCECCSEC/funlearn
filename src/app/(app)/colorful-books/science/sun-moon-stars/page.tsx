'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SunMoonStarsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Sun, Moon, & Stars</CardTitle>
                <CardDescription>The beautiful lights in our sky.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>The sky is full of wonderful objects that we can see from Earth.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                   <p>The <strong>Sun (☀️)</strong> is a star. It is very big and hot, and it gives us light and heat during the day.</p>
                   <p>The <strong>Moon (🌙)</strong> goes around the Earth. It looks like it changes shape, but it's just how the sun lights it up.</p>
                   <p><strong>Stars (✨)</strong> are giant balls of hot gas, just like our sun. They look tiny because they are very, very far away.</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/health-hygiene"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/day-night">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
