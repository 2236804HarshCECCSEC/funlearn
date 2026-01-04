'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Shapes3DPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">3D Shapes</CardTitle>
                <CardDescription>Solid shapes you can hold!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>3D shapes are solid. They are not flat. You can find them in the real world!</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-secondary/50 p-4 rounded-lg">
                        <p className="text-4xl font-bold">Cube</p>
                        <p>Like a dice 🎲</p>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-lg">
                        <p className="text-4xl font-bold">Sphere</p>
                        <p>Like a ball ⚽️</p>
                    </div>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math/2d-shapes"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/math/time">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
