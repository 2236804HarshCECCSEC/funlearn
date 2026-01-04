export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: string;
  visual?: string; // For picture-based questions
  audioSrc?: string; // For pronunciation
}

export interface EnglishLevel {
  level: number;
  title: string;
  description: string;
  questions: MCQ[];
}

export const englishLevels: EnglishLevel[] = [
  // Level 1: Beginner
  {
    level: 1,
    title: 'Alphabet Fun',
    description: 'Recognizing letters and their sounds.',
    questions: [
      { question: 'Which letter comes after A?', options: ['B', 'C', 'D', 'E'], correctAnswer: 'B' },
      { question: "What is this letter?", visual: '🍎', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
      { question: 'Which word starts with the "C" sound?', options: ['Apple', 'Ball', 'Cat', 'Dog'], correctAnswer: 'Cat' },
      { question: 'What is the first letter of the word "Sun"?', options: ['S', 'U', 'N', 'T'], correctAnswer: 'S' },
      { question: 'Find the letter "Z".', options: ['X', 'Y', 'Z', 'A'], correctAnswer: 'Z' },
      { question: "What does 'B' sound like in 'Ball'?", options: ['Buh', 'Cuh', 'Duh', 'Fuh'], correctAnswer: 'Buh' },
      { question: 'Which of these is a vowel?', options: ['B', 'C', 'D', 'E'], correctAnswer: 'E' },
      { question: "What is this letter?", visual: '🐶', options: ['C', 'D', 'E', 'F'], correctAnswer: 'D' },
    ],
  },
  // Level 2: Beginner
  {
    level: 2,
    title: 'Simple Words',
    description: 'Identifying simple words with pictures.',
    questions: [
      { question: 'What is this animal?', visual: '🐈', options: ['Dog', 'Cat', 'Fish', 'Bird'], correctAnswer: 'Cat' },
      { question: 'Which word matches the picture?', visual: '☀️', options: ['Moon', 'Star', 'Sun', 'Cloud'], correctAnswer: 'Sun' },
      { question: 'Spell the word for the number "2".', options: ['Tow', 'Two', 'Too', 'To'], correctAnswer: 'Two' },
      { question: 'What color is an apple?', visual: '🍎', options: ['Blue', 'Green', 'Red', 'Yellow'], correctAnswer: 'Red' },
      { question: 'Which word means the opposite of "Hot"?', options: ['Cold', 'Warm', 'Big', 'Small'], correctAnswer: 'Cold' },
      { question: 'What do you use to write?', options: ['Pen', 'Pan', 'Pin', 'Pot'], correctAnswer: 'Pen' },
      { question: 'Which of these is a fruit?', options: ['Carrot', 'Potato', 'Banana', 'Broccoli'], correctAnswer: 'Banana' },
      { question: 'What is this object?', visual: '🚗', options: ['Car', 'Bus', 'Bike', 'Train'], correctAnswer: 'Car' },
    ],
  },
  // Level 3: Easy
  {
    level: 3,
    title: 'Vocabulary Basics',
    description: 'Learning common nouns and verbs.',
    questions: [
      { question: 'Which of these is an action (verb)?', options: ['Ball', 'Run', 'Happy', 'Red'], correctAnswer: 'Run' },
      { question: 'What is the name of a place where you sleep?', options: ['Kitchen', 'School', 'Bedroom', 'Park'], correctAnswer: 'Bedroom' },
      { question: 'Which word is an animal?', options: ['Chair', 'Table', 'Lion', 'Book'], correctAnswer: 'Lion' },
      { question: 'What do you do when you are hungry?', options: ['Sleep', 'Play', 'Eat', 'Read'], correctAnswer: 'Eat' },
      { question: 'Which word is a color?', options: ['Soft', 'Loud', 'Blue', 'Fast'], correctAnswer: 'Blue' },
      { question: 'A person who teaches is called a...', options: ['Doctor', 'Farmer', 'Teacher', 'Pilot'], correctAnswer: 'Teacher' },
      { question: 'What is the opposite of "big"?', options: ['Large', 'Huge', 'Small', 'Tall'], correctAnswer: 'Small' },
      { question: 'What do birds do in the sky?', options: ['Swim', 'Fly', 'Crawl', 'Jump'], correctAnswer: 'Fly' },
    ],
  },
  // Level 4: Easy
  {
    level: 4,
    title: 'Nouns and Verbs',
    description: 'Matching words with pictures and identifying parts of speech.',
    questions: [
      { question: 'Is "jump" a noun or a verb?', options: ['Noun', 'Verb', 'Adjective', 'Adverb'], correctAnswer: 'Verb' },
      { question: 'Which picture shows a "flower"?', visual: '🌻', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }, // Assume other options have different images
      { question: 'Is "house" a person, place, or thing?', options: ['Person', 'Place', 'Thing', 'Action'], correctAnswer: 'Place' },
      { question: 'What is the action in the sentence: "The dog barks loudly"?', options: ['dog', 'barks', 'loudly', 'The'], correctAnswer: 'barks' },
      { question: 'Which of these is a "thing"?', options: ['Run', 'She', 'Book', 'Happy'], correctAnswer: 'Book' },
      { question: 'Select the verb in the sentence: "I eat breakfast."', options: ['I', 'eat', 'breakfast', 'none'], correctAnswer: 'eat' },
      { question: 'Is "happy" a noun or an adjective?', options: ['Noun', 'Verb', 'Adjective', 'Adverb'], correctAnswer: 'Adjective' },
      { question: 'Which word names a person?', options: ['City', 'Girl', 'Car', 'Play'], correctAnswer: 'Girl' },
    ],
  },
  // Level 5: Medium
  {
    level: 5,
    title: 'Sentence Building',
    description: 'Forming simple sentences and using singular/plural.',
    questions: [
      { question: 'Complete the sentence: "The cat is ___ the table."', options: ['on', 'in', 'at', 'of'], correctAnswer: 'on' },
      { question: 'What is the plural of "dog"?', options: ['Doggies', 'Dogs', 'Doges', 'Dog'], correctAnswer: 'Dogs' },
      { question: 'Choose the correct sentence.', options: ['She play games.', 'She plays games.', 'She playing games.', 'She game plays.'], correctAnswer: 'She plays games.' },
      { question: 'Fill in the blank: "I have two ___."', options: ['apple', 'apples', 'an apple', 'apple is'], correctAnswer: 'apples' },
      { question: 'Which sentence is correct?', options: ['They is happy.', 'They am happy.', 'They are happy.', 'They was happy.'], correctAnswer: 'They are happy.' },
      { question: 'What is the plural of "box"?', options: ['Boxs', 'Boxes', 'Boxen', 'Boxi'], correctAnswer: 'Boxes' },
      { question: 'Complete the sentence: "He ___ a book."', options: ['read', 'reads', 'is read', 'reading'], correctAnswer: 'reads' },
      { question: 'One cat, two ___.', options: ['cat', 'cats', 'cates', 'caties'], correctAnswer: 'cats' },
    ],
  },
  // Level 6: Medium
  {
    level: 6,
    title: 'Simple Grammar',
    description: 'Understanding basic grammar rules and sentence structure.',
    questions: [
      { question: 'Choose the correct punctuation for this sentence: "What is your name"', options: ['.', '!', '?', ','], correctAnswer: '?' },
      { question: 'Which word is an adjective? "The red car is fast."', options: ['car', 'is', 'fast', 'red'], correctAnswer: 'red' }, // Both red and fast are adjectives, but red is more direct.
      { question: 'What is the singular of "mice"?', options: ['Mice', 'Mouses', 'Mouse', 'Micey'], correctAnswer: 'Mouse' },
      { question: 'Fill in the blank: "An ___ a day keeps the doctor away."', options: ['apple', 'orange', 'banana', 'pear'], correctAnswer: 'apple' }, // 'An' is the clue
      { question: 'Which sentence uses "a" and "an" correctly?', options: ['I have a apple.', 'I have an car.', 'I have a big orange.', 'I have an house.'], correctAnswer: 'I have a big orange.' },
      { question: 'Which is a describing word (adjective)?', options: ['Walk', 'Happy', 'Friend', 'Quickly'], correctAnswer: 'Happy' },
      { question: 'What is the plural of "leaf"?', options: ['Leafs', 'Leaves', 'Leafes', 'Leavs'], correctAnswer: 'Leaves' },
      { question: 'Choose the correct verb: "The birds ___ in the sky."', options: ['is flying', 'are flying', 'am flying', 'flys'], correctAnswer: 'are flying' },
    ],
  },
  // Level 7: Medium-Hard
  {
    level: 7,
    title: 'Synonyms and Tenses',
    description: 'Finding similar words and using past/present tense.',
    questions: [
      { question: 'Which word means the same as "happy"?', options: ['Sad', 'Angry', 'Joyful', 'Tired'], correctAnswer: 'Joyful' },
      { question: 'What is the past tense of "run"?', options: ['Runned', 'Ran', 'Running', 'Runs'], correctAnswer: 'Ran' },
      { question: 'Read the passage: "The sun was bright. A little bird sang a song." What was the weather like?', options: ['Rainy', 'Cloudy', 'Sunny', 'Snowy'], correctAnswer: 'Sunny' },
      { question: 'Which word is a synonym for "big"?', options: ['Small', 'Tiny', 'Large', 'Little'], correctAnswer: 'Large' },
      { question: 'Yesterday, I ___ to the park.', options: ['go', 'goes', 'went', 'going'], correctAnswer: 'went' },
      { question: 'What is the opposite of "fast"?', options: ['Quick', 'Rapid', 'Slow', 'Speedy'], correctAnswer: 'Slow' },
      { question: 'Today, she ___ a picture.', options: ['drew', 'draws', 'will draw', 'drawing'], correctAnswer: 'draws' },
      { question: 'Read the passage: "Tom has a red ball. He likes to play with it." What does Tom have?', options: ['A blue car', 'A red ball', 'A green kite', 'A yellow bat'], correctAnswer: 'A red ball' },
    ],
  },
  // Level 8: Medium-Hard
  {
    level: 8,
    title: 'Reading and Tenses',
    description: 'Reading short passages and understanding verb tenses.',
    questions: [
      { question: 'Which word is an antonym for "empty"?', options: ['Vacant', 'Bare', 'Clear', 'Full'], correctAnswer: 'Full' },
      { question: 'Tomorrow, we ___ a movie.', options: ['watched', 'watch', 'are watching', 'will watch'], correctAnswer: 'will watch' },
      { question: 'Passage: "Lisa loves to bake cookies. She uses flour, sugar, and eggs." What does Lisa love to do?', options: ['Read books', 'Play outside', 'Bake cookies', 'Watch TV'], correctAnswer: 'Bake cookies' },
      { question: 'What is the past tense of "eat"?', options: ['Eated', 'Ate', 'Eat', 'Eats'], correctAnswer: 'Ate' },
      { question: 'A synonym for "scared" is...', options: ['Brave', 'Happy', 'Afraid', 'Calm'], correctAnswer: 'Afraid' },
      { question: 'Right now, the baby ___.', options: ['is sleeping', 'slept', 'will sleep', 'sleeps'], correctAnswer: 'is sleeping' },
      { question: 'The opposite of "light" (as in not heavy) is...', options: ['Dark', 'Bright', 'Heavy', 'Soft'], correctAnswer: 'Heavy' },
      { question: 'Passage: "The frog jumped into the pond. It swam away." Where did the frog jump?', options: ['Into a tree', 'Into the pond', 'On a rock', 'Under a leaf'], correctAnswer: 'Into the pond' },
    ],
  },
  // Level 9: Hard
  {
    level: 9,
    title: 'Paragraph Puzzles',
    description: 'Understanding paragraphs and correcting grammar.',
    questions: [
      { question: 'Find the mistake: "My friends and me went to the park."', options: ['friends', 'me', 'went', 'park'], correctAnswer: 'me' },
      { question: 'Which word fits best: "I was tired, ___ I went to bed."', options: ['but', 'so', 'because', 'or'], correctAnswer: 'so' },
      { question: 'Read this: "The dog is furry. It has four legs. It likes to fetch." What is this paragraph about?', options: ['A cat', 'A fish', 'A bird', 'A dog'], correctAnswer: 'A dog' },
      { question: 'Which sentence is grammatically correct?', options: ['She don\'t like ice cream.', 'He go to school every day.', 'They are my best friends.', 'We is playing now.'], correctAnswer: 'They are my best friends.' },
      { question: 'Use the right word: "Please give the book to ___."', options: ['I', 'me', 'my', 'mine'], correctAnswer: 'me' },
      { question: 'The word "beautiful" is a(n)...', options: ['Noun', 'Verb', 'Adjective', 'Adverb'], correctAnswer: 'Adjective' },
      { question: 'Correct the sentence: "we was happy at the party"', options: ['We were happy', 'Us was happy', 'We is happy', 'We am happy'], correctAnswer: 'We were happy' },
      { question: 'Which word means "to look quickly"?', options: ['Stare', 'Gaze', 'Glance', 'Watch'], correctAnswer: 'Glance' },
    ],
  },
  // Level 10: Hard
  {
    level: 10,
    title: 'English Master',
    description: 'Advanced grammar, comprehension, and word usage.',
    questions: [
      { question: 'Which sentence uses punctuation correctly?', options: ['I like apples, oranges and bananas.', 'I like apples, oranges, and bananas.', 'I like apples oranges and bananas.', 'I like, apples, oranges, and bananas.'], correctAnswer: 'I like apples, oranges, and bananas.' },
      { question: 'What is the main idea of a story?', options: ['The ending', 'The characters', 'What the story is mostly about', 'The pictures'], correctAnswer: 'What the story is mostly about' },
      { question: 'Choose the correct word: "The dog wagged ___ tail."', options: ['it\'s', 'its', 'its\'', 'it'], correctAnswer: 'its' },
      { question: 'If a story is a "mystery," it means...', options: ['It is funny.', 'It is sad.', 'It has a puzzle to solve.', 'It is about animals.'], correctAnswer: 'It has a puzzle to solve.' },
      { question: 'Find the mistake: "She is more taller than her brother."', options: ['She', 'taller', 'than', 'more'], correctAnswer: 'more' },
      { question: 'Which is the best summary for a story about a lost cat that finds its way home?', options: ['A cat was lost.', 'A cat was found.', 'A lost cat had an adventure and returned home.', 'A cat has a home.'], correctAnswer: 'A lost cat had an adventure and returned home.' },
      { question: 'Choose the correct words: "___ going to the store to buy ___ apples."', options: ['There, they\'re', 'They\'re, their', 'Their, there', 'They\'re, some'], correctAnswer: 'They\'re, some' },
      { question: 'What does it mean if something is "ancient"?', options: ['It is new.', 'It is very old.', 'It is big.', 'It is small.'], correctAnswer: 'It is very old.' },
    ],
  },
];
