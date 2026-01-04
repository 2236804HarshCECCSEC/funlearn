'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HealthHygienePage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Health & Hygiene</CardTitle>
                <CardDescription>How to keep your body healthy and strong!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Taking care of our bodies is very important. This is called hygiene.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Wash your hands</strong> with soap and water. 🧼</li>
                        <li><strong>Brush your teeth</strong> twice a day. 🦷</li>
                        <li><strong>Eat healthy food</strong> like fruits and vegetables. 🥦🥕</li>
                        <li><strong>Get enough sleep</strong> every night. 😴</li>
                   </ul>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/human-body"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/sun-moon-stars">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
