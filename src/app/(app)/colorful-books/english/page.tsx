'use client';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const englishTopics = [
    {
      title: 'Alphabet & Phonics',
      chapters: [
        { title: 'A-Z (Capital & Small)', href: '/colorful-books/english/alphabet' },
        { title: 'Letter Sounds', href: '/colorful-books/english/phonics' },
      ],
    },
    {
      title: 'Basic Words',
      chapters: [
        { title: 'Common Nouns', href: '/colorful-books/english/nouns' },
        { title: 'Action Words (Verbs)', href: '/colorful-books/english/verbs' },
        { title: 'Describing Words (Adjectives)', href: '/colorful-books/english/adjectives' },
      ],
    },
    {
      title: 'Spelling & Vocabulary',
      chapters: [
        { title: 'Sight Words', href: '/colorful-books/english/sight-words' },
        { title: 'Word Families', href: '/colorful-books/english/word-families' },
        { title: 'Synonyms & Antonyms', href: '/colorful-books/english/synonyms-antonyms' },
      ],
    },
    {
      title: 'Grammar Basics',
      chapters: [
        { title: 'Singular & Plural', href: '/colorful-books/english/singular-plural' },
        { title: 'Articles (a, an, the)', href: '/colorful-books/english/articles' },
        { title: 'Simple Tenses', href: '/colorful-books/english/tenses' },
      ],
    },
    {
      title: 'Sentence Formation',
      chapters: [
        { title: 'Making Simple Sentences', href: '/colorful-books/english/sentence-making' },
        { title: 'Question Words', href: '/colorful-books/english/question-words' },
      ],
    },
    {
      title: 'Reading & Comprehension',
      chapters: [
        { title: 'Short Stories', href: '/colorful-books/english/short-stories' },
        { title: 'Small Paragraphs', href: '/colorful-books/english/paragraphs' },
      ],
    },
];


export default function EnglishBookPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
       <div className="flex flex-col items-center text-center mb-8">
        <div className="p-3 rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
          <BookOpen className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline">English Colorful Book</h1>
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
            {englishTopics.map((topic, index) => (
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
                <Link href="/english/levels">Ready for a quiz? Go to Levels!</Link>
            </Button>
       </div>
    </div>
  );
}
