'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, FlaskConical, BookMarked } from 'lucide-react';

const subjects = [
  {
    name: 'Maths',
    description: 'Learn about numbers, shapes, and more!',
    icon: Calculator,
    href: '/colorful-books/math',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'English',
    description: 'Explore letters, words, and stories.',
    icon: BookOpen,
    href: '/colorful-books/english',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    name: 'Science',
    description: 'Discover the world around you.',
    icon: FlaskConical,
    href: '/colorful-books/science',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
];

export default function ColorfulBooksPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center text-center mb-4">
        <div className="p-3 rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
          <BookMarked className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline">Colorful Books</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
          Choose a subject to start learning with our fun and interactive books!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <Card key={subject.name} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${subject.bgColor}`}>
                  <subject.icon className={`h-8 w-8 ${subject.color}`} />
                </div>
                <div>
                  <CardTitle className="font-headline">{subject.name}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              {/* Additional content can go here if needed */}
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={subject.href}>
                  Open Book
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
