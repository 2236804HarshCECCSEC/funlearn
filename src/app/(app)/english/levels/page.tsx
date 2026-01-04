'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { englishLevels } from '@/lib/english-questions';
import { Lock, Unlock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useFirebase, useCollection, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';

export default function EnglishLevelsPage() {
    const { user, firestore } = useFirebase();

    const userProgressQuery = useMemoFirebase(
      () => (user ? collection(firestore, 'users', user.uid, 'progress') : null),
      [user, firestore]
    );
    const { data: userProgress, isLoading } = useCollection(userProgressQuery);

    const highestCompletedEnglishLevel = userProgress
      ?.filter(p => p.moduleId.startsWith('english-') && p.completed)
      .map(p => parseInt(p.moduleId.split('-')[1], 10))
      .reduce((max, level) => (level > max ? level : max), 0) || 0;

    const unlockedLevels = highestCompletedEnglishLevel + 1;

    if (isLoading) {
      return (
        <div className="container mx-auto max-w-4xl py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold font-headline">English Levels</h1>
                <p className="text-lg text-muted-foreground mt-2">Loading your progress...</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                 <Card key={i} className="h-[158px] bg-muted/50"></Card>
              ))}
            </div>
        </div>
      )
    }

    return (
        <div className="container mx-auto max-w-4xl py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold font-headline">English Levels</h1>
                <p className="text-lg text-muted-foreground mt-2">Select a level to start your quiz!</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {englishLevels.map(level => {
                    const isUnlocked = level.level <= unlockedLevels;
                    const progress = userProgress?.find(p => p.moduleId === `english-${level.level}`);
                    const isCompleted = progress?.completed;

                    return (
                        <Link key={level.level} href={isUnlocked ? `/english/levels/${level.level}` : '#'} className={!isUnlocked ? 'pointer-events-none' : ''}>
                            <Card className={`flex flex-col h-full transition-all ${isUnlocked ? 'hover:border-primary hover:shadow-lg' : 'bg-muted/50 text-muted-foreground'}`}>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardDescription>Level {level.level}</CardDescription>
                                            <CardTitle className="text-xl font-bold">{level.title}</CardTitle>
                                        </div>
                                        {isCompleted ? <CheckCircle className="h-5 w-5 text-green-500" /> : isUnlocked ? <Unlock className="h-5 w-5 text-yellow-500" /> : <Lock className="h-5 w-5" />}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm">{level.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
