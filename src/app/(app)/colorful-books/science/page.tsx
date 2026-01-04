'use client';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FlaskConical } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const scienceTopics = [
    {
      title: 'Living & Non-Living Things',
      chapters: [
        { title: 'Differences & Examples', href: '/colorful-books/science/living-non-living' },
      ],
    },
    {
      title: 'Plants & Animals',
      chapters: [
        { title: 'Parts of Plants', href: '/colorful-books/science/plant-parts' },
        { title: 'Animal Types & Homes', href: '/colorful-books/science/animal-homes' },
        { title: 'Food Chains', href: '/colorful-books/science/food-chains' },
      ],
    },
    {
      title: 'Human Body',
      chapters: [
        { title: 'Body Parts & Sense Organs', href: '/colorful-books/science/human-body' },
        { title: 'Health & Hygiene', href: '/colorful-books/science/health-hygiene' },
      ],
    },
    {
      title: 'Earth & Space',
      chapters: [
        { title: 'Sun, Moon, Stars', href: '/colorful-books/science/sun-moon-stars' },
        { title: 'Day & Night', href: '/colorful-books/science/day-night' },
        { title: 'Basic Solar System', href: '/colorful-books/science/solar-system' },
      ],
    },
    {
      title: 'Matter & Energy',
      chapters: [
        { title: 'Solid, Liquid, Gas', href: '/colorful-books/science/states-of-matter' },
        { title: 'Light, Heat, Sound', href: '/colorful-books/science/energy' },
      ],
    },
     {
      title: 'Environment & Safety',
      chapters: [
        { title: 'Water & Air', href: '/colorful-books/science/environment' },
        { title: 'Safety Rules', href: '/colorful-books/science/safety' },
      ],
    },
];

export default function ScienceBookPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
       <div className="flex flex-col items-center text-center mb-8">
        <div className="p-3 rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
          <FlaskConical className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline">Science Colorful Book</h1>
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
            {scienceTopics.map((topic, index) => (
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
                <Link href="/science/levels">Ready for a quiz? Go to Levels!</Link>
            </Button>
       </div>
    </div>
  );
}
