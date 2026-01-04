'use server';
/**
 * @fileOverview Generates customized quizzes based on learned modules and covers gaps from previous quizzes.
 *
 * - generateQuiz - A function that generates the quiz.
 * - QuizGenerationInput - The input type for the generateQuiz function.
 * - QuizGenerationOutput - The return type for the generateQuiz function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuizQuestionSchema = z.object({
  question: z.string().describe('The text of the quiz question.'),
  options: z.array(z.string()).describe('An array of possible answers to the question.'),
  correctAnswerIndex: z
    .number()
    .int()
    .min(0)
    .describe('The index of the correct answer in the options array.'),
  topic: z.string().describe('The topic of the quiz question.'),
});

const QuizGenerationInputSchema = z.object({
  modulesLearned: z
    .array(z.string())
    .describe('An array of names or descriptions of the modules the student has learned.'),
  previousQuizResults: z
    .array(z.object({question: z.string(), isCorrect: z.boolean()}))
    .describe(
      'An array of objects representing the results of previous quizzes, including the question text and whether the student answered correctly.'
    ),
  studentAge: z.number().int().describe('The age of the student for whom the quiz is being generated.'),
});
export type QuizGenerationInput = z.infer<typeof QuizGenerationInputSchema>;

const QuizGenerationOutputSchema = z.object({
  quiz: z.array(QuizQuestionSchema).describe('An array of quiz questions.'),
});
export type QuizGenerationOutput = z.infer<typeof QuizGenerationOutputSchema>;

export async function generateQuiz(input: QuizGenerationInput): Promise<QuizGenerationOutput> {
  return quizGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'quizGenerationPrompt',
  input: {schema: QuizGenerationInputSchema},
  output: {schema: QuizGenerationOutputSchema},
  prompt: `You are an expert quiz generator for children aged {{studentAge}}. You will generate a quiz based on the modules the student has learned, and you will select questions that cover gaps from previously completed quizzes.

Here are the modules the student has learned:
{{#each modulesLearned}}
- {{this}}
{{/each}}

Here are the results of the student's previous quizzes:
{{#each previousQuizResults}}
- Question: {{this.question}}, Correct: {{this.isCorrect}}
{{/each}}

Generate a quiz with questions that cover the modules learned, focusing on areas where the student has struggled in previous quizzes. Make sure the questions are appropriate for a child aged {{studentAge}}.

Output the quiz in JSON format, with an array of quiz questions. Each question should have the following properties:
- question: The text of the quiz question.
- options: An array of possible answers to the question.
- correctAnswerIndex: The index of the correct answer in the options array.
- topic: The topic of the quiz question.
`,
});

const quizGenerationFlow = ai.defineFlow(
  {
    name: 'quizGenerationFlow',
    inputSchema: QuizGenerationInputSchema,
    outputSchema: QuizGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
