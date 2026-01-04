'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TimePage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Telling Time</CardTitle>
                <CardDescription>What time is it?</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>A clock helps us know what time of day it is.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg text-center">
                    <p className="text-6xl">🕒</p>
                    <p>The short hand points to the <strong>hour</strong>. The long hand points to the <strong>minute</strong>.</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/math/3d-shapes"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/math/money">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
