'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HumanBodyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Human Body Parts & Sense Organs</CardTitle>
                <CardDescription>Your body is amazing! Let's learn its parts.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Our body has many parts that help us do things. We also have five sense organs to understand the world.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                   <h3 className="font-bold">Our 5 Senses</h3>
                   <ul className="list-disc pl-5">
                       <li><strong>Eyes:</strong> To see the world 👁️</li>
                       <li><strong>Ears:</strong> To hear sounds 👂</li>
                       <li><strong>Nose:</strong> To smell things 👃</li>
                       <li><strong>Tongue:</strong> To taste food 👅</li>
                       <li><strong>Skin:</strong> To feel things 👋</li>
                   </ul>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/food-chains"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/health-hygiene">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
