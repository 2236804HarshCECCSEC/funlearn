'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calculator, Check, ChevronsRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type Operator = '+' | '-';

interface Problem {
  num1: number;
  num2: number;
  operator: Operator;
  answer: number;
}

function generateProblem(): Problem {
  const operator: Operator = Math.random() > 0.5 ? '+' : '-';
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;

  if (operator === '-') {
    if (num1 < num2) {
      [num1, num2] = [num2, num1]; // Ensure the result is not negative
    }
  }

  const answer = operator === '+' ? num1 + num2 : num1 - num2;

  return { num1, num2, operator, answer };
}

export default function MathGamePage() {
  const [problem, setProblem] = useState<Problem>(generateProblem());
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    const answer = parseInt(userAnswer, 10);
    if (answer === problem.answer) {
      setScore(score + 1);
      setMessage('Correct! Great job!');
      setIsCorrect(true);
    } else {
      setMessage(`Not quite! The correct answer was ${problem.answer}.`);
      setIsCorrect(false);
    }
  };

  const handleNextProblem = () => {
    setProblem(generateProblem());
    setUserAnswer('');
    setMessage('');
    setIsCorrect(null);
  };

  return (
    <div className="container mx-auto max-w-2xl py-8">
       <div className="flex flex-col items-center text-center mb-8">
        <div className="p-3 rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
          <Calculator className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline">Math Whiz!</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
          Solve the problems to earn points!
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>What is the answer?</span>
             <div className="flex items-center gap-2 text-2xl font-bold text-accent">
                <Star className="h-6 w-6" />
                <span>{score}</span>
             </div>
          </CardTitle>
          <CardDescription>Type your answer in the box below.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center text-5xl font-bold font-mono bg-secondary/80 rounded-lg p-8 my-4">
            {problem.num1} {problem.operator} {problem.num2} = ?
          </div>
          <form onSubmit={checkAnswer}>
            <Input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Your Answer"
              className="text-center text-xl h-12"
              disabled={isCorrect !== null}
            />
             {isCorrect === null && (
                <Button type="submit" className="w-full mt-4" disabled={!userAnswer}>
                  Check Answer <Check className="ml-2 h-4 w-4" />
                </Button>
              )}
          </form>

        </CardContent>
        <CardFooter className="flex flex-col items-center">
            {isCorrect !== null && (
                <div className="w-full">
                    <p className={cn(
                        "text-center text-lg font-semibold mb-4",
                        isCorrect ? "text-green-600" : "text-red-600"
                    )}>
                        {message}
                    </p>
                    <Button onClick={handleNextProblem} className="w-full">
                        Next Question <ChevronsRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            )}
        </CardFooter>
      </Card>
    </div>
  );
}
