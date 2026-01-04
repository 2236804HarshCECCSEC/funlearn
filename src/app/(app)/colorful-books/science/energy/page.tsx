'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EnergyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Light, Heat, and Sound</CardTitle>
                <CardDescription>Different kinds of energy!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Energy makes things happen! It can be in many forms.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                   <p><strong>Light (💡)</strong> is a type of energy that helps us see. The sun and light bulbs give off light.</p>
                   <p><strong>Heat (🔥)</strong> is energy that makes things warm. We get heat from the sun and from fire.</p>
                   <p><strong>Sound (🔊)</strong> is energy we can hear. It is made when something vibrates (shakes back and forth).</p>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/states-of-matter"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/environment">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
