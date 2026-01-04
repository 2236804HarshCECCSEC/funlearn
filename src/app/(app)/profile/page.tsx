'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';

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
  const { user, firestore } = useFirebase();

  const userBadgesQuery = useMemoFirebase(
    () => (user ? collection(firestore, 'users', user.uid, 'badges') : null),
    [user, firestore]
  );
  const { data: userBadges } = useCollection(userBadgesQuery);

  const badges = userBadges || [];

  return (
    <div className="flex flex-col gap-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>My Badges</CardTitle>
            <CardDescription>A collection of your amazing achievements!</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {badges.map((badgeInfo) => {
              const badgeImage = PlaceHolderImages.find((img) => img.id === badgeInfo.badgeId);
              return (
                <div key={badgeInfo.id} className="flex flex-col items-center text-center gap-2 p-2 rounded-lg hover:bg-secondary transition-colors">
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
             {badges.length === 0 && (
              <p className="text-muted-foreground col-span-full text-center">No badges earned yet. Keep learning!</p>
            )}
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
