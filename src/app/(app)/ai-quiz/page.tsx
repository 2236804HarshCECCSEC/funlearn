'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateQuiz, type QuizGenerationOutput } from '@/ai/flows/quiz-generation';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { FileQuestion, Sparkles, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  modulesLearned: z.string().min(3, 'Please enter at least one module.'),
  previousQuizResults: z.string().optional(),
  studentAge: z.coerce.number().min(6, 'Age must be at least 6.').max(12, 'Age must be at most 12.'),
});

type QuizState = 'form' | 'loading' | 'active' | 'results';

export default function AiQuizPage() {
  const [quizState, setQuizState] = useState<QuizState>('form');
  const [quiz, setQuiz] = useState<QuizGenerationOutput | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      modulesLearned: 'Addition, Subtraction, Basic Geometry',
      previousQuizResults: '{"question": "2+2", "isCorrect": true}, {"question": "What is a square?", "isCorrect": false}',
      studentAge: 7,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setQuizState('loading');
    let parsedResults = [];
    try {
      if (values.previousQuizResults) {
        parsedResults = JSON.parse(`[${values.previousQuizResults}]`);
      }
    } catch (e) {
      toast({ title: 'Invalid format for previous results.', variant: 'destructive' });
      setQuizState('form');
      return;
    }

    try {
      const result = await generateQuiz({
        modulesLearned: values.modulesLearned.split(',').map((s) => s.trim()),
        previousQuizResults: parsedResults,
        studentAge: values.studentAge,
      });
      if (result.quiz && result.quiz.length > 0) {
        setQuiz(result);
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setScore(0);
        setQuizState('active');
      } else {
         toast({ title: 'Quiz Generation Failed', description: 'The AI could not generate a quiz. Please try different topics.' });
         setQuizState('form');
      }
    } catch (error) {
      console.error(error);
      toast({ title: 'Error Generating Quiz', description: 'An unexpected error occurred.', variant: 'destructive' });
      setQuizState('form');
    }
  }

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answerIndex }));
    if (quiz?.quiz[questionIndex].correctAnswerIndex === answerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const goToNextQuestion = () => {
    if (quiz && currentQuestionIndex < quiz.quiz.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizState('results');
    }
  };
  
  const resetQuiz = () => {
    setQuizState('form');
    setQuiz(null);
  }

  const currentQuestion = quiz?.quiz[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const progress = quiz ? ((currentQuestionIndex + 1) / quiz.quiz.length) * 100 : 0;

  if (quizState === 'loading') {
    return (
       <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
          <Sparkles className="h-16 w-16 text-primary animate-spin" />
          <h2 className="text-2xl font-bold mt-4">Generating your quiz...</h2>
          <p className="text-muted-foreground">Our AI is crafting the perfect questions!</p>
       </div>
    );
  }

  if (quizState === 'active' && currentQuestion) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <Progress value={progress} className="mb-4" />
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-headline">Question {currentQuestionIndex + 1} of {quiz?.quiz.length}</CardTitle>
            <CardDescription>Topic: {currentQuestion.topic}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-6">{currentQuestion.question}</p>
            <RadioGroup
              onValueChange={(value) => handleAnswer(currentQuestionIndex, parseInt(value))}
              disabled={selectedAnswer !== undefined}
              value={selectedAnswer?.toString()}
            >
              {currentQuestion.options.map((option, index) => {
                 const isSelected = selectedAnswer === index;
                 const isCorrect = currentQuestion.correctAnswerIndex === index;
                 return (
                    <FormItem
                      key={index}
                      className={cn(
                        "flex items-center space-x-3 space-y-0 rounded-lg border p-4 transition-all",
                        selectedAnswer !== undefined && isCorrect && "border-green-500 bg-green-500/10",
                        selectedAnswer !== undefined && isSelected && !isCorrect && "border-red-500 bg-red-500/10"
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value={index.toString()} />
                      </FormControl>
                      <FormLabel className="font-normal w-full">{option}</FormLabel>
                      {selectedAnswer !== undefined && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                      {selectedAnswer !== undefined && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                    </FormItem>
                 );
              })}
            </RadioGroup>
          </CardContent>
          <CardFooter>
            {selectedAnswer !== undefined && (
              <Button onClick={goToNextQuestion} className="w-full">
                {currentQuestionIndex === (quiz?.quiz.length ?? 0) - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  if (quizState === 'results') {
    return (
        <div className="w-full max-w-2xl mx-auto text-center">
            <Card className="bg-secondary">
                <CardHeader>
                    <Trophy className="h-16 w-16 text-accent mx-auto" />
                    <CardTitle className="text-3xl font-headline mt-4">Quiz Complete!</CardTitle>
                    <CardDescription>Great job on finishing the quiz.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-5xl font-bold">{Math.round((score / (quiz?.quiz.length ?? 1)) * 100)}%</p>
                    <p className="text-muted-foreground mt-2">You answered {score} out of {quiz?.quiz.length} questions correctly.</p>
                </CardContent>
                <CardFooter className="flex-col gap-4">
                    <Button onClick={resetQuiz} className="w-full">Take Another Quiz</Button>
                    <Button asChild variant="outline" className="w-full"><Link href="/quiz">Back to Main Quiz Page</Link></Button>
                </CardFooter>
            </Card>
        </div>
    )
  }

  return (
    <div className="container mx-auto max-w-3xl py-8">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="p-3 rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
          <FileQuestion className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline">AI Quiz Generator</h1>
        <p className="text-lg text-muted-foreground mt-2">Create a custom quiz on any topic to test your knowledge.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Generate a New Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="modulesLearned"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topics or Modules Learned</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Fractions, World War II, Photosynthesis" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="studentAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student's Age (6-12)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 9" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="previousQuizResults"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous Quiz Gaps (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='e.g., {"question": "Capital of France", "isCorrect": false}'
                        className="font-code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Generate Quiz <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
