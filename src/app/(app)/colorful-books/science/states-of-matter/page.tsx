'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StatesOfMatterPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Solid, Liquid, Gas</CardTitle>
                <CardDescription>The three states of matter!</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Everything around us is made of matter, and matter can be in one of three states.</p>
                
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-xl text-blue-700">Solid 🧊</h3>
                        <p>A solid keeps its own shape. A rock, a toy, and an ice cube are all solids.</p>
                    </div>
                     <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-bold text-xl text-green-700">Liquid 💧</h3>
                        <p>A liquid takes the shape of its container. Water and milk are liquids.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="font-bold text-xl text-gray-700">Gas ☁️</h3>
                        <p>A gas spreads out to fill any space. The air we breathe is a gas.</p>
                    </div>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/solar-system"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/science/energy">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
