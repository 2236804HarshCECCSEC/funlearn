export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: string;
  visual?: string; // For picture-based questions
}

export interface ScienceLevel {
  level: number;
  title: string;
  description: string;
  questions: MCQ[];
}

export const scienceLevels: ScienceLevel[] = [
  // Level 1: Beginner
  {
    level: 1,
    title: 'Living or Not?',
    description: 'Identifying living and non-living things.',
    questions: [
      { question: 'Which of these is a living thing?', visual: '🧸', options: ['A rock', 'A toy bear', 'A flower', 'A chair'], correctAnswer: 'A flower' },
      { question: 'Is a car a living or non-living thing?', options: ['Living', 'Non-living', 'Sometimes living', 'Both'], correctAnswer: 'Non-living' },
      { question: 'Which of these needs food and water to live?', options: ['A book', 'A tree', 'A table', 'A stone'], correctAnswer: 'A tree' },
      { question: 'What is a key difference between a plant and a rock?', options: ['A plant can grow.', 'A rock can move.', 'A plant is hard.', 'A rock is colorful.'], correctAnswer: 'A plant can grow.' },
      { question: 'Which of these is a non-living thing?', options: ['A bird', 'A fish', 'A computer', 'A cat'], correctAnswer: 'A computer' },
      { question: 'Can a living thing have babies or produce seeds?', options: ['Yes', 'No', 'Only animals', 'Only plants'], correctAnswer: 'Yes' },
      { question: 'Look at the picture. Is the butterfly living?', visual: '🦋', options: ['Yes', 'No', 'I don\'t know', 'It\'s a toy'], correctAnswer: 'Yes' },
      { question: 'Which of these is NOT a characteristic of living things?', options: ['They grow', 'They breathe', 'They stay in one place forever', 'They need energy'], correctAnswer: 'They stay in one place forever' },
    ],
  },
  // Level 2: Beginner
  {
    level: 2,
    title: 'Amazing Animals & Plants',
    description: 'Recognizing animals, plants, and body parts.',
    questions: [
      { question: 'Which part of your body do you use to see?', options: ['Ears', 'Nose', 'Eyes', 'Mouth'], correctAnswer: 'Eyes' },
      { question: 'Which animal says "moo"?', options: ['A sheep', 'A pig', 'A horse', 'A cow'], correctAnswer: 'A cow' },
      { question: 'What part of a plant is usually under the ground?', options: ['Leaf', 'Flower', 'Stem', 'Root'], correctAnswer: 'Root' },
      { question: 'How many legs does a spider have?', options: ['4', '6', '8', '10'], correctAnswer: '8' },
      { question: 'Which of these animals can fly?', options: ['A dog', 'A fish', 'A bird', 'A snake'], correctAnswer: 'A bird' },
      { question: 'What part of your body do you use to smell a flower?', options: ['Eyes', 'Mouth', 'Ears', 'Nose'], correctAnswer: 'Nose' },
      { question: 'Which of these grows on a tree?', options: ['An apple', 'A carrot', 'A potato', 'A pumpkin'], correctAnswer: 'An apple' },
      { question: 'What is the big, bright star we see during the day?', options: ['The Moon', 'Mars', 'The Sun', 'A comet'], correctAnswer: 'The Sun' },
    ],
  },
  // Level 3: Easy
  {
    level: 3,
    title: 'Animal Homes & Needs',
    description: 'Learning about where animals live and what they need.',
    questions: [
      { question: 'Where does a fish live?', options: ['In a nest', 'In a cave', 'In water', 'In a burrow'], correctAnswer: 'In water' },
      { question: 'What do all living things need to breathe?', options: ['Water', 'Air', 'Food', 'Sunlight'], correctAnswer: 'Air' },
      { question: 'Which part of a plant makes food using sunlight?', options: ['Root', 'Stem', 'Flower', 'Leaf'], correctAnswer: 'Leaf' },
      { question: 'A bear often lives in a...', options: ['Web', 'Den', 'Shell', 'Hive'], correctAnswer: 'Den' },
      { question: 'What is the main source of energy for plants?', options: ['Water', 'Soil', 'Sunlight', 'Air'], correctAnswer: 'Sunlight' },
      { question: 'What does a squirrel like to eat?', options: ['Insects', 'Fish', 'Nuts', 'Leaves'], correctAnswer: 'Nuts' },
      { question: 'A bird builds a ___ in a tree.', options: ['nest', 'hole', 'web', 'dam'], correctAnswer: 'nest' },
      { question: 'What do we need to drink every day to stay healthy?', options: ['Soda', 'Juice', 'Milk', 'Water'], correctAnswer: 'Water' },
    ],
  },
  // Level 4: Easy
  {
    level: 4,
    title: 'Our Planet',
    description: 'Basics of day/night and parts of plants.',
    questions: [
      { question: 'What makes the Earth have day and night?', options: ['The Moon moving', 'The Earth spinning', 'The Sun moving', 'The clouds'], correctAnswer: 'The Earth spinning' },
      { question: 'Which part of a plant holds it up straight?', options: ['Flower', 'Leaf', 'Stem', 'Root'], correctAnswer: 'Stem' },
      { question: 'When the Sun goes down, it becomes...', options: ['Day', 'Morning', 'Night', 'Noon'], correctAnswer: 'Night' },
      { question: 'What colorful part of a plant attracts insects?', options: ['The leaf', 'The stem', 'The flower', 'The root'], correctAnswer: 'The flower' },
      { question: 'What do you call the big body of salt water that covers most of the Earth?', options: ['River', 'Lake', 'Ocean', 'Pond'], correctAnswer: 'Ocean' },
      { question: 'What do plant roots do?', options: ['Make food', 'Look pretty', 'Absorb water and nutrients', 'Help the plant fly'], correctAnswer: 'Absorb water and nutrients' },
      { question: 'What object appears in the sky at night?', options: ['The Sun', 'A rainbow', 'The Moon', 'A blue sky'], correctAnswer: 'The Moon' },
      { question: 'Which of these is NOT a basic need for most animals?', options: ['Air', 'Water', 'A phone', 'Food'], correctAnswer: 'A phone' },
    ],
  },
  // Level 5: Medium
  {
    level: 5,
    title: 'Body & Water',
    description: 'The human body, water cycle, and states of matter.',
    questions: [
      { question: 'Which organ pumps blood around your body?', options: ['Lungs', 'Brain', 'Stomach', 'Heart'], correctAnswer: 'Heart' },
      { question: 'What happens when you heat water?', options: ['It freezes', 'It evaporates (becomes a gas)', 'It melts', 'It disappears'], correctAnswer: 'It evaporates (becomes a gas)' },
      { question: 'Which of these is a solid?', options: ['Water', 'Air', 'Ice', 'Juice'], correctAnswer: 'Ice' },
      { question: 'When water vapor in the air gets cold, it forms...', options: ['Ice', 'Clouds', 'Fire', 'Wind'], correctAnswer: 'Clouds' },
      { question: 'Which organ do you use to think and control your body?', options: ['Heart', 'Lungs', 'Brain', 'Stomach'], correctAnswer: 'Brain' },
      { question: 'Which of these is a liquid?', options: ['A block of wood', 'A rock', 'Milk', 'Steam'], correctAnswer: 'Milk' },
      { question: 'Rain, snow, and hail are forms of...', options: ['Evaporation', 'Precipitation', 'Condensation', 'Collection'], correctAnswer: 'Precipitation' },
      { question: 'What protects our body on the outside?', options: ['Bones', 'Muscles', 'Skin', 'Heart'], correctAnswer: 'Skin' },
    ],
  },
  // Level 6: Medium
  {
    level: 6,
    title: 'Matter and Sky',
    description: 'More on states of matter and the sky.',
    questions: [
      { question: 'Which of these is a gas?', options: ['Water', 'Ice', 'A book', 'The air we breathe'], correctAnswer: 'The air we breathe' },
      { question: 'What is the process of a liquid turning into a solid called?', options: ['Melting', 'Freezing', 'Boiling', 'Evaporating'], correctAnswer: 'Freezing' },
      { question: 'What causes day and night?', options: ['The Earth orbits the Sun', 'The Sun orbits the Earth', 'The Earth rotates on its axis', 'The Moon covers the Sun'], correctAnswer: 'The Earth rotates on its axis' },
      { question: 'What state of matter is a cloud?', options: ['Solid', 'Liquid', 'Gas', 'A mix of liquid and gas'], correctAnswer: 'A mix of liquid and gas' },
      { question: 'What happens when ice is left in a warm room?', options: ['It melts', 'It freezes', 'It evaporates', 'It gets bigger'], correctAnswer: 'It melts' },
      { question: 'Which system in your body helps you digest food?', options: ['Skeletal', 'Muscular', 'Digestive', 'Nervous'], correctAnswer: 'Digestive' },
      { question: 'What is H₂O?', options: ['Air', 'Salt', 'Water', 'Sugar'], correctAnswer: 'Water' },
      { question: 'A year is the time it takes for...', options: ['The Earth to spin once', 'The Moon to orbit Earth', 'The Earth to orbit the Sun', 'The Sun to spin once'], correctAnswer: 'The Earth to orbit the Sun' },
    ],
  },
  // Level 7: Medium-Hard
  {
    level: 7,
    title: 'Sun, Earth, and Energy',
    description: 'Learning about the solar system and energy.',
    questions: [
      { question: 'Which planet is known as the "Red Planet"?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], correctAnswer: 'Mars' },
      { question: 'Which of these is a simple machine?', options: ['A computer', 'A lever', 'A car', 'A refrigerator'], correctAnswer: 'A lever' },
      { question: 'What is the name of our galaxy?', options: ['Andromeda', 'Triangulum', 'The Milky Way', 'The Star Galaxy'], correctAnswer: 'The Milky Way' },
      { question: 'What kind of energy do we get from the sun?', options: ['Kinetic', 'Chemical', 'Solar', 'Electrical'], correctAnswer: 'Solar' },
      { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'], correctAnswer: 'Jupiter' },
      { question: 'A force that pulls objects toward each other is called...', options: ['Friction', 'Magnetism', 'Gravity', 'Lift'], correctAnswer: 'Gravity' },
      { question: 'Which of these is a source of light?', options: ['The Moon', 'A mirror', 'A star', 'A cat'], correctAnswer: 'A star' },
      { question: 'The pattern of weather over a long time is called...', options: ['Temperature', 'A storm', 'Climate', 'A season'], correctAnswer: 'Climate' },
    ],
  },
  // Level 8: Medium-Hard
  {
    level: 8,
    title: 'Forces and Weather',
    description: 'Understanding forces, machines, and weather patterns.',
    questions: [
      { question: 'What tool would you use to see planets up close?', options: ['Microscope', 'Telescope', 'Binoculars', 'Magnifying glass'], correctAnswer: 'Telescope' },
      { question: 'What causes wind?', options: ['Trees moving', 'Differences in air pressure', 'The Earth spinning very fast', 'Clouds bumping into each other'], correctAnswer: 'Differences in air pressure' },
      { question: 'Which of these is a renewable energy source?', options: ['Coal', 'Oil', 'Natural Gas', 'Wind'], correctAnswer: 'Wind' },
      { question: 'A ramp is a type of...', options: ['Lever', 'Pulley', 'Inclined Plane', 'Wheel and Axle'], correctAnswer: 'Inclined Plane' },
      { question: 'What planet is closest to the Sun?', options: ['Venus', 'Earth', 'Mercury', 'Mars'], correctAnswer: 'Mercury' },
      { question: 'What protects the Earth from the Sun\'s harmful rays?', options: ['The atmosphere', 'The ocean', 'The clouds', 'The magnetic field'], correctAnswer: 'The atmosphere' },
      { question: 'Sound is a form of...', options: ['Light', 'Heat', 'Energy', 'Matter'], correctAnswer: 'Energy' },
      { question: 'What is it called when a species of animal has no living members left?', options: ['Endangered', 'Extinct', 'Hibernating', 'Migrating'], correctAnswer: 'Extinct' },
    ],
  },
  // Level 9: Hard
  {
    level: 9,
    title: 'Eco Explorers',
    description: 'Environmental science and cause/effect.',
    questions: [
      { question: 'What is the main cause of pollution?', options: ['Animals', 'Plants', 'Human activities', 'Volcanoes'], correctAnswer: 'Human activities' },
      { question: 'What does "recycle" mean?', options: ['To throw away trash', 'To make something new from something old', 'To burn garbage', 'To bury waste'], correctAnswer: 'To make something new from something old' },
      {
        question: 'If you leave an ice cube in the sun, what will happen? (Cause and Effect)',
        options: ['It will get colder', 'It will melt into water', 'It will turn into a rock', 'It will get bigger'],
        correctAnswer: 'It will melt into water',
      },
      { question: 'Why is it important to plant trees?', options: ['They give us fruit', 'They provide oxygen', 'They provide shade', 'All of the above'], correctAnswer: 'All of the above' },
      { question: 'What is a food chain?', options: ['A list of foods you like', 'How energy is passed from one living thing to another', 'A chain made of food', 'A recipe'], correctAnswer: 'How energy is passed from one living thing to another' },
      { question: 'If there is no rain for a long time, what might happen?', options: ['A flood', 'A drought', 'A snowstorm', 'A beautiful rainbow'], correctAnswer: 'A drought' },
      { question: 'What gas do plants take from the air to make food?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Helium'], correctAnswer: 'Carbon Dioxide' },
      { question: 'Which of the following helps to save energy?', options: ['Leaving lights on', 'Turning off the TV when not watching', 'Leaving the refrigerator door open', 'Using the car for short trips'], correctAnswer: 'Turning off the TV when not watching' },
    ],
  },
  // Level 10: Hard
  {
    level: 10,
    title: 'Science Whiz',
    description: 'Logical thinking and advanced science concepts.',
    questions: [
      { question: 'What makes a compass point north?', options: ['The Sun\'s position', 'The Earth\'s magnetic field', 'The stars', 'The direction of the wind'], correctAnswer: 'The Earth\'s magnetic field' },
      { question: 'If a plant does not get sunlight, what will happen?', options: ['It will grow faster', 'It will turn blue', 'It will have trouble making food and may die', 'It will produce more flowers'], correctAnswer: 'It will have trouble making food and may die' },
      { question: 'Why do we have different seasons?', options: ['Because the Earth gets closer and farther from the Sun', 'Because of the tilt of the Earth\'s axis', 'Because the Moon blocks the Sun', 'Because of ocean currents'], correctAnswer: 'Because of the tilt of the Earth\'s axis' },
      { question: 'An animal that eats only plants is called a...', options: ['Carnivore', 'Herbivore', 'Omnivore', 'Insectivore'], correctAnswer: 'Herbivore' },
      { question: 'What force keeps you from floating into space?', options: ['Magnetism', 'Friction', 'Air pressure', 'Gravity'], correctAnswer: 'Gravity' },
      { question: 'A tadpole grows up to be a...', options: ['Fish', 'Salamander', 'Frog', 'Lizard'], correctAnswer: 'Frog' },
      { question: 'What is the process of a caterpillar turning into a butterfly called?', options: ['Metamorphosis', 'Hibernation', 'Migration', 'Photosynthesis'], correctAnswer: 'Metamorphosis' },
      { question: 'If you mix blue and yellow paint, what color do you get?', options: ['Red', 'Orange', 'Green', 'Purple'], correctAnswer: 'Green' },
    ],
  },
];
