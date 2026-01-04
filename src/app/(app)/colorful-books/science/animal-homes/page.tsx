'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AnimalHomesPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Animal Homes</CardTitle>
                <CardDescription>Where do animals live?</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Just like we have homes, animals do too! Their homes protect them.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <p>A bird lives in a <strong>nest</strong>. 둥지</p>
                   <p>A bear lives in a <strong>den</strong>. 굴</p>
                   <p>A fish lives in <strong>water</strong>. 물</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/plant-parts"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/food-chains">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
