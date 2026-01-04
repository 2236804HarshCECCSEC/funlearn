'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { AreaChart, Target, Zap, Clock } from 'lucide-react';

const getSubjectProgress = (progressData: any[], subject: string) => {
  if (!progressData) return [];
  return progressData
    .filter((p) => p.moduleId?.toLowerCase().startsWith(subject))
    .map((p) => ({
      name: `Level ${p.moduleId.split('-').pop()}`,
      score: p.score,
      completed: p.completed,
    }));
};

export default function ProgressReportPage() {
  const { user, firestore } = useFirebase();

  const userProgressQuery = useMemoFirebase(
    () => (user ? collection(firestore, 'users', user.uid, 'progress') : null),
    [user, firestore]
  );
  const { data: userProgress, isLoading } = useCollection(userProgressQuery);

  const totalQuizzes = userProgress?.length || 0;
  const completedQuizzes = userProgress?.filter((p) => p.completed).length || 0;
  const averageScore =
    totalQuizzes > 0
      ? Math.round(
          userProgress.reduce((acc, p) => acc + p.score, 0) / totalQuizzes
        )
      : 0;

  const mathsProgress = getSubjectProgress(userProgress || [], 'math');
  const englishProgress = getSubjectProgress(userProgress || [], 'english');
  const scienceProgress = getSubjectProgress(userProgress || [], 'science');
  
  const recentActivity = userProgress?.sort((a,b) => b.lastAccessTime - a.lastAccessTime).slice(0, 5) || [];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-primary/10 border-2 border-primary/20">
          <AreaChart className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold font-headline">Progress Report</h1>
          <p className="text-muted-foreground">
            Here&apos;s a detailed look at your learning journey.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Quizzes Completed
            </CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedQuizzes}</div>
            <p className="text-xs text-muted-foreground">
              out of {totalQuizzes} quizzes started
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageScore}%</div>
            <p className="text-xs text-muted-foreground">across all subjects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Spent</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2h</div>
            <p className="text-xs text-muted-foreground">
              (Feature coming soon!)
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>
              Your scores across different subjects.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[{ name: 'Maths', score: (mathsProgress.reduce((acc, p) => acc+p.score, 0) / (mathsProgress.length||1)) || 0}, { name: 'English', score: (englishProgress.reduce((acc, p) => acc+p.score, 0) / (englishProgress.length||1)) || 0 }, { name: 'Science', score: (scienceProgress.reduce((acc, p) => acc+p.score, 0) / (scienceProgress.length||1)) || 0 }]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="%" />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
           <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Quizzes you've recently completed or practiced.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
                <p>Loading recent activity...</p>
            ) : recentActivity.length > 0 ? (
                <ul className="space-y-4">
                    {recentActivity.map(activity => (
                        <li key={activity.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                            <div>
                                <p className="font-semibold capitalize">{activity.moduleId?.replace('-', ' ')}</p>
                                <p className="text-sm text-muted-foreground">
                                    {new Date(activity.lastAccessTime?.toDate()).toLocaleDateString()}
                                </p>
                            </div>
                            <div className={`font-bold text-lg ${activity.score >= 70 ? 'text-green-600' : 'text-orange-500'}`}>
                                {activity.score}%
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground text-center py-4">No recent activity to show.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
