
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
  {
    level: 11,
    title: 'Fractions Introduction',
    description: 'Understanding simple fractions.',
    questions: [
        { question: 'What is 1/2 of 10?', options: ['4', '5', '6', '3'], correctAnswer: '5' },
        { question: 'Which fraction is bigger: 1/3 or 1/4?', options: ['1/3', '1/4', 'They are equal', 'Cannot tell'], correctAnswer: '1/3' },
        { question: 'If you eat 1 slice of a pizza cut into 4, what fraction did you eat?', options: ['1/2', '1/3', '1/4', '1/5'], correctAnswer: '1/4' },
        { question: 'What is 1/2 + 1/2?', options: ['1', '1/2', '1/4', '2'], correctAnswer: '1' },
    ],
  },
  {
      level: 12,
      title: 'Time Telling',
      description: 'Reading analog clocks.',
      questions: [
          { question: 'If the big hand is on 12 and the little hand is on 3, what time is it?', options: ['12:15', '3:00', '12:03', '3:12'], correctAnswer: '3:00' },
          { question: 'How many minutes are in one hour?', options: ['30', '60', '90', '100'], correctAnswer: '60' },
          { question: 'What time is half past 4?', options: ['4:15', '4:30', '4:45', '5:00'], correctAnswer: '4:30' },
          { question: 'How many seconds in a minute?', options: ['30', '60', '120', '1'], correctAnswer: '60' },
      ],
  },
  {
      level: 13,
      title: 'Money Matters',
      description: 'Basic currency calculations.',
      questions: [
          { question: 'If you have a ₹10 note and buy something for ₹7, how much change do you get?', options: ['₹2', '₹3', '₹4', '₹5'], correctAnswer: '₹3' },
          { question: 'How many 50 paise coins make ₹1?', options: ['1', '2', '3', '4'], correctAnswer: '2' },
          { question: 'What is ₹5 + ₹10?', options: ['₹12', '₹15', '₹20', '₹10'], correctAnswer: '₹15' },
          { question: 'Which is more: ₹20 or three ₹5 coins?', options: ['₹20', 'Three ₹5 coins', 'They are equal', 'Cannot say'], correctAnswer: '₹20' },
      ],
  },
  {
      level: 14,
      title: 'Geometry Basics',
      description: 'Identifying shapes.',
      questions: [
          { question: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'], correctAnswer: '3' },
          { question: 'Which shape has no corners?', options: ['Square', 'Triangle', 'Circle', 'Rectangle'], correctAnswer: 'Circle' },
          { question: 'How many sides does a hexagon have?', options: ['5', '6', '7', '8'], correctAnswer: '6' },
          { question: 'A cube has how many faces?', options: ['4', '5', '6', '8'], correctAnswer: '6' },
      ],
  },
  {
      level: 15,
      title: 'Advanced Operations',
      description: 'Three-digit addition and subtraction.',
      questions: [
          { question: 'What is 100 + 25?', options: ['115', '125', '135', '150'], correctAnswer: '125' },
          { question: 'What is 250 - 50?', options: ['150', '200', '250', '100'], correctAnswer: '200' },
          { question: 'What is 120 + 80?', options: ['180', '200', '220', '160'], correctAnswer: '200' },
          { question: 'What is 300 - 150?', options: ['100', '150', '200', '50'], correctAnswer: '150' },
      ],
  },
  {
      level: 16,
      title: 'Measurement Concepts',
      description: 'Understanding length and weight.',
      questions: [
          { question: 'Which is longer: 1 meter or 100 centimeters?', options: ['1 meter', '100 centimeters', 'They are equal', 'Cannot compare'], correctAnswer: 'They are equal' },
          { question: 'How many grams in a kilogram?', options: ['10', '100', '1000', '10000'], correctAnswer: '1000' },
          { question: 'Which unit would you use to measure a pencil?', options: ['Kilometers', 'Meters', 'Centimeters', 'Liters'], correctAnswer: 'Centimeters' },
          { question: 'Which is heavier: 1kg of cotton or 1kg of iron?', options: ['Cotton', 'Iron', 'They are equal', 'Depends on size'], correctAnswer: 'They are equal' },
      ],
  },
  {
      level: 17,
      title: 'Data Handling',
      description: 'Reading simple charts.',
      questions: [
          { question: 'If a bar chart shows 5 apples and 3 oranges, how many fruits in total?', options: ['7', '8', '9', '10'], correctAnswer: '8' },
          { question: 'A pictogram shows one smiley face = 2 students. How many students for 3 smiley faces?', options: ['4', '5', '6', '8'], correctAnswer: '6' },
          { question: 'On a pie chart, what does a whole circle represent?', options: ['50%', '75%', '100%', '0%'], correctAnswer: '100%' },
          { question: 'A line graph is best for showing...?', options: ['Parts of a whole', 'Changes over time', 'Comparing categories', 'Listing items'], correctAnswer: 'Changes over time' },
      ],
  },
  {
      level: 18,
      title: 'Problem Solving',
      description: 'Slightly complex word problems.',
      questions: [
          { question: 'You have 20 cookies and want to share them among 4 friends. How many each?', options: ['4', '5', '6', '7'], correctAnswer: '5' },
          { question: 'A train travels 50 km in 1 hour. How far in 3 hours?', options: ['100 km', '150 km', '200 km', '250 km'], correctAnswer: '150 km' },
          { question: 'A shopkeeper has 100 eggs. 12 broke. How many are left?', options: ['82', '88', '90', '78'], correctAnswer: '88' },
          { question: 'You save ₹5 every day. How much do you save in a week?', options: ['₹30', '₹35', '₹40', '₹45'], correctAnswer: '₹35' },
      ],
  },
  {
      level: 19,
      title: 'Roman Numerals',
      description: 'Understanding basic Roman numerals.',
      questions: [
          { question: 'What is the Roman numeral for 5?', options: ['I', 'V', 'X', 'L'], correctAnswer: 'V' },
          { question: 'What number is IX?', options: ['9', '11', '10', '4'], correctAnswer: '9' },
          { question: 'What is the Roman numeral for 10?', options: ['V', 'X', 'L', 'C'], correctAnswer: 'X' },
          { question: 'What number is VI?', options: ['4', '6', '7', '5'], correctAnswer: '6' },
      ],
  },
  {
      level: 20,
      title: 'Number Patterns',
      description: 'Finding the next number in a sequence.',
      questions: [
          { question: 'What is the next number: 5, 10, 15, 20, ...?', options: ['22', '25', '30', '24'], correctAnswer: '25' },
          { question: 'Find the missing number: 3, 6, 9, __, 15.', options: ['10', '11', '12', '13'], correctAnswer: '12' },
          { question: 'What comes next: 100, 90, 80, 70, ...?', options: ['60', '50', '65', '55'], correctAnswer: '60' },
          { question: 'Find the pattern: 2, 4, 8, 16, ...', options: ['20', '24', '32', '30'], correctAnswer: '32' },
      ],
  },
  {
      level: 21,
      title: 'Decimal Introduction',
      description: 'Understanding decimal points.',
      questions: [
          { question: 'What is 0.5 as a fraction?', options: ['1/2', '1/3', '1/4', '1/5'], correctAnswer: '1/2' },
          { question: 'Which is larger: 0.7 or 0.6?', options: ['0.7', '0.6', 'They are equal', 'Cannot tell'], correctAnswer: '0.7' },
          { question: 'What is 1.0 + 0.5?', options: ['1.05', '1.5', '2.0', '1.2'], correctAnswer: '1.5' },
          { question: '₹1.50 is one rupee and how many paise?', options: ['5', '15', '50', '1.5'], correctAnswer: '50' },
      ],
  },
  {
      level: 22,
      title: 'Advanced Geometry',
      description: 'Properties of shapes.',
      questions: [
          { question: 'What is the sum of angles in a triangle?', options: ['90°', '180°', '270°', '360°'], correctAnswer: '180°' },
          { question: 'An angle less than 90° is called?', options: ['Obtuse', 'Right', 'Acute', 'Straight'], correctAnswer: 'Acute' },
          { question: 'A shape with 8 sides is a...?', options: ['Hexagon', 'Heptagon', 'Octagon', 'Nonagon'], correctAnswer: 'Octagon' },
          { question: 'What is the line that divides a circle in half?', options: ['Radius', 'Chord', 'Diameter', 'Arc'], correctAnswer: 'Diameter' },
      ],
  },
  {
      level: 23,
      title: 'Average and Percentage',
      description: 'Basic average and percentage.',
      questions: [
          { question: 'What is the average of 2, 3, and 4?', options: ['2', '3', '4', '9'], correctAnswer: '3' },
          { question: 'What is 50% of 20?', options: ['5', '10', '15', '20'], correctAnswer: '10' },
          { question: 'If you score 8 out of 10, what is your percentage?', options: ['70%', '80%', '90%', '100%'], correctAnswer: '80%' },
          { question: 'What is 25% of 100?', options: ['20', '25', '30', '50'], correctAnswer: '25' },
      ],
  },
  {
      level: 24,
      title: 'Logical Reasoning',
      description: 'Puzzles and logical problems.',
      questions: [
          { question: 'If A is taller than B, and B is taller than C, who is the tallest?', options: ['A', 'B', 'C', 'Cannot say'], correctAnswer: 'A' },
          { question: 'A hen lays 1 egg a day. How many eggs in a week?', options: ['5', '6', '7', '8'], correctAnswer: '7' },
          { question: 'If yesterday was Monday, what is tomorrow?', options: ['Tuesday', 'Wednesday', 'Thursday', 'Sunday'], correctAnswer: 'Wednesday' },
          { question: 'Which number does not belong: 2, 4, 6, 7, 8?', options: ['2', '4', '6', '7'], correctAnswer: '7' },
      ],
  },
  {
      level: 25,
      title: 'Speed, Distance, Time',
      description: 'Basic concepts of speed.',
      questions: [
          { question: 'If you travel 10 km in 2 hours, what is your speed?', options: ['2 km/h', '5 km/h', '8 km/h', '10 km/h'], correctAnswer: '5 km/h' },
          { question: 'Speed = ? / Time', options: ['Distance', 'Work', 'Energy', 'Force'], correctAnswer: 'Distance' },
          { question: 'If a car runs at 20 km/h for 3 hours, how far does it go?', options: ['40 km', '50 km', '60 km', '80 km'], correctAnswer: '60 km' },
          { question: 'To travel 100 km at 50 km/h, how much time is needed?', options: ['1 hour', '2 hours', '3 hours', '4 hours'], correctAnswer: '2 hours' },
      ],
  },
  {
      level: 26,
      title: 'Algebra Introduction',
      description: 'Solving simple equations.',
      questions: [
          { question: 'If x + 3 = 5, what is x?', options: ['1', '2', '3', '4'], correctAnswer: '2' },
          { question: 'What is 2y if y = 4?', options: ['6', '8', '10', '12'], correctAnswer: '8' },
          { question: 'If a - 5 = 5, what is a?', options: ['5', '10', '15', '0'], correctAnswer: '10' },
          { question: 'If 3b = 9, what is b?', options: ['2', '3', '4', '6'], correctAnswer: '3' },
      ],
  },
  {
      level: 27,
      title: 'Square Roots',
      description: 'Finding the square root of numbers.',
      questions: [
          { question: 'What is the square root of 9?', options: ['2', '3', '4', '5'], correctAnswer: '3' },
          { question: '√16 = ?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
          { question: 'What is the square root of 25?', options: ['4', '5', '6', '7'], correctAnswer: '5' },
          { question: 'If a number multiplied by itself is 36, what is the number?', options: ['4', '5', '6', '7'], correctAnswer: '6' },
      ],
  },
  {
      level: 28,
      title: 'Area and Perimeter',
      description: 'Calculating area and perimeter of simple shapes.',
      questions: [
          { question: 'A square has a side of 4cm. What is its perimeter?', options: ['8cm', '12cm', '16cm', '20cm'], correctAnswer: '16cm' },
          { question: 'A square with side 3cm has an area of?', options: ['3 cm²', '6 cm²', '9 cm²', '12 cm²'], correctAnswer: '9 cm²' },
          { question: 'Perimeter of a rectangle with length 5 and width 3?', options: ['8', '15', '16', '30'], correctAnswer: '16' },
          { question: 'Area of a rectangle with length 6 and width 2?', options: ['8', '12', '16', '18'], correctAnswer: '12' },
      ],
  },
  {
      level: 29,
      title: 'Symmetry',
      description: 'Finding lines of symmetry.',
      questions: [
          { question: 'How many lines of symmetry does a square have?', options: ['1', '2', '3', '4'], correctAnswer: '4' },
          { question: 'Does the letter Z have a line of symmetry?', options: ['Yes', 'No', 'Maybe', 'Only one'], correctAnswer: 'No' },
          { question: 'How many lines of symmetry in a circle?', options: ['1', '2', '4', 'Infinite'], correctAnswer: 'Infinite' },
          { question: 'Which letter has a vertical line of symmetry?', options: ['B', 'C', 'A', 'D'], correctAnswer: 'A' },
      ],
  },
  {
      level: 30,
      title: 'Divisibility Rules',
      description: 'Checking for divisibility.',
      questions: [
          { question: 'A number is divisible by 2 if it is...?', options: ['Odd', 'Even', 'A prime number', 'A fraction'], correctAnswer: 'Even' },
          { question: 'Is 33 divisible by 3?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 'Yes' },
          { question: 'A number is divisible by 5 if it ends in...?', options: ['3 or 5', '0 or 5', '1 or 0', '5 or 7'], correctAnswer: '0 or 5' },
          { question: 'Is 120 divisible by 10?', options: ['Yes', 'No', 'Only on Tuesdays', 'If it feels like it'], correctAnswer: 'Yes' },
      ],
  },
  {
      level: 31,
      title: 'Prime Numbers',
      description: 'Identifying prime numbers.',
      questions: [
          { question: 'Which of these is a prime number?', options: ['4', '6', '8', '7'], correctAnswer: '7' },
          { question: 'Is 1 a prime number?', options: ['Yes', 'No', 'It is special', 'Sometimes'], correctAnswer: 'No' },
          { question: 'Which is the only even prime number?', options: ['0', '2', '4', '6'], correctAnswer: '2' },
          { question: 'Which of these is NOT a prime number?', options: ['3', '5', '9', '11'], correctAnswer: '9' },
      ],
  },
  {
      level: 32,
      title: 'Factors and Multiples',
      description: 'Finding factors and multiples.',
      questions: [
          { question: 'Which of these is a factor of 12?', options: ['5', '6', '7', '8'], correctAnswer: '6' },
          { question: 'Which of these is a multiple of 5?', options: ['12', '15', '18', '21'], correctAnswer: '15' },
          { question: 'How many factors does 10 have?', options: ['2', '3', '4', '5'], correctAnswer: '4' },
          { question: 'The first three multiples of 4 are...', options: ['4, 8, 12', '1, 2, 3', '4, 5, 6', '3, 6, 9'], correctAnswer: '4, 8, 12' },
      ],
  },
  {
      level: 33,
      title: 'Ratios',
      description: 'Understanding ratios.',
      questions: [
          { question: 'If there are 2 apples and 3 oranges, what is the ratio of apples to oranges?', options: ['3:2', '2:3', '2:5', '3:5'], correctAnswer: '2:3' },
          { question: 'Simplify the ratio 4:8.', options: ['1:2', '2:4', '1:3', '1:4'], correctAnswer: '1:2' },
          { question: 'In a class of 10 boys and 15 girls, what is the ratio of boys to total students?', options: ['10:15', '10:25', '15:25', '2:3'], correctAnswer: '10:25' },
          { question: 'If a recipe needs 1 cup sugar for 2 cups flour, what is the ratio of sugar to flour?', options: ['2:1', '1:1', '1:2', '1:3'], correctAnswer: '1:2' },
      ],
  },
  {
      level: 34,
      title: 'Probability',
      description: 'Basics of probability.',
      questions: [
          { question: 'When you toss a coin, what is the probability of getting heads?', options: ['0', '1/2', '1/3', '1'], correctAnswer: '1/2' },
          { question: 'In a bag with 3 red balls and 2 blue balls, what is the probability of picking a red ball?', options: ['2/5', '3/5', '3/2', '2/3'], correctAnswer: '3/5' },
          { question: 'What is the probability of rolling a 7 on a standard 6-sided die?', options: ['1', '0', '1/6', '1/7'], correctAnswer: '0' },
          { question: 'If something is certain to happen, its probability is...?', options: ['0', '0.5', '1', '100'], correctAnswer: '1' },
      ],
  },
  {
      level: 35,
      title: 'Final Math Challenge',
      description: 'A mix of all concepts.',
      questions: [
          { question: 'What is the area of a circle with radius 1?', options: ['π', '2π', 'π/2', '1'], correctAnswer: 'π' },
          { question: 'Solve for x: 2x + 5 = 15', options: ['3', '4', '5', '6'], correctAnswer: '5' },
          { question: 'What is 15% of 200?', options: ['15', '20', '30', '40'], correctAnswer: '30' },
          { question: 'A car travels at 60 km/h. How long to travel 150 km?', options: ['2 hours', '2.5 hours', '3 hours', '3.5 hours'], correctAnswer: '2.5 hours' },
      ],
  },
];

    