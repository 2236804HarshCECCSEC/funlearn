'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { user } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Trophy,
  Star,
  Zap,
} from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartData = [
  { subject: 'Maths', progress: 75, fill: 'var(--color-maths)' },
  { subject: 'English', progress: 90, fill: 'var(--color-english)' },
  { subject: 'Science', progress: 60, fill: 'var(--color-science)' },
];

const chartConfig = {
  progress: {
    label: 'Progress',
  },
  maths: {
    label: 'Maths',
    color: 'hsl(var(--chart-1))',
  },
  english: {
    label: 'English',
    color: 'hsl(var(--chart-2))',
  },
  science: {
    label: 'Science',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;


export default function ProfilePage() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === user.avatar);

  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center gap-6 space-y-0">
          <Avatar className="h-24 w-24 border-4 border-primary">
            {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={user.name} data-ai-hint={avatarImage.imageHint} />}
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold font-headline">{user.name}</h1>
            <p className="text-muted-foreground">Level {user.level} - The Explorer</p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <Star className="w-5 h-5 text-accent" />
              <span className="font-bold">{user.points.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">Points</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 text-center">
             <div className="flex-1 flex flex-col items-center gap-2 p-4 bg-secondary rounded-lg">
                <Trophy className="w-8 h-8 text-primary" />
                <p className="font-bold text-2xl">{user.badges.length}</p>
                <p className="text-sm text-muted-foreground">Badges Earned</p>
             </div>
             <div className="flex-1 flex flex-col items-center gap-2 p-4 bg-secondary rounded-lg">
                <Zap className="w-8 h-8 text-primary" />
                <p className="font-bold text-2xl">12</p>
                <p className="text-sm text-muted-foreground">Quizzes Completed</p>
             </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>My Badges</CardTitle>
            <CardDescription>A collection of your amazing achievements!</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {user.badges.map((badgeInfo) => {
              const badgeImage = PlaceHolderImages.find((img) => img.id === badgeInfo.id);
              return (
                <div key={badgeInfo.name} className="flex flex-col items-center text-center gap-2 p-2 rounded-lg hover:bg-secondary transition-colors">
                  {badgeImage ? (
                    <Image
                      src={badgeImage.imageUrl}
                      alt={badgeInfo.name}
                      width={64}
                      height={64}
                      className="rounded-full border-2 border-accent"
                      data-ai-hint={badgeImage.imageHint}
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-muted border-2 border-accent" />
                  )}
                  <p className="font-semibold text-sm">{badgeInfo.name}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subject Mastery</CardTitle>
            <CardDescription>Your progress in each subject area.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="w-full h-[250px]">
              <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: -10 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="subject"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    tickFormatter={(value) => `${value}%`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="progress" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
