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
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Calculator, BookOpen, FlaskConical } from 'lucide-react';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useMemo } from 'react';

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
  const { user, firestore } = useFirebase();

  const userProgressQuery = useMemoFirebase(
    () => (user ? collection(firestore, 'users', user.uid, 'progress') : null),
    [user, firestore]
  );
  const { data: userProgress } = useCollection(userProgressQuery);

  const lastProgress = useMemo(() => {
    if (!userProgress || userProgress.length === 0) return null;
    
    const sortedProgress = [...userProgress]
      .filter(p => p.lastAccessTime)
      .sort((a, b) => {
        const timeA = a.lastAccessTime?.toDate()?.getTime() || 0;
        const timeB = b.lastAccessTime?.toDate()?.getTime() || 0;
        return timeB - timeA;
      });

    return sortedProgress.find(p => !p.completed) || sortedProgress[0] || null;
  }, [userProgress]);

  const lastProgressInfo = useMemo(() => {
    if (!lastProgress) return null;

    const [subject, level] = lastProgress.moduleId.split('-');
    const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);
    
    return {
      subject,
      level,
      subjectName,
      href: `/${subject}/levels/${level}`,
      description: `You're working on ${subjectName} Level ${level}.`
    };
  }, [lastProgress]);


  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Welcome back, {user?.displayName || 'Explorer'}!</h1>
        <p className="text-muted-foreground">Ready to start a new learning adventure today?</p>
      </div>

      {lastProgress && lastProgressInfo && (
        <Card className="bg-primary/10 border-primary/50">
          <CardHeader>
            <CardTitle className="font-headline">Continue Your Quest</CardTitle>
            <CardDescription>{lastProgressInfo.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{lastProgress.score}%</span>
              <Progress value={lastProgress.score} className="h-3 flex-1" />
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href={lastProgressInfo.href}>
                Jump Back In <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      )}

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
