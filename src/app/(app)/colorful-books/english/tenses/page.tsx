'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TensesPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Simple Tenses</CardTitle>
                <CardDescription>When did it happen?</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>Tenses tell us when an action happens.</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg space-y-4">
                   <div>
                       <h3 className="font-bold">Past Tense (Happened Before)</h3>
                       <p>Example: I <strong>walked</strong> to school yesterday.</p>
                   </div>
                   <div>
                       <h3 className="font-bold">Present Tense (Happening Now)</h3>
                       <p>Example: I <strong>walk</strong> to school every day.</p>
                   </div>
                   <div>
                       <h3 className="font-bold">Future Tense (Will Happen Later)</h3>
                       <p>Example: I <strong>will walk</strong> to school tomorrow.</p>
                   </div>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/articles"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/sentence-making">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
