'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DayNightPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Day & Night</CardTitle>
                <CardDescription>Why does the sun disappear?</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Day and night happen because the Earth is always spinning!</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg text-center">
                   <p className="text-4xl">🌍➡️🌞</p>
                   <p>When the part of the Earth you are on faces the sun, it is <strong>daytime</strong>.</p>
                   <p>When your part of the Earth spins away from the sun, it gets dark and it is <strong>night-time</strong>.</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/sun-moon-stars"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/solar-system">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
