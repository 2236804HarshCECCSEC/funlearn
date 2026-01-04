'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mathLevels, type MCQ } from '@/lib/math-questions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useFirebase, setDocumentNonBlocking, addDocumentNonBlocking } from '@/firebase';
import { doc, serverTimestamp, collection } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

const PASSING_SCORE_PERCENTAGE = 70;

export default function MathLevelPage() {
  const router = useRouter();
  const params = useParams();
  const { user, firestore } = useFirebase();
  const { toast } = useToast();

  const levelNumber = parseInt(params.level as string, 10);
  const level = mathLevels.find((l) => l.level === levelNumber);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState<'active' | 'results'>('active');

  if (!level) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Level not found!</h1>
        <Button onClick={() => router.push('/math/levels')} className="mt-4">
          Back to Levels
        </Button>
      </div>
    );
  }

  const questions = level.questions;
  const currentQuestion: MCQ = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return; // Prevent changing answer

    setSelectedAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
    if (answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      handleQuizCompletion();
      setQuizState('results');
    }
  };
  
  const handleQuizCompletion = () => {
    if (!user || !level) return;
    const finalScore = Math.round((score / questions.length) * 100);
    const isCompleted = finalScore >= PASSING_SCORE_PERCENTAGE;
    
    const moduleId = `math-${level.level}`;
    const progressRef = doc(firestore, 'users', user.uid, 'progress', moduleId);

    setDocumentNonBlocking(progressRef, {
      id: moduleId,
      userId: user.uid,
      moduleId: moduleId,
      score: finalScore,
      completed: isCompleted,
      lastAccessTime: serverTimestamp(),
    }, { merge: true });

    let badgeToAward: { id: string; name: string } | null = null;
    if (finalScore >= 90) {
      badgeToAward = { id: 'gold-badge', name: `Gold Medalist: ${level.title}` };
    } else if (finalScore >= 80) {
      badgeToAward = { id: 'silver-badge', name: `Silver Medalist: ${level.title}` };
    } else if (finalScore >= 75) {
      badgeToAward = { id: 'bronze-badge', name: `Bronze Medalist: ${level.title}` };
    }

    if (badgeToAward) {
      const userBadgeRef = collection(firestore, 'users', user.uid, 'badges');
      const newBadge = {
        userId: user.uid,
        badgeId: badgeToAward.id,
        name: badgeToAward.name,
        awardedDate: serverTimestamp(),
      };
      addDocumentNonBlocking(userBadgeRef, newBadge).then((docRef) => {
         toast({
          title: "New Badge Unlocked!",
          description: `You've earned the "${badgeToAward?.name}" badge!`,
        });
      });
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setQuizState('active');
  }

  if (quizState === 'results') {
    const finalScore = Math.round((score / questions.length) * 100);
    const isCompleted = finalScore >= PASSING_SCORE_PERCENTAGE;
    return (
        <div className="w-full max-w-2xl mx-auto text-center py-8">
            <Card className="bg-secondary">
                <CardHeader>
                    <Trophy className="h-16 w-16 text-accent mx-auto" />
                    <CardTitle className="text-3xl font-headline mt-4">Level {level.level} Complete!</CardTitle>
                    <CardDescription>
                      {isCompleted ? "You passed! On to the next challenge!" : "Good try! You can do better next time."}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-5xl font-bold">{finalScore}%</p>
                    <p className="text-muted-foreground mt-2">You answered {score} out of {questions.length} questions correctly.</p>
                </CardContent>
                <CardFooter className="flex-col gap-4">
                    <Button onClick={resetQuiz} className="w-full">Try Again</Button>
                    <Button asChild variant="outline" className="w-full">
                       <Link href="/math/levels">Back to Levels</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="text-center mb-4">
          <h1 className="text-3xl font-bold font-headline">{level.title}</h1>
          <p className="text-muted-foreground">Question {currentQuestionIndex + 1} of {questions.length}</p>
      </div>
      <Progress value={progress} className="mb-4" />
      <Card>
        <CardHeader>
          {currentQuestion.visual && (
             <div className="text-4xl text-center p-4 bg-muted rounded-lg select-none" aria-hidden="true">
                {currentQuestion.visual}
             </div>
          )}
          <CardTitle className="text-2xl pt-4">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = currentQuestion.correctAnswer === option;
            return (
              <Button
                key={option}
                variant="outline"
                size="lg"
                className={cn(
                  'h-auto justify-start p-4 text-lg whitespace-normal',
                  selectedAnswer && isCorrect && isSelected && 'bg-green-100 border-green-500 text-green-800 hover:bg-green-100 dark:bg-green-900/50 dark:text-green-200 dark:border-green-700',
                  selectedAnswer && !isCorrect && isSelected && 'bg-red-100 border-red-500 text-red-800 hover:bg-red-100 dark:bg-red-900/50 dark:text-red-200 dark:border-red-700'
                )}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedAnswer}
              >
                <div className="flex-1 text-left">{option}</div>
                 {selectedAnswer && isCorrect && isSelected && <CheckCircle2 className="h-6 w-6 text-green-600" />}
                 {selectedAnswer && !isCorrect && isSelected && <XCircle className="h-6 w-6 text-red-600" />}
              </Button>
            );
          })}
        </CardContent>
        <CardFooter>
          {selectedAnswer && (
            <div className="w-full text-center">
                 <p className={cn("font-semibold mb-4", selectedAnswer === currentQuestion.correctAnswer ? "text-green-600" : "text-red-600")}>
                    {selectedAnswer !== currentQuestion.correctAnswer ? `Not quite! The correct answer was ${currentQuestion.correctAnswer}.` : 'Correct! Great job!'}
                </p>
                <Button onClick={goToNextQuestion} className="w-full">
                    {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
