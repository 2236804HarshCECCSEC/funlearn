'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TablesPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Multiplication Tables</CardTitle>
                <CardDescription>Practice your times tables!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Learning your tables makes multiplication super fast!</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                    <h3 className="font-bold text-xl">Table of 2</h3>
                    <ul className="list-none pl-0">
                        <li>2 x 1 = 2</li>
                        <li>2 x 2 = 4</li>
                        <li>2 x 3 = 6</li>
                        <li>...and so on!</li>
                    </ul>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math/division"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/math/2d-shapes">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
