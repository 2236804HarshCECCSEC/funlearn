'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Gamepad2, School } from 'lucide-react';
import Link from 'next/link';

export default function MathPage() {
  return (
    <div className="container mx-auto max-w-2xl py-8">
       <div className="flex flex-col items-center text-center mb-8">
        <div className="p-3 rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
          <Calculator className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline">Maths Quests</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
          Choose a quest and start your adventure!
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Your Challenge</CardTitle>
          <CardDescription>Test your skills with our fun math challenges.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <Link href="/math/levels" legacyBehavior passHref>
                <a className="block p-6 bg-secondary/80 rounded-lg hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-4">
                        <School className="h-8 w-8 text-primary" />
                        <div>
                            <h3 className="text-lg font-bold">Level Challenge</h3>
                            <p className="text-sm text-muted-foreground">Progress through 10 levels of increasing difficulty.</p>
                        </div>
                    </div>
                </a>
            </Link>
            <Link href="/math/game" legacyBehavior passHref>
                 <a className="block p-6 bg-secondary/80 rounded-lg hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-4">
                        <Gamepad2 className="h-8 w-8 text-primary" />
                        <div>
                            <h3 className="text-lg font-bold">Quick Play</h3>
                            <p className="text-sm text-muted-foreground">Solve random problems to earn points!</p>
                        </div>
                    </div>
                </a>
            </Link>
        </CardContent>
      </Card>
    </div>
  );
}
