
export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: string;
  visual?: string; // For picture-based questions
  audioSrc?: boolean; // For pronunciation
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
  {
    level: 11,
    title: 'Pronouns',
    description: 'Using pronouns correctly.',
    questions: [
        { question: 'Which pronoun can replace "The boy"?', options: ['She', 'He', 'It', 'They'], correctAnswer: 'He' },
        { question: 'Choose the correct sentence: "___ am going to the park."', options: ['He', 'She', 'I', 'You'], correctAnswer: 'I' },
        { question: '"Maria and I are friends. ___ walk to school together." What is the correct pronoun?', options: ['She', 'They', 'We', 'You'], correctAnswer: 'We' },
        { question: 'Replace the underlined word: "My dog is happy."', options: ['She', 'He', 'It', 'They'], correctAnswer: 'It' },
    ],
  },
  {
      level: 12,
      title: 'Prepositions',
      description: 'Understanding prepositions of place.',
      questions: [
          { question: 'The book is ___ the table.', options: ['on', 'under', 'in', 'at'], correctAnswer: 'on' },
          { question: 'The cat is hiding ___ the bed.', options: ['on', 'under', 'at', 'with'], correctAnswer: 'under' },
          { question: 'I live ___ a big city.', options: ['on', 'at', 'in', 'by'], correctAnswer: 'in' },
          { question: 'The school is ___ the park.', options: ['next to', 'on top of', 'inside', 'away from'], correctAnswer: 'next to' },
      ],
  },
  {
      level: 13,
      title: 'Conjunctions',
      description: 'Using joining words.',
      questions: [
          { question: 'I like apples ___ bananas.', options: ['but', 'or', 'and', 'so'], correctAnswer: 'and' },
          { question: 'Do you want tea ___ coffee?', options: ['and', 'but', 'or', 'so'], correctAnswer: 'or' },
          { question: 'He is smart, ___ he is lazy.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'but' },
          { question: 'It was raining, ___ I took an umbrella.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'so' },
      ],
  },
  {
      level: 14,
      title: 'Articles',
      description: 'Using a, an, the.',
      questions: [
          { question: 'I saw ___ eagle in the sky.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an' },
          { question: 'She has ___ new car.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'a' },
          { question: '___ sun is very bright today.', options: ['A', 'An', 'The', 'No article'], correctAnswer: 'The' },
          { question: 'He is ___ honest man.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an' },
      ],
  },
  {
      level: 15,
      title: 'Homophones',
      description: 'Words that sound the same but have different meanings.',
      questions: [
          { question: 'Which "there" is correct: "___ are my books."', options: ['There', 'Their', 'They\'re', 'Thare'], correctAnswer: 'There' },
          { question: 'I want to go ___, but it is too late.', options: ['to', 'too', 'two', 'tue'], correctAnswer: 'too' },
          { question: 'The dog wagged ___ tail.', options: ['it\'s', 'its', 'its\'', 'is'], correctAnswer: 'its' },
          { question: 'I have ___ apples.', options: ['to', 'too', 'two', 'tew'], correctAnswer: 'two' },
      ],
  },
  {
      level: 16,
      title: 'Adverbs',
      description: 'Words that describe verbs.',
      questions: [
          { question: 'The turtle walks ___.', options: ['slowly', 'slow', 'slower', 'slowed'], correctAnswer: 'slowly' },
          { question: 'She sings ___', options: ['beautiful', 'beauty', 'beautifully', 'beautify'], correctAnswer: 'beautifully' },
          { question: 'He ran ___ to catch the bus.', options: ['quick', 'quickly', 'quicker', 'quickest'], correctAnswer: 'quickly' },
          { question: 'Which word is an adverb in "The sun shines brightly"?', options: ['sun', 'shines', 'brightly', 'the'], correctAnswer: 'brightly' },
      ],
  },
  {
      level: 17,
      title: 'Types of Sentences',
      description: 'Declarative, Interrogative, Exclamatory, Imperative.',
      questions: [
          { question: 'Which type of sentence asks a question?', options: ['Declarative', 'Interrogative', 'Exclamatory', 'Imperative'], correctAnswer: 'Interrogative' },
          { question: 'What kind of sentence is "Wow, that is a huge cake!"?', options: ['Declarative', 'Interrogative', 'Exclamatory', 'Imperative'], correctAnswer: 'Exclamatory' },
          { question: '"Please close the door." is a(n) ___ sentence.', options: ['Declarative', 'Interrogative', 'Exclamatory', 'Imperative'], correctAnswer: 'Imperative' },
          { question: '"The sky is blue." is a statement, so it is a(n) ___ sentence.', options: ['Declarative', 'Interrogative', 'Exclamatory', 'Imperative'], correctAnswer: 'Declarative' },
      ],
  },
  {
      level: 18,
      title: 'Advanced Comprehension',
      description: 'Reading longer passages and making inferences.',
      questions: [
          { question: 'Read: "The leaves were turning yellow and red. A cool wind blew." What season is it?', options: ['Spring', 'Summer', 'Autumn', 'Winter'], correctAnswer: 'Autumn' },
          { question: 'If a character is crying, they are probably feeling...', options: ['Happy', 'Sad', 'Angry', 'Bored'], correctAnswer: 'Sad' },
          { question: 'Read: "The boy shared his lunch with his friend who forgot his." What does this say about the boy?', options: ['He is mean', 'He is kind', 'He is hungry', 'He is silly'], correctAnswer: 'He is kind' },
          { question: 'A story\'s "setting" is...', options: ['The main character', 'The problem', 'The time and place', 'The ending'], correctAnswer: 'The time and place' },
      ],
  },
  {
      level: 19,
      title: 'Figurative Language',
      description: 'Similes and Metaphors.',
      questions: [
          { question: 'What is a simile?', options: ['A comparison using "like" or "as"', 'A direct comparison', 'Giving human qualities to objects', 'An exaggeration'], correctAnswer: 'A comparison using "like" or "as"' },
          { question: '"He is as brave as a lion" is an example of a...', options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'], correctAnswer: 'Simile' },
          { question: '"The classroom was a zoo" is an example of a...', options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'], correctAnswer: 'Metaphor' },
          { question: 'Which is a metaphor? "The snow is a white blanket."', options: ['The snow is like a blanket.', 'The snow is a white blanket.', 'The snow is as white as a blanket.', 'The snow covers everything.'], correctAnswer: 'The snow is a white blanket.' },
      ],
  },
  {
      level: 20,
      title: 'Idioms',
      description: 'Understanding common idioms.',
      questions: [
          { question: 'What does "it\'s raining cats and dogs" mean?', options: ['Animals are falling from the sky', 'It is raining very heavily', 'It is not raining', 'It is sunny'], correctAnswer: 'It is raining very heavily' },
          { question: 'If something "costs an arm and a leg," it is...', options: ['Cheap', 'Expensive', 'Free', 'Broken'], correctAnswer: 'Expensive' },
          { question: '"Break a leg!" means...', options: ['Be careful', 'Go away', 'Good luck!', 'You are clumsy'], correctAnswer: 'Good luck!' },
          { question: 'What does "bite the bullet" mean?', options: ['To eat something hard', 'To go to the dentist', 'To endure a difficult situation', 'To be quiet'], correctAnswer: 'To endure a difficult situation' },
      ],
  },
  {
      level: 21,
      title: 'Cause and Effect',
      description: 'Understanding why things happen.',
      questions: [
          { question: 'Cause: It started raining. Effect: ?', options: ['The sun came out', 'I got wet', 'It became hot', 'The birds sang'], correctAnswer: 'I got wet' },
          { question: 'Effect: The plant grew tall. Cause: ?', options: ['It was kept in the dark', 'It was not watered', 'It got sunlight and water', 'It was cold'], correctAnswer: 'It got sunlight and water' },
          { question: 'If you study hard for a test, what is a likely effect?', options: ['You will fail', 'You will get a good grade', 'The test will be cancelled', 'You will be tired'], correctAnswer: 'You will get a good grade' },
          { question: 'Cause: The boy ate too much candy. Effect: ?', options: ['He felt energetic', 'He got a stomach ache', 'He became a dentist', 'He went for a run'], correctAnswer: 'He got a stomach ache' },
      ],
  },
  {
      level: 22,
      title: 'Fact vs. Opinion',
      description: 'Distinguishing between facts and opinions.',
      questions: [
          { question: 'Which of these is a fact?', options: ['Pizza is the best food.', 'Dogs are better than cats.', 'The Earth revolves around the Sun.', 'Blue is the prettiest color.'], correctAnswer: 'The Earth revolves around the Sun.' },
          { question: 'Which of these is an opinion?', options: ['My dog is the cutest dog in the world.', 'Dogs are mammals.', 'A year has 365 days.', 'Water is H2O.'], correctAnswer: 'My dog is the cutest dog in the world.' },
          { question: 'A fact is something that...', options: ['Everyone believes', 'Can be proven true or false', 'Is a personal feeling', 'Is always popular'], correctAnswer: 'Can be proven true or false' },
          { question: 'An opinion is...', options: ['A scientific law', 'A personal belief or feeling', 'Something that is always true', 'Found in encyclopedias'], correctAnswer: 'A personal belief or feeling' },
      ],
  },
  {
      level: 23,
      title: 'Author\'s Purpose',
      description: 'Why did the author write something?',
      questions: [
          { question: 'If an author writes a story to make you laugh, the purpose is to...', options: ['Persuade', 'Inform', 'Entertain', 'Explain'], correctAnswer: 'Entertain' },
          { question: 'A recipe is written to ___ you how to cook.', options: ['Persuade', 'Inform', 'Entertain', 'Scare'], correctAnswer: 'Inform' },
          { question: 'A commercial that says "Buy our new toy!" is trying to...', options: ['Persuade', 'Inform', 'Entertain', 'Confuse'], correctAnswer: 'Persuade' },
          { question: 'A textbook chapter about the solar system is written to...', options: ['Entertain', 'Persuade', 'Inform', 'Deceive'], correctAnswer: 'Inform' },
      ],
  },
  {
      level: 24,
      title: 'Sequencing',
      description: 'Putting events in order.',
      questions: [
          { question: 'What happens first: You wake up or you eat breakfast?', options: ['Wake up', 'Eat breakfast', 'They happen at the same time', 'Depends on the day'], correctAnswer: 'Wake up' },
          { question: 'Put in order: A) Plant a seed, B) Water the plant, C) See a flower.', options: ['A, C, B', 'B, A, C', 'A, B, C', 'C, B, A'], correctAnswer: 'A, B, C' },
          { question: 'What is the last step in mailing a letter?', options: ['Write the letter', 'Put it in the mailbox', 'Put a stamp on it', 'Address the envelope'], correctAnswer: 'Put it in the mailbox' },
          { question: 'In a story, the "end" comes after the...', options: ['Beginning', 'Middle', 'Title', 'Characters'], correctAnswer: 'Middle' },
      ],
  },
  {
      level: 25,
      title: 'Drawing Conclusions',
      description: 'Using clues to figure things out.',
      questions: [
          { question: 'If you see someone wearing a raincoat and carrying an umbrella, you can conclude that...', options: ['It is hot outside', 'It is sunny', 'It might be raining', 'It is snowing'], correctAnswer: 'It might be raining' },
          { question: 'A story mentions a sandy beach and crashing waves. The setting is likely...', options: ['A forest', 'A mountain', 'A city', 'The seaside'], correctAnswer: 'The seaside' },
          { question: 'If a character\'s stomach is rumbling, you can conclude they are...', options: ['Tired', 'Happy', 'Hungry', 'Sad'], correctAnswer: 'Hungry' },
          { question: 'The lights are off and everyone is quiet. You can conclude...', options: ['It is daytime', 'It is party time', 'People might be sleeping', 'It is very noisy'], correctAnswer: 'People might be sleeping' },
      ],
  },
  {
      level: 26,
      title: 'Possessive Nouns',
      description: 'Showing ownership.',
      questions: [
          { question: 'Which is correct: "The ___ toy is new."', options: ['boy\'s', 'boys', 'boys\'', 'boy'], correctAnswer: 'boy\'s' },
          { question: 'The books belong to the students. This is the ___ books.', options: ['student\'s', 'students', 'students\'', 'students\'s'], correctAnswer: 'students\'' },
          { question: 'This is ___ house.', options: ['James\'', 'Jame\'s', 'James\'s', 'Jameses'], correctAnswer: 'James\'s' },
          { question: 'The ___ color is red.', options: ['car\'s', 'cars', 'cars\'', 'car'], correctAnswer: 'car\'s' },
      ],
  },
  {
      level: 27,
      title: 'Contractions',
      description: 'Shortening words.',
      questions: [
          { question: 'What is the contraction for "do not"?', options: ['Dont', 'Do\'nt', 'Don\'t', 'Dant'], correctAnswer: 'Don\'t' },
          { question: 'What does "I\'m" stand for?', options: ['I am', 'I will', 'I have', 'I was'], correctAnswer: 'I am' },
          { question: '"She will" can be shortened to...', options: ['Shes', 'She\'ll', 'She\'d', 'Shell'], correctAnswer: 'She\'ll' },
          { question: 'What is "cannot" as a contraction?', options: ['Can\'t', 'Cant', 'Cannt', 'Ca\'nt'], correctAnswer: 'Can\'t' },
      ],
  },
  {
      level: 28,
      title: 'Quotation Marks',
      description: 'Using speech marks.',
      questions: [
          { question: 'Which sentence uses quotation marks correctly?', options: ['"He said, Hello!"', 'He said, "Hello!"', '"He said, Hello"!', 'He said "Hello"!'], correctAnswer: 'He said, "Hello!"' },
          { question: 'Quotation marks are used for...', options: ['Asking a question', 'Showing strong feeling', 'Showing what someone said', 'Ending a sentence'], correctAnswer: 'Showing what someone said' },
          { question: 'The teacher said, ___', options: ['"Sit down."', '"Sit down".', 'Sit down.', '"Sit down"'], correctAnswer: '"Sit down."' },
          { question: '"Let\'s go to the park," ___ Tom.', options: ['say', 'said', 'says', 'saying'], correctAnswer: 'said' },
      ],
  },
  {
      level: 29,
      title: 'Root Words',
      description: 'Understanding the base of words.',
      questions: [
          { question: 'What is the root word of "unhappy"?', options: ['un', 'happy', 'unhappy', 'hap'], correctAnswer: 'happy' },
          { question: 'The prefix "re-" in "reread" means...', options: ['Not', 'Again', 'Before', 'After'], correctAnswer: 'Again' },
          { question: 'What is the root word of "playing"?', options: ['play', 'playing', 'ing', 'lay'], correctAnswer: 'play' },
          { question: 'The suffix "-ful" in "careful" means...', options: ['Without', 'Full of', 'Less', 'Able to'], correctAnswer: 'Full of' },
      ],
  },
  {
      level: 30,
      title: 'Analogies',
      description: 'Finding relationships between words.',
      questions: [
          { question: 'Dog is to bark as cat is to ___', options: ['Meow', 'Roar', 'Chirp', 'Moo'], correctAnswer: 'Meow' },
          { question: 'Up is to down as hot is to ___', options: ['Warm', 'Cold', 'Spicy', 'Fire'], correctAnswer: 'Cold' },
          { question: 'Doctor is to hospital as teacher is to ___', options: ['Store', 'School', 'Farm', 'Airport'], correctAnswer: 'School' },
          { question: 'Foot is to leg as hand is to ___', options: ['Finger', 'Arm', 'Head', 'Toe'], correctAnswer: 'Arm' },
      ],
  },
  {
      level: 31,
      title: 'Genre Identification',
      description: 'Recognizing different types of stories.',
      questions: [
          { question: 'A story with magic and dragons is likely...', options: ['Science Fiction', 'Mystery', 'Fantasy', 'Biography'], correctAnswer: 'Fantasy' },
          { question: 'A story about a real person\'s life is a...', options: ['Fiction', 'Fantasy', 'Biography', 'Mystery'], correctAnswer: 'Biography' },
          { question: 'A story set in the future with robots and spaceships is...', options: ['Historical Fiction', 'Fantasy', 'Science Fiction', 'Realistic Fiction'], correctAnswer: 'Science Fiction' },
          { question: 'A funny story designed to make you laugh is a...', options: ['Tragedy', 'Drama', 'Horror', 'Comedy'], correctAnswer: 'Comedy' },
      ],
  },
  {
      level: 32,
      title: 'Point of View',
      description: 'Who is telling the story?',
      questions: [
          { question: 'If the narrator uses "I" and "me", the story is in ___ point of view.', options: ['First-person', 'Second-person', 'Third-person', 'Fourth-person'], correctAnswer: 'First-person' },
          { question: 'A story told from a "he/she/they" perspective is...', options: ['First-person', 'Second-person', 'Third-person', 'No-person'], correctAnswer: 'Third-person' },
          { question: '"You walk down the hallway" is an example of ___ point of view.', options: ['First-person', 'Second-person', 'Third-person', 'All of them'], correctAnswer: 'Second-person' },
          { question: 'The narrator is the person who...', options: ['Is the main character', 'Tells the story', 'Is the villain', 'Reads the book'], correctAnswer: 'Tells the story' },
      ],
  },
  {
      level: 33,
      title: 'Literary Devices',
      description: 'Onomatopoeia and Personification.',
      questions: [
          { question: '"The wind whispered through the trees." This is an example of...', options: ['Simile', 'Metaphor', 'Personification', 'Onomatopoeia'], correctAnswer: 'Personification' },
          { question: 'The word "buzz" is an example of...', options: ['Simile', 'Metaphor', 'Personification', 'Onomatopoeia'], correctAnswer: 'Onomatopoeia' },
          { question: 'Giving human qualities to an object is called...', options: ['Simile', 'Metaphor', 'Personification', 'Onomatopoeia'], correctAnswer: 'Personification' },
          { question: 'Which word is an example of onomatopoeia?', options: ['Happy', 'Run', 'Splash', 'Blue'], correctAnswer: 'Splash' },
      ],
  },
  {
      level: 34,
      title: 'Making Predictions',
      description: 'Guessing what will happen next.',
      questions: [
          { question: 'Dark clouds gather in the sky. What will likely happen next?', options: ['It will get sunny', 'It will start to rain', 'The moon will come out', 'It will be windy'], correctAnswer: 'It will start to rain' },
          { question: 'A character is studying hard for a big test. What is a likely outcome?', options: ['They will play games', 'They will do well on the test', 'They will forget about the test', 'They will go on vacation'], correctAnswer: 'They will do well on the test' },
          { question: 'A boy is building a tower of blocks higher and higher. What might happen?', options: ['It will turn into a real tower', 'It might fall over', 'It will disappear', 'It will start to fly'], correctAnswer: 'It might fall over' },
          { question: 'A girl finds a treasure map. What will she probably do next?', options: ['Throw it away', 'Go on an adventure', 'Go to sleep', 'Read a book'], correctAnswer: 'Go on an adventure' },
      ],
  },
  {
      level: 35,
      title: 'Final English Challenge',
      description: 'A mix of all concepts.',
      questions: [
          { question: 'Which is the correct spelling?', options: ['Neccessary', 'Necesary', 'Necessary', 'Neccesary'], correctAnswer: 'Necessary' },
          { question: 'Antonym for "brave"?', options: ['Courageous', 'Heroic', 'Cowardly', 'Bold'], correctAnswer: 'Cowardly' },
          { question: 'What is the main purpose of a dictionary?', options: ['To tell stories', 'To give definitions of words', 'To show maps', 'To list phone numbers'], correctAnswer: 'To give definitions of words' },
          { question: 'If you want to persuade someone, you try to...', options: ['Confuse them', 'Make them laugh', 'Convince them', 'Inform them'], correctAnswer: 'Convince them' },
      ],
  },
];

    