'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { mathLevels } from '@/lib/math-questions';
import { Lock, Unlock } from 'lucide-react';
import Link from 'next/link';

export default function MathLevelsPage() {
    // For now, all levels are unlocked. We can add progress logic later.
    const unlockedLevels = 10; 

    return (
        <div className="container mx-auto max-w-4xl py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold font-headline">Math Levels</h1>
                <p className="text-lg text-muted-foreground mt-2">Select a level to start your quiz!</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mathLevels.map(level => {
                    const isUnlocked = level.level <= unlockedLevels;
                    return (
                        <Link key={level.level} href={isUnlocked ? `/math/levels/${level.level}` : '#'} className={!isUnlocked ? 'pointer-events-none' : ''}>
                            <Card className={`flex flex-col h-full transition-all ${isUnlocked ? 'hover:border-primary hover:shadow-lg' : 'bg-muted/50 text-muted-foreground'}`}>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardDescription>Level {level.level}</CardDescription>
                                            <CardTitle className="text-xl font-bold">{level.title}</CardTitle>
                                        </div>
                                        {isUnlocked ? <Unlock className="h-5 w-5 text-green-500" /> : <Lock className="h-5 w-5" />}
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
