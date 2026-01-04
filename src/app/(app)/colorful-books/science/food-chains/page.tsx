'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FoodChainsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Food Chains</CardTitle>
                <CardDescription>Who eats what?</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>A food chain shows how energy moves from one living thing to another.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg text-center">
                    <p className="text-2xl">🌱 ➡️ 🐛 ➡️ 🐦</p>
                    <p>The plant gets energy from the sun.</p>
                    <p>The caterpillar eats the plant.</p>
                    <p>The bird eats the caterpillar.</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/animal-homes"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/human-body">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
