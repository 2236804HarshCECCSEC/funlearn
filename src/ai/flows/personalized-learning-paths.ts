'use server';

/**
 * @fileOverview A personalized learning path generator for children.
 *
 * - generatePersonalizedLearningPath - A function that generates a personalized learning path based on a child's performance data.
 * - PersonalizedLearningPathInput - The input type for the generatePersonalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the generatePersonalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  childName: z.string().describe("The child's name."),
  age: z.number().describe('The age of the child.'),
  performanceData: z
    .string()
    .describe(
      'A summary of the child’s performance in Maths, English, and Science, including areas of strength and weakness.'
    ),
  desiredLearningOutcomes: z
    .string()
    .describe(
      'The desired learning outcomes for the child (e.g., improve math skills, learn to read fluently, understand basic science concepts).'
    ),
});
export type PersonalizedLearningPathInput = z.infer<
  typeof PersonalizedLearningPathInputSchema
>;

const PersonalizedLearningPathOutputSchema = z.object({
  learningPath: z
    .string()
    .describe(
      'A personalized learning path for the child, including recommended modules and activities for Maths, English, and Science, focusing on areas where they need the most help.'
    ),
});
export type PersonalizedLearningPathOutput = z.infer<
  typeof PersonalizedLearningPathOutputSchema
>;

export async function generatePersonalizedLearningPath(
  input: PersonalizedLearningPathInput
): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {schema: PersonalizedLearningPathInputSchema},
  output: {schema: PersonalizedLearningPathOutputSchema},
  prompt: `You are an AI learning path generator that creates personalized learning paths for children.

  Based on the child's performance data, age, and desired learning outcomes, create a personalized learning path for the child. Focus on areas where the child needs the most help.

  Child's Name: {{{childName}}}
  Age: {{{age}}}
  Performance Data: {{{performanceData}}}
  Desired Learning Outcomes: {{{desiredLearningOutcomes}}}

  Personalized Learning Path:`,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
