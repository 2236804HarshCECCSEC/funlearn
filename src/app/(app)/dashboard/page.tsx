'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, FlaskConical, Trophy, Zap, Star } from 'lucide-react';
import { useCollection, useDoc, useFirebase, useMemoFirebase } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';


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

  const userDocRef = useMemoFirebase(
    () => (user ? doc(firestore, 'users', user.uid) : null),
    [user, firestore]
  );
  const { data: userProfile } = useDoc(userDocRef);

  const userBadgesQuery = useMemoFirebase(
    () => (user ? collection(firestore, 'users', user.uid, 'badges') : null),
    [user, firestore]
  );
  const { data: userBadges } = useCollection(userBadgesQuery);

  const userProgressQuery = useMemoFirebase(
    () => (user ? collection(firestore, 'users', user.uid, 'progress') : null),
    [user, firestore]
  );
  const { data: userProgress } = useCollection(userProgressQuery);

  const avatarImage = PlaceHolderImages.find((img) => img.id === 'user-avatar-2');
  const displayName = userProfile?.userName || user?.displayName || 'Explorer';
  const level = userProfile?.level || 1;
  const points = userProfile?.points || 0;
  const badges = userBadges || [];
  const quizzesCompleted = userProgress?.filter(p => p.completed).length || 0;


  return (
    <div className="flex flex-col gap-8">
       <Card>
        <CardHeader className="flex flex-col md:flex-row items-center gap-6 space-y-0">
          <Avatar className="h-24 w-24 border-4 border-primary">
            {avatarImage && <AvatarImage src={userProfile?.avatar || avatarImage.imageUrl} alt={displayName} data-ai-hint={avatarImage.imageHint} />}
            <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold font-headline">Welcome back, {displayName}!</h1>
            <p className="text-muted-foreground">Ready to start a new learning adventure today?</p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <Star className="w-5 h-5 text-accent" />
              <span className="font-bold">{points.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">Points</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 text-center">
             <div className="flex-1 flex flex-col items-center gap-2 p-4 bg-secondary rounded-lg">
                <Trophy className="w-8 h-8 text-primary" />
                <p className="font-bold text-2xl">{badges.length}</p>
                <p className="text-sm text-muted-foreground">Badges Earned</p>
             </div>
             <div className="flex-1 flex flex-col items-center gap-2 p-4 bg-secondary rounded-lg">
                <Zap className="w-8 h-8 text-primary" />
                <p className="font-bold text-2xl">{quizzesCompleted}</p>
                <p className="text-sm text-muted-foreground">Quizzes Completed</p>
             </div>
          </div>
        </CardContent>
      </Card>

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
