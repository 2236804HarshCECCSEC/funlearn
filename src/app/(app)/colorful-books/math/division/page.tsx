'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DivisionPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Division</CardTitle>
                <CardDescription>Sharing things equally.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Division is about sharing something fairly into equal groups. We use the division sign (÷).</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg text-center">
                    <p className="text-4xl">Share 6 cookies with 3 friends</p>
                    <p className="text-5xl">🍪🍪🍪🍪🍪🍪</p>
                    <p className="text-2xl font-bold">6 ÷ 3 = 2</p>
                    <p>(Each friend gets 2 cookies!)</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math/multiplication"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/math/tables">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
