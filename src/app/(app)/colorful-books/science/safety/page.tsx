'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function SafetyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Safety Rules</CardTitle>
                <CardDescription>How to stay safe at home and on the road.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Following safety rules helps protect us from getting hurt.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <h3 className="font-bold">At Home</h3>
                   <ul className="list-disc pl-5">
                       <li>Do not play with fire or sharp objects.</li>
                       <li>Ask a grown-up for help with electrical things.</li>
                   </ul>
                   <h3 className="font-bold mt-4">On the Road</h3>
                   <ul className="list-disc pl-5">
                       <li>Look both ways before crossing the street.</li>
                       <li>Always use a zebra crossing.</li>
                   </ul>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/science/environment"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                 <Button asChild>
                    <Link href="/science/levels">Practice with a Quiz!</Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
