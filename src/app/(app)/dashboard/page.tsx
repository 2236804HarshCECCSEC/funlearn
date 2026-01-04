'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, FlaskConical } from 'lucide-react';
import { useFirebase } from '@/firebase';

const subjects = [
  {
    name: 'Maths',
    description: 'Numbers, shapes, and logic.',
    icon: Calculator,
    href: '/math/levels',
    moduleCount: 10,
    subject: 'math',
  },
  {
    name: 'English',
    description: 'Reading, writing, and stories.',
    icon: BookOpen,
    href: '/english/levels',
    moduleCount: 10,
    subject: 'english',
  },
  {
    name: 'Science',
    description: 'Exploring the world around us.',
    icon: FlaskConical,
    href: '/science/levels',
    moduleCount: 10,
    subject: 'science',
  },
];

export default function DashboardPage() {
  const { user } = useFirebase();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Welcome back, {user?.displayName || 'Explorer'}!</h1>
        <p className="text-muted-foreground">Ready to start a new learning adventure today?</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-4">Choose a Subject</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <Card key={subject.name} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                <div className="p-3 rounded-lg bg-secondary">
                  <subject.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline">{subject.name}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Explore {subject.moduleCount} fun modules, from basic concepts to advanced puzzles.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={subject.href}>
                    Start Learning
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
