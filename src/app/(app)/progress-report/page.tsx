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
  LineChart,
  Line,
} from 'recharts';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { AreaChart, Target, Zap, Clock, TrendingUp } from 'lucide-react';
import { useMemo } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const getSubjectProgress = (progressData: any[], subject: string) => {
  if (!progressData) return [];
  return progressData
    .filter((p) => p.moduleId?.toLowerCase().startsWith(subject))
    .sort((a,b) => parseInt(a.moduleId.split('-')[1]) - parseInt(b.moduleId.split('-')[1]))
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

  const {
    totalQuizzes,
    completedQuizzes,
    averageScore,
    mathsProgress,
    englishProgress,
    scienceProgress,
    recentActivity,
    overallProgress,
  } = useMemo(() => {
    const progress = userProgress || [];
    const totalQuizzes = progress.length;
    const completedQuizzes = progress.filter((p) => p.completed).length;
    const averageScore =
      totalQuizzes > 0
        ? Math.round(
            progress.reduce((acc, p) => acc + p.score, 0) / totalQuizzes
          )
        : 0;

    const maths = getSubjectProgress(progress, 'math');
    const english = getSubjectProgress(progress, 'english');
    const science = getSubjectProgress(progress, 'science');
    
    const recent = progress
      .sort((a, b) => {
          const timeA = a.lastAccessTime?.toDate()?.getTime() || 0;
          const timeB = b.lastAccessTime?.toDate()?.getTime() || 0;
          return timeB - timeA;
      })
      .slice(0, 5);

    const overall = progress
      .sort((a, b) => {
          const timeA = a.lastAccessTime?.toDate()?.getTime() || 0;
          const timeB = b.lastAccessTime?.toDate()?.getTime() || 0;
          return timeA - timeB;
      })
      .map((p, index) => ({
          name: `Quiz ${index + 1}`,
          score: p.score,
          subject: p.moduleId.split('-')[0]
      }));

    return {
      totalQuizzes,
      completedQuizzes,
      averageScore,
      mathsProgress: maths,
      englishProgress: english,
      scienceProgress: science,
      recentActivity: recent,
      overallProgress: overall,
    };
  }, [userProgress]);

  const subjectAverages = useMemo(() => ([
    { name: 'Maths', score: (mathsProgress.reduce((acc, p) => acc + p.score, 0) / (mathsProgress.length || 1)) || 0 },
    { name: 'English', score: (englishProgress.reduce((acc, p) => acc + p.score, 0) / (englishProgress.length || 1)) || 0 },
    { name: 'Science', score: (scienceProgress.reduce((acc, p) => acc + p.score, 0) / (scienceProgress.length || 1)) || 0 },
  ]), [mathsProgress, englishProgress, scienceProgress]);


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
            <CardTitle className="text-sm font-medium">Quizzes Completed</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? <Skeleton className="h-8 w-1/2" /> : <div className="text-2xl font-bold">{completedQuizzes}</div>}
            {isLoading ? <Skeleton className="h-4 w-3/4 mt-1" /> : <p className="text-xs text-muted-foreground">out of {totalQuizzes} quizzes started</p>}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? <Skeleton className="h-8 w-1/2" /> : <div className="text-2xl font-bold">{averageScore}%</div>}
            {isLoading ? <Skeleton className="h-4 w-3/4 mt-1" /> : <p className="text-xs text-muted-foreground">across all subjects</p>}
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Trend</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
                {overallProgress.length > 1 ? (overallProgress[overallProgress.length - 1].score > overallProgress[0].score ? "Improving" : "Steady") : "N/A"}
            </div>
            <p className="text-xs text-muted-foreground">based on your quiz scores</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>Your average scores across different subjects.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? <Skeleton className="w-full h-[300px]" /> :
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectAverages}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="%" domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>}
          </CardContent>
        </Card>
        <Card>
           <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Quizzes you've recently completed or practiced.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
                </div>
            ) : recentActivity.length > 0 ? (
                <ul className="space-y-4">
                    {recentActivity.map(activity => (
                        <li key={activity.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                            <div>
                                <p className="font-semibold capitalize">{activity.moduleId?.replace('-', ' ')}</p>
                                <p className="text-sm text-muted-foreground">
                                    {activity.lastAccessTime ? new Date(activity.lastAccessTime?.toDate()).toLocaleDateString() : 'N/A'}
                                </p>
                            </div>
                            <div className={`font-bold text-lg ${activity.score >= 70 ? 'text-green-600' : 'text-orange-500'}`}>
                                {activity.score}%
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground text-center py-4">No recent activity to show. Complete a quiz to get started!</p>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle>Progress Over Time</CardTitle>
            <CardDescription>See how your scores have improved with each quiz.</CardDescription>
        </CardHeader>
        <CardContent>
             {isLoading ? <Skeleton className="w-full h-[300px]" /> :
             <ResponsiveContainer width="100%" height={300}>
                <LineChart data={overallProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis unit="%" domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>}
        </CardContent>
      </Card>
    </div>
  );
}
