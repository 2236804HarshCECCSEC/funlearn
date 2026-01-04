'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NumberNamesPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Number Names</CardTitle>
                <CardDescription>Every number has a name. Let's learn them!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Just like you have a name, numbers have names too! Knowing their names helps us read and write them.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                    <h3 className="font-bold text-xl">From One to Ten</h3>
                    <ul className="list-disc pl-5">
                        <li>1 - One</li>
                        <li>2 - Two</li>
                        <li>3 - Three</li>
                        <li>4 - Four</li>
                        <li>5 - Five</li>
                        <li>6 - Six</li>
                        <li>7 - Seven</li>
                        <li>8 - Eight</li>
                        <li>9 - Nine</li>
                        <li>10 - Ten</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <p>The name for <strong>20</strong> is <strong>twenty</strong>.</p>
                    <p>The name for <strong>100</strong> is <strong>one hundred</strong>.</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math/counting"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/math/odd-even">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
