'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  generatePersonalizedLearningPath,
  type PersonalizedLearningPathOutput,
} from '@/ai/flows/personalized-learning-paths';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { useUser } from '@/firebase';

const formSchema = z.object({
  childName: z.string().min(2, 'Please enter a name.'),
  age: z.coerce.number().min(6, 'Age must be at least 6.').max(12, 'Age must be at most 12.'),
  performanceData: z.string().min(20, 'Please describe performance in at least 20 characters.'),
  desiredLearningOutcomes: z.string().min(20, 'Please describe goals in at least 20 characters.'),
});

export default function LearningPathPage() {
  const { user } = useUser();
  const [learningPath, setLearningPath] = useState<PersonalizedLearningPathOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: user?.displayName || '',
      age: 8,
      performanceData: 'Strong in basic addition but struggles with multiplication tables. Enjoys reading short stories but finds grammar rules difficult. Knows basic concepts about plants and animals.',
      desiredLearningOutcomes: 'Improve multiplication skills, understand sentence structure better, and learn about the solar system.',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setLearningPath(null);
    try {
      const result = await generatePersonalizedLearningPath(values);
      setLearningPath(result);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error Generating Path',
        description: 'There was an issue creating the personalized learning path. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="p-3 rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
          <Lightbulb className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline">AI-Powered Learning Path</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
          Let our AI analyze your child&apos;s needs and create a unique learning journey just for them!
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create a Custom Plan</CardTitle>
          <CardDescription>Fill in the details below to generate a new learning path.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="childName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Child's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Jamie" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age (6-12)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 8" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="performanceData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Performance Summary</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe strengths and weaknesses in Maths, English, and Science..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desiredLearningOutcomes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Learning Goals</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What are the main goals? e.g., 'Improve algebra', 'learn creative writing'..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? 'Generating...' : 'Generate Path'}
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isLoading && (
        <Card className="mt-8">
            <CardHeader>
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </CardContent>
        </Card>
      )}

      {learningPath && (
        <Card className="mt-8 bg-secondary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl">
              <Sparkles className="text-accent" />
              Your Personalized Learning Path!
            </CardTitle>
            <CardDescription>
              Here is a suggested plan to help {form.getValues('childName')} achieve their goals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-blue max-w-none dark:prose-invert">
              <p>{learningPath.learningPath}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
