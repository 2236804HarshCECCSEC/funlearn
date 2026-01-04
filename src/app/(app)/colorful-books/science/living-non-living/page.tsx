'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LivingNonLivingPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Living & Non-Living Things</CardTitle>
                <CardDescription>What's the difference?</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Our world is full of amazing things! Some are living, and some are non-living.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-bold text-xl text-green-700">Living Things 🌳</h3>
                        <ul className="list-disc pl-5">
                            <li>They grow.</li>
                            <li>They need food and water.</li>
                            <li>They breathe.</li>
                            <li>They can move on their own.</li>
                            <li>Examples: Plants, Animals, People</li>
                        </ul>
                    </div>
                     <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="font-bold text-xl text-gray-700">Non-Living Things 🚗</h3>
                        <ul className="list-disc pl-5">
                            <li>They do not grow.</li>
                            <li>They don't need food.</li>
                            <li>They do not breathe.</li>
                            <li>They only move if someone moves them.</li>
                            <li>Examples: Rock, Chair, Toy, Car</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Science</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/plant-parts">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
