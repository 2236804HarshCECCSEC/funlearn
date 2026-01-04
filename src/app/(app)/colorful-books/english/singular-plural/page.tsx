'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SingularPluralPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline">Singular & Plural</CardTitle>
                <CardDescription>One or many?</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
                <p>A noun can be singular (one) or plural (more than one).</p>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                   <h3 className="font-bold">Rules for Plurals</h3>
                   <ul className="list-disc pl-5">
                       <li>Most of the time, we just add <strong>-s</strong>. (e.g., cat → cats, dog → dogs)</li>
                       <li>If a word ends in -s, -x, -ch, or -sh, we add <strong>-es</strong>. (e.g., box → boxes, bus → buses)</li>
                       <li>Some words change completely! (e.g., child → children, mouse → mice)</li>
                   </ul>
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/colorful-books/english/synonyms-antonyms"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Link>
                </Button>
                <Button asChild>
                    <Link href="/colorful-books/english/articles">Next Chapter <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
