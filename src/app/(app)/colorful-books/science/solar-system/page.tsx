'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SolarSystemPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Our Solar System</CardTitle>
                <CardDescription>The family of planets around our Sun.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Our Sun has a family of eight planets that travel around it. We live on a planet called Earth!</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <p>The planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.</p>
                   <p className="font-bold">Jupiter is the biggest, and Mercury is the smallest!</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/day-night"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/states-of-matter">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
