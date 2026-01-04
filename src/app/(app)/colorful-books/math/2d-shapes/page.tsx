'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Shapes2DPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">2D Shapes</CardTitle>
                <CardDescription>Flat shapes all around us!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>2D shapes are flat. You can draw them on paper!</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-secondary/50 p-4 rounded-lg">
                        <p className="text-6xl">◯</p>
                        <p className="font-bold">Circle</p>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-lg">
                        <p className="text-6xl">□</p>
                        <p className="font-bold">Square</p>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-lg">
                        <p className="text-6xl">△</p>
                        <p className="font-bold">Triangle</p>
                    </div>
                     <div className="bg-secondary/50 p-4 rounded-lg">
                        <p className="text-6xl">◇</p>
                        <p className="font-bold">Diamond</p>
                    </div>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math/tables"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/math/3d-shapes">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
