'use client';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const mathTopics = [
    {
      title: 'Numbers',
      chapters: [
        { title: 'Counting 1 to 100', href: '/colorful-books/math/counting' },
        { title: 'Number Names (One-Hundred)', href: '/colorful-books/math/number-names' },
        { title: 'Odd & Even Numbers', href: '/colorful-books/math/odd-even' },
        { title: 'Before / After / Between', href: '/colorful-books/math/before-after-between' },
      ],
    },
    {
      title: 'Basic Operations',
      chapters: [
        { title: 'Addition (using objects)', href: '/colorful-books/math/addition' },
        { title: 'Subtraction (take away concept)', href: '/colorful-books/math/subtraction' },
        { title: 'Multiplication (groups & tables)', href: '/colorful-books/math/multiplication' },
        { title: 'Division (sharing concept)', href: '/colorful-books/math/division' },
      ],
    },
    {
      title: 'Tables',
      chapters: [
        { title: 'Tables from 1 to 20', href: '/colorful-books/math/tables' },
      ],
    },
    {
      title: 'Shapes & Geometry',
      chapters: [
        { title: '2D Shapes', href: '/colorful-books/math/2d-shapes' },
        { title: '3D Shapes', href: '/colorful-books/math/3d-shapes' },
      ],
    },
    {
      title: 'Time & Money',
      chapters: [
        { title: 'Clock (hours & minutes)', href: '/colorful-books/math/time' },
        { title: 'Indian Currency Basics', href: '/colorful-books/math/money' },
      ],
    },
    {
      title: 'Mental Maths',
      chapters: [
        { title: 'Quick Addition/Subtraction', href: '/colorful-books/math/mental-maths' },
      ],
    },
];


export default function MathBookPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
       <div className="flex flex-col items-center text-center mb-8">
        <div className="p-3 rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
          <Calculator className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline">Maths Colorful Book</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Explore chapters to learn new concepts before you play!
        </p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
            <CardDescription>Click on a topic to see the chapters.</CardDescription>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
            {mathTopics.map((topic, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">{topic.title}</AccordionTrigger>
                <AccordionContent>
                    <ul className="space-y-2 pl-4">
                    {topic.chapters.map((chapter) => (
                        <li key={chapter.href}>
                        <Button variant="link" asChild className="p-0 h-auto">
                            <Link href={chapter.href} className="text-base">
                            {chapter.title}
                            </Link>
                        </Button>
                        </li>
                    ))}
                    </ul>
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </CardContent>
      </Card>
       <div className="mt-8 text-center">
            <Button asChild>
                <Link href="/math/levels">Ready for a quiz? Go to Levels!</Link>
            </Button>
       </div>
    </div>
  );
}
