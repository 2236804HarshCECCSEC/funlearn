export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: string;
  visual?: string; // e.g., '🍎🍎 + 🍎'
}

export interface MathLevel {
  level: number;
  title: string;
  description: string;
  questions: MCQ[];
}

export const mathLevels: MathLevel[] = [
  // Level 1: Beginner
  {
    level: 1,
    title: 'Beginner Basics',
    description: 'Simple addition and subtraction with single digits.',
    questions: [
      { question: 'What is 2 + 3?', options: ['4', '5', '6', '3'], correctAnswer: '5', visual: '⭐️⭐️ + ⭐️⭐️⭐️' },
      { question: 'What is 5 - 1?', options: ['4', '3', '2', '5'], correctAnswer: '4', visual: '🍎🍎🍎🍎🍎 - 🍎' },
      { question: 'What is 4 + 1?', options: ['3', '4', '5', '6'], correctAnswer: '5' },
      { question: 'What is 3 - 2?', options: ['1', '2', '3', '0'], correctAnswer: '1' },
      { question: 'What is 6 + 2?', options: ['7', '8', '9', '6'], correctAnswer: '8' },
      { question: 'What is 8 - 3?', options: ['4', '5', '6', '7'], correctAnswer: '5' },
      { question: 'What is 1 + 5?', options: ['5', '6', '7', '4'], correctAnswer: '6' },
      { question: 'What is 7 - 4?', options: ['1', '2', '3', '4'], correctAnswer: '3' },
    ],
  },
  // Level 2: Beginner
  {
    level: 2,
    title: 'More Basics',
    description: 'Practice with single-digit addition and subtraction.',
    questions: [
      { question: 'What is 8 + 1?', options: ['7', '8', '9', '10'], correctAnswer: '9' },
      { question: 'What is 9 - 5?', options: ['3', '4', '5', '2'], correctAnswer: '4' },
      { question: 'What is 3 + 3?', options: ['5', '6', '7', '4'], correctAnswer: '6', visual: '🧸🧸🧸 + 🧸🧸🧸' },
      { question: 'What is 6 - 4?', options: ['1', '2', '3', '4'], correctAnswer: '2' },
      { question: 'What is 5 + 4?', options: ['8', '9', '10', '7'], correctAnswer: '9' },
      { question: 'What is 10 - 2?', options: ['7', '8', '9', '6'], correctAnswer: '8', visual: '⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️ - ⚽️⚽️' },
      { question: 'What is 2 + 7?', options: ['8', '9', '10', '7'], correctAnswer: '9' },
      { question: 'What is 8 - 8?', options: ['0', '1', '8', '16'], correctAnswer: '0' },
    ],
  },
  // Level 3: Easy
  {
    level: 3,
    title: 'Easy Double Digits',
    description: 'Addition, subtraction, and simple multiplication.',
    questions: [
      { question: 'What is 10 + 5?', options: ['14', '15', '16', '13'], correctAnswer: '15' },
      { question: 'What is 18 - 6?', options: ['11', '12', '13', '10'], correctAnswer: '12' },
      { question: 'What is 5 x 2?', options: ['8', '10', '12', '7'], correctAnswer: '10' },
      { question: 'What is 10 ÷ 1?', options: ['1', '10', '11', '9'], correctAnswer: '10' },
      { question: 'What is 12 + 7?', options: ['18', '19', '20', '17'], correctAnswer: '19' },
      { question: 'What is 20 - 5?', options: ['14', '15', '16', '13'], correctAnswer: '15' },
      { question: 'What is 3 x 1?', options: ['1', '3', '4', '2'], correctAnswer: '3' },
      { question: 'What is 8 ÷ 2?', options: ['2', '3', '4', '5'], correctAnswer: '4' },
    ],
  },
  // Level 4: Easy
  {
    level: 4,
    title: 'Stepping Up',
    description: 'Double digits and more multiplication/division.',
    questions: [
      { question: 'What is 15 + 10?', options: ['20', '25', '30', '24'], correctAnswer: '25' },
      { question: 'What is 25 - 7?', options: ['17', '18', '19', '16'], correctAnswer: '18' },
      { question: 'What is 6 x 2?', options: ['10', '12', '14', '11'], correctAnswer: '12' },
      { question: 'What is 10 ÷ 5?', options: ['1', '2', '3', '5'], correctAnswer: '2' },
      { question: 'What is 14 + 8?', options: ['21', '22', '23', '20'], correctAnswer: '22' },
      { question: 'What is 30 - 11?', options: ['18', '19', '20', '21'], correctAnswer: '19' },
      { question: 'What is 7 x 5?', options: ['30', '35', '40', '25'], correctAnswer: '35' },
      { question: 'What is 12 ÷ 2?', options: ['5', '6', '7', '8'], correctAnswer: '6' },
    ],
  },
  // Level 5: Medium
  {
    level: 5,
    title: 'Medium Multiplication',
    description: 'Times tables and two-digit division.',
    questions: [
      { question: 'What is 7 x 8?', options: ['49', '54', '56', '63'], correctAnswer: '56' },
      { question: 'What is 45 ÷ 5?', options: ['8', '9', '10', '7'], correctAnswer: '9' },
      { question: 'If you have 3 bags with 4 apples each, how many apples do you have?', options: ['7', '10', '12', '9'], correctAnswer: '12' },
      { question: 'What is 6 x 6?', options: ['30', '36', '42', '35'], correctAnswer: '36' },
      { question: 'What is 21 ÷ 3?', options: ['6', '7', '8', '5'], correctAnswer: '7' },
      { question: 'What is 9 x 4?', options: ['32', '36', '40', '35'], correctAnswer: '36' },
      { question: 'A pizza is cut into 8 slices. You eat 2. How many are left?', options: ['5', '6', '7', '4'], correctAnswer: '6' },
      { question: 'What is 30 ÷ 10?', options: ['1', '2', '3', '4'], correctAnswer: '3' },
    ],
  },
  // Level 6: Medium
  {
    level: 6,
    title: 'Word Puzzles',
    description: 'More times tables and simple word problems.',
    questions: [
      { question: 'What is 8 x 8?', options: ['60', '64', '72', '56'], correctAnswer: '64' },
      { question: 'What is 49 ÷ 7?', options: ['6', '7', '8', '9'], correctAnswer: '7' },
      { question: 'A bus has 10 seats. If 3 people get off, how many are left?', options: ['6', '7', '8', '5'], correctAnswer: '7' },
      { question: 'What is 9 x 7?', options: ['56', '63', '72', '54'], correctAnswer: '63' },
      { question: 'What is 60 ÷ 6?', options: ['8', '9', '10', '11'], correctAnswer: '10' },
      { question: 'You have 5 friends and want to give each 3 stickers. How many stickers do you need?', options: ['12', '15', '18', '10'], correctAnswer: '15' },
      { question: 'What is 4 x 8?', options: ['28', '32', '36', '30'], correctAnswer: '32' },
      { question: 'What is 81 ÷ 9?', options: ['7', '8', '9', '10'], correctAnswer: '9' },
    ],
  },
  // Level 7: Medium-Hard
  {
    level: 7,
    title: 'Mixed Operations',
    description: 'Combining different operations together.',
    questions: [
      { question: 'What is (3 + 4) x 2?', options: ['10', '12', '14', '9'], correctAnswer: '14' },
      { question: 'What is 20 - (4 x 3)?', options: ['8', '10', '12', '16'], correctAnswer: '8' },
      { question: 'What is (15 ÷ 3) + 5?', options: ['8', '9', '10', '11'], correctAnswer: '10' },
      { question: 'What is 100 - 25?', options: ['70', '75', '80', '65'], correctAnswer: '75' },
      { question: 'What is 50 + 32?', options: ['80', '82', '85', '72'], correctAnswer: '82' },
      { question: 'What is 6 x 7?', options: ['40', '42', '45', '49'], correctAnswer: '42' },
      { question: 'What is 36 ÷ 4?', options: ['8', '9', '10', '7'], correctAnswer: '9' },
      { question: 'What is 8 x 9?', options: ['64', '72', '81', '68'], correctAnswer: '72' },
    ],
  },
  // Level 8: Medium-Hard
  {
    level: 8,
    title: 'Challenge Time',
    description: 'Larger numbers and mixed operations.',
    questions: [
      { question: 'What is 12 x 10?', options: ['100', '110', '120', '130'], correctAnswer: '120' },
      { question: 'What is 99 ÷ 9?', options: ['9', '10', '11', '12'], correctAnswer: '11' },
      { question: 'What is 75 + 25?', options: ['90', '95', '100', '105'], correctAnswer: '100' },
      { question: 'What is (5 x 5) + 10?', options: ['30', '35', '40', '25'], correctAnswer: '35' },
      { question: 'What is 50 - (12 x 2)?', options: ['24', '26', '28', '30'], correctAnswer: '26' },
      { question: 'What is 144 ÷ 12?', options: ['10', '11', '12', '13'], correctAnswer: '12' },
      { question: 'What is 11 x 11?', options: ['111', '121', '131', '141'], correctAnswer: '121' },
      { question: 'What is (100 ÷ 10) - 5?', options: ['0', '5', '10', '15'], correctAnswer: '5' },
    ],
  },
  // Level 9: Hard
  {
    level: 9,
    title: 'Brain Teasers',
    description: 'Multi-step calculations and logic.',
    questions: [
      { question: 'What is (12 + 8) ÷ 4?', options: ['4', '5', '6', '7'], correctAnswer: '5' },
      { question: 'A book has 50 pages. You read 15 on Monday and 10 on Tuesday. How many are left?', options: ['20', '25', '30', '35'], correctAnswer: '25' },
      { question: 'What is 2 x 3 x 4?', options: ['12', '18', '24', '30'], correctAnswer: '24' },
      { question: 'What is half of 100?', options: ['25', '50', '75', '40'], correctAnswer: '50' },
      { question: 'What number is next: 2, 4, 6, 8, ...?', options: ['9', '10', '11', '12'], correctAnswer: '10' },
      { question: 'If 3 cats have 4 legs each, how many legs in total?', options: ['7', '10', '12', '14'], correctAnswer: '12' },
      { question: 'What is 150 - (10 x 5)?', options: ['50', '100', '120', '140'], correctAnswer: '100' },
      { question: 'What is (20 ÷ 2) + (3 x 3)?', options: ['16', '19', '22', '13'], correctAnswer: '19' },
    ],
  },
  // Level 10: Hard
  {
    level: 10,
    title: 'Math Master',
    description: 'Final challenge with faster thinking.',
    questions: [
      { question: 'What is 10 x (5 + 2)?', options: ['60', '70', '80', '52'], correctAnswer: '70' },
      { question: 'I am a number. If you multiply me by 5 and add 3, you get 28. What am I?', options: ['4', '5', '6', '7'], correctAnswer: '5' },
      { question: 'What is 200 ÷ 20?', options: ['5', '10', '15', '2'], correctAnswer: '10' },
      { question: 'What is 12 x 12?', options: ['124', '134', '144', '154'], correctAnswer: '144' },
      { question: 'You have 30 candies and want to share them equally among 5 friends. How many does each get?', options: ['4', '5', '6', '7'], correctAnswer: '6' },
      { question: 'What is (15 - 5) x (8 - 3)?', options: ['40', '50', '60', '45'], correctAnswer: '50' },
      { question: 'What is a quarter of 48?', options: ['10', '12', '14', '16'], correctAnswer: '12' },
      { question: 'What is 7 + (7 x 7)?', options: ['56', '63', '105', '54'], correctAnswer: '56' },
    ],
  },
];
