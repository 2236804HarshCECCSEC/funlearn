'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EnvironmentPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Water & Air</CardTitle>
                <CardDescription>Two very important things for life on Earth.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Our environment is everything around us. Water and air are essential parts of it.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-xl text-blue-700">Water 💧</h3>
                        <p>All living things need water to survive. We should keep our rivers and oceans clean!</p>
                    </div>
                     <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-bold text-xl text-green-700">Air 💨</h3>
                        <p>We can't see air, but we breathe it every second. Clean air is important for our health.</p>
                    </div>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/energy"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/safety">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
