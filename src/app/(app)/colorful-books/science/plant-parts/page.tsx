'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PlantPartsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Parts of a Plant</CardTitle>
                <CardDescription>Let's see what makes up a plant.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Plants have different parts, and each part has a special job.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <ul className="list-disc pl-5">
                        <li><strong>Roots:</strong> Hold the plant in the ground and drink water.</li>
                        <li><strong>Stem:</strong> The body of the plant that holds it up.</li>
                        <li><strong>Leaves:</strong> Make food for the plant from sunlight.</li>
                        <li><strong>Flower:</strong> The pretty part that makes seeds.</li>
                    </ul>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/living-non-living"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/animal-homes">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
