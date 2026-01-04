
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
  {
    level: 11,
    title: 'Food Groups',
    description: 'Understanding different food groups.',
    questions: [
        { question: 'Which food group does bread belong to?', options: ['Fruits', 'Vegetables', 'Grains', 'Dairy'], correctAnswer: 'Grains' },
        { question: 'Milk and cheese are part of which food group?', options: ['Meat', 'Grains', 'Dairy', 'Fats'], correctAnswer: 'Dairy' },
        { question: 'Which of these is a good source of protein?', options: ['Candy', 'Chicken', 'Bread', 'Juice'], correctAnswer: 'Chicken' },
        { question: 'Fruits and vegetables give us important...', options: ['Fats', 'Vitamins', 'Sugars', 'Salts'], correctAnswer: 'Vitamins' },
    ],
},
{
    level: 12,
    title: 'Simple Machines',
    description: 'Identifying simple machines.',
    questions: [
        { question: 'A seesaw is an example of a...', options: ['Lever', 'Pulley', 'Wedge', 'Screw'], correctAnswer: 'Lever' },
        { question: 'What simple machine is used to hold things together?', options: ['Lever', 'Pulley', 'Wedge', 'Screw'], correctAnswer: 'Screw' },
        { question: 'A ramp is a type of...', options: ['Inclined Plane', 'Wheel and Axle', 'Pulley', 'Lever'], correctAnswer: 'Inclined Plane' },
        { question: 'What do you use to raise a flag on a flagpole?', options: ['Lever', 'Pulley', 'Wedge', 'Screw'], correctAnswer: 'Pulley' },
    ],
},
{
    level: 13,
    title: 'Magnets',
    description: 'Understanding magnetism.',
    questions: [
        { question: 'What material is attracted to a magnet?', options: ['Wood', 'Plastic', 'Iron', 'Glass'], correctAnswer: 'Iron' },
        { question: 'What happens when two north poles of a magnet are brought together?', options: ['They attract', 'They repel', 'Nothing', 'They stick'], correctAnswer: 'They repel' },
        { question: 'A magnet has two poles, a north pole and a ___ pole.', options: ['East', 'West', 'South', 'Top'], correctAnswer: 'South' },
        { question: 'The area around a magnet where its force can be felt is called the...', options: ['Magnetic field', 'Magnetic zone', 'Magnetic space', 'Magnetic air'], correctAnswer: 'Magnetic field' },
    ],
},
{
    level: 14,
    title: 'Sound and Light',
    description: 'Basics of sound and light.',
    questions: [
        { question: 'Sound is caused by...', options: ['Light', 'Heat', 'Vibrations', 'Silence'], correctAnswer: 'Vibrations' },
        { question: 'Which of these is a source of light?', options: ['A rock', 'The moon', 'A lamp', 'A book'], correctAnswer: 'A lamp' },
        { question: 'When light is blocked by an object, it creates a...', options: ['Shadow', 'Reflection', 'Rainbow', 'Sound'], correctAnswer: 'Shadow' },
        { question: 'Sound travels fastest through...', options: ['Air', 'Water', 'Solids', 'Vacuum'], correctAnswer: 'Solids' },
    ],
},
{
    level: 15,
    title: 'Weather and Seasons',
    description: 'Understanding weather phenomena.',
    questions: [
        { question: 'What instrument is used to measure temperature?', options: ['Barometer', 'Anemometer', 'Thermometer', 'Rain gauge'], correctAnswer: 'Thermometer' },
        { question: 'Which season comes after winter?', options: ['Summer', 'Autumn', 'Spring', 'Rainy'], correctAnswer: 'Spring' },
        { question: 'What is a tornado?', options: ['A heavy rainstorm', 'A spinning column of air', 'A large snowstorm', 'A sunny day'], correctAnswer: 'A spinning column of air' },
        { question: 'What causes the seasons?', options: ['The Earth\'s distance from the sun', 'The tilt of the Earth\'s axis', 'The phases of the moon', 'The speed of the Earth\'s rotation'], correctAnswer: 'The tilt of the Earth\'s axis' },
    ],
},
{
    level: 16,
    title: 'The Skeletal System',
    description: 'Learning about bones.',
    questions: [
        { question: 'What is the main job of the skeletal system?', options: ['To pump blood', 'To digest food', 'To provide support for the body', 'To help us think'], correctAnswer: 'To provide support for the body' },
        { question: 'What is the bone in your head called?', options: ['Spine', 'Ribs', 'Skull', 'Femur'], correctAnswer: 'Skull' },
        { question: 'How many bones are in an adult human body?', options: ['About 100', 'About 206', 'About 300', 'About 500'], correctAnswer: 'About 206' },
        { question: 'The bones in your back are called the...', options: ['Skull', 'Ribs', 'Spine', 'Pelvis'], correctAnswer: 'Spine' },
    ],
},
{
    level: 17,
    title: 'The Muscular System',
    description: 'How muscles work.',
    questions: [
        { question: 'What do muscles do?', options: ['Help us move', 'Protect our organs', 'Produce blood cells', 'Filter waste'], correctAnswer: 'Help us move' },
        { question: 'Which muscle is in your chest and helps you breathe?', options: ['Bicep', 'Diaphragm', 'Quadricep', 'Gluteus'], correctAnswer: 'Diaphragm' },
        { question: 'What is the strong muscle in your heart?', options: ['Cardiac muscle', 'Smooth muscle', 'Skeletal muscle', 'Bicep'], correctAnswer: 'Cardiac muscle' },
        { question: 'To make your muscles stronger, you should...', options: ['Sleep all day', 'Eat only candy', 'Exercise regularly', 'Watch TV'], correctAnswer: 'Exercise regularly' },
    ],
},
{
    level: 18,
    title: 'The Circulatory System',
    description: 'Blood and heart.',
    questions: [
        { question: 'What does the circulatory system transport around the body?', options: ['Air', 'Food', 'Blood', 'Water'], correctAnswer: 'Blood' },
        { question: 'Which organ pumps blood?', options: ['Lungs', 'Stomach', 'Heart', 'Brain'], correctAnswer: 'Heart' },
        { question: 'What is the liquid part of blood?', options: ['Plasma', 'Platelets', 'Red cells', 'White cells'], correctAnswer: 'Plasma' },
        { question: 'Which blood vessels carry blood away from the heart?', options: ['Veins', 'Arteries', 'Capillaries', 'Nerves'], correctAnswer: 'Arteries' },
    ],
},
{
    level: 19,
    title: 'The Respiratory System',
    description: 'Breathing and lungs.',
    questions: [
        { question: 'Which organs do you use for breathing?', options: ['Stomach', 'Lungs', 'Kidneys', 'Liver'], correctAnswer: 'Lungs' },
        { question: 'What gas do we breathe in?', options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Helium'], correctAnswer: 'Oxygen' },
        { question: 'What gas do we breathe out?', options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], correctAnswer: 'Carbon dioxide' },
        { question: 'The tube that carries air to your lungs is the...', options: ['Esophagus', 'Trachea', 'Intestine', 'Artery'], correctAnswer: 'Trachea' },
    ],
},
{
    level: 20,
    title: 'The Nervous System',
    description: 'Brain and nerves.',
    questions: [
        { question: 'What is the control center of the nervous system?', options: ['Heart', 'Stomach', 'Brain', 'Lungs'], correctAnswer: 'Brain' },
        { question: 'What carries messages from your body to your brain?', options: ['Bones', 'Muscles', 'Nerves', 'Blood vessels'], correctAnswer: 'Nerves' },
        { question: 'Which part of the brain helps with balance and coordination?', options: ['Cerebrum', 'Cerebellum', 'Brainstem', 'Frontal lobe'], correctAnswer: 'Cerebellum' },
        { question: 'Your five senses are part of which system?', options: ['Skeletal', 'Muscular', 'Nervous', 'Digestive'], correctAnswer: 'Nervous' },
    ],
},
{
    level: 21,
    title: 'Electricity',
    description: 'Basic concepts of electricity.',
    questions: [
        { question: 'What is the flow of electrons called?', options: ['Gravity', 'Magnetism', 'Electricity', 'Light'], correctAnswer: 'Electricity' },
        { question: 'Which material is a good conductor of electricity?', options: ['Rubber', 'Wood', 'Copper', 'Plastic'], correctAnswer: 'Copper' },
        { question: 'A material that does not allow electricity to pass through it is called an...', options: ['Insulator', 'Conductor', 'Amplifier', 'Resistor'], correctAnswer: 'Insulator' },
        { question: 'What is a complete path for electricity to flow called?', options: ['A circuit', 'A current', 'A voltage', 'A power'], correctAnswer: 'A circuit' },
    ],
},
{
    level: 22,
    title: 'Famous Scientists',
    description: 'Recognizing famous scientists.',
    questions: [
        { question: 'Who is known for the theory of relativity?', options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Marie Curie'], correctAnswer: 'Albert Einstein' },
        { question: 'Who discovered gravity when an apple fell on his head?', options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Charles Darwin'], correctAnswer: 'Isaac Newton' },
        { question: 'Who is famous for her work on radioactivity?', options: ['Rosalind Franklin', 'Jane Goodall', 'Marie Curie', 'Ada Lovelace'], correctAnswer: 'Marie Curie' },
        { question: 'Who invented the telephone?', options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Guglielmo Marconi'], correctAnswer: 'Alexander Graham Bell' },
    ],
},
{
    level: 23,
    title: 'Inventions and Discoveries',
    description: 'Matching inventions to their use.',
    questions: [
        { question: 'What was the wheel used for?', options: ['Transportation', 'Communication', 'Cooking', 'Writing'], correctAnswer: 'Transportation' },
        { question: 'The printing press made it easier to produce...', options: ['Food', 'Clothes', 'Books', 'Houses'], correctAnswer: 'Books' },
        { question: 'The internet allows for...', options: ['Global communication', 'Time travel', 'Space exploration', 'Weather control'], correctAnswer: 'Global communication' },
        { question: 'Penicillin is a type of...', options: ['Vaccine', 'Antibiotic', 'Painkiller', 'Vitamin'], correctAnswer: 'Antibiotic' },
    ],
},
{
    level: 24,
    title: 'Chemical Reactions',
    description: 'Simple chemical reactions.',
    questions: [
        { question: 'What happens when you mix baking soda and vinegar?', options: ['It gets cold', 'It fizzes and produces gas', 'It turns into a solid', 'Nothing happens'], correctAnswer: 'It fizzes and produces gas' },
        { question: 'Rusting is a chemical reaction of iron with...', options: ['Water and oxygen', 'Nitrogen', 'Carbon dioxide', 'Sunlight'], correctAnswer: 'Water and oxygen' },
        { question: 'Burning wood is an example of a...', options: ['Physical change', 'Chemical change', 'State change', 'No change'], correctAnswer: 'Chemical change' },
        { question: 'What is a chemical symbol?', options: ['A short way to write an element', 'A secret code', 'A type of equation', 'A drawing of an atom'], correctAnswer: 'A short way to write an element' },
    ],
},
{
    level: 25,
    title: 'Ecology',
    description: 'Interactions in ecosystems.',
    questions: [
        { question: 'What is an ecosystem?', options: ['A single animal', 'A community of living and non-living things', 'Just the plants in an area', 'A type of weather'], correctAnswer: 'A community of living and non-living things' },
        { question: 'An animal that hunts other animals is a...', options: ['Prey', 'Predator', 'Herbivore', 'Producer'], correctAnswer: 'Predator' },
        { question: 'What is camouflage?', options: ['A type of food', 'A way animals hide by blending in', 'A migration pattern', 'A mating dance'], correctAnswer: 'A way animals hide by blending in' },
        { question: 'Deforestation is the cutting down of...', options: ['Mountains', 'Forests', 'Rivers', 'Cities'], correctAnswer: 'Forests' },
    ],
},
{
    level: 26,
    title: 'Geology',
    description: 'Earth science basics.',
    questions: [
        { question: 'What is the hot liquid rock inside the Earth called?', options: ['Lava', 'Magma', 'Obsidian', 'Granite'], correctAnswer: 'Magma' },
        { question: 'What is a fossil?', options: ['A type of rock', 'A living dinosaur', 'The preserved remains of an ancient organism', 'A kind of crystal'], correctAnswer: 'The preserved remains of an ancient organism' },
        { question: 'What causes earthquakes?', options: ['Heavy rain', 'Strong winds', 'Movement of tectonic plates', 'Volcanic eruptions'], correctAnswer: 'Movement of tectonic plates' },
        { question: 'What are the three main types of rocks?', options: ['Hard, Soft, Medium', 'Igneous, Sedimentary, Metamorphic', 'Big, Small, Tiny', 'Light, Dark, Colored'], correctAnswer: 'Igneous, Sedimentary, Metamorphic' },
    ],
},
{
    level: 27,
    title: 'Astronomy',
    description: 'Beyond our solar system.',
    questions: [
        { question: 'What is a group of stars forming a pattern called?', options: ['A galaxy', 'A nebula', 'A constellation', 'A solar system'], correctAnswer: 'A constellation' },
        { question: 'What is a black hole?', options: ['A dark star', 'A hole in space', 'An area with gravity so strong nothing can escape', 'A type of planet'], correctAnswer: 'An area with gravity so strong nothing can escape' },
        { question: 'Our sun is a...', options: ['Planet', 'Star', 'Galaxy', 'Moon'], correctAnswer: 'Star' },
        { question: 'What is the speed of light?', options: ['Very slow', 'The fastest speed possible', 'Same as the speed of sound', 'Variable'], correctAnswer: 'The fastest speed possible' },
    ],
},
{
    level: 28,
    title: 'Botany',
    description: 'The study of plants.',
    questions: [
        { question: 'What is photosynthesis?', options: ['How plants sleep', 'How plants make their own food', 'How plants drink water', 'How plants reproduce'], correctAnswer: 'How plants make their own food' },
        { question: 'What part of the flower produces pollen?', options: ['Petal', 'Sepal', 'Stamen', 'Pistil'], correctAnswer: 'Stamen' },
        { question: 'How do seeds travel?', options: ['Wind, water, animals', 'Only by planting', 'They do not travel', 'By car'], correctAnswer: 'Wind, water, animals' },
        { question: 'What is the green pigment in leaves called?', options: ['Chlorophyll', 'Melanin', 'Hemoglobin', 'Carotene'], correctAnswer: 'Chlorophyll' },
    ],
},
{
    level: 29,
    title: 'Zoology',
    description: 'The study of animals.',
    questions: [
        { question: 'What is an animal with a backbone called?', options: ['Invertebrate', 'Vertebrate', 'Insect', 'Jellyfish'], correctAnswer: 'Vertebrate' },
        { question: 'What is metamorphosis?', options: ['A type of migration', 'A change in body form', 'A way of hunting', 'A defense mechanism'], correctAnswer: 'A change in body form' },
        { question: 'Which of these animals is a mammal?', options: ['Shark', 'Frog', 'Eagle', 'Whale'], correctAnswer: 'Whale' },
        { question: 'What is hibernation?', options: ['A long sleep during winter', 'Traveling to warmer places', 'Shedding skin', 'Changing color'], correctAnswer: 'A long sleep during winter' },
    ],
},
{
    level: 30,
    title: 'Physics Fun',
    description: 'Basic physics principles.',
    questions: [
        { question: 'What is friction?', options: ['A force that helps things move', 'A force that opposes motion', 'A type of energy', 'A kind of magnet'], correctAnswer: 'A force that opposes motion' },
        { question: 'For every action, there is an equal and opposite...', options: ['Reaction', 'Force', 'Energy', 'Motion'], correctAnswer: 'Reaction' },
        { question: 'What is density?', options: ['How heavy something is', 'How big something is', 'How much mass is in a certain volume', 'How fast something falls'], correctAnswer: 'How much mass is in a certain volume' },
        { question: 'Why do things fall to the ground?', options: ['Magnetism', 'Gravity', 'Air pressure', 'Friction'], correctAnswer: 'Gravity' },
    ],
},
{
    level: 31,
    title: 'The Scientific Method',
    description: 'Steps of the scientific method.',
    questions: [
        { question: 'What is the first step of the scientific method?', options: ['Experiment', 'Conclusion', 'Observation/Question', 'Hypothesis'], correctAnswer: 'Observation/Question' },
        { question: 'What is a hypothesis?', options: ['A proven fact', 'An educated guess', 'The final answer', 'A type of experiment'], correctAnswer: 'An educated guess' },
        { question: 'What do you do after you form a hypothesis?', options: ['Draw a conclusion', 'Conduct an experiment', 'Ask a question', 'Share your results'], correctAnswer: 'Conduct an experiment' },
        { question: 'The final step is to...', options: ['Analyze data and draw a conclusion', 'Form a hypothesis', 'Ask a question', 'Do background research'], correctAnswer: 'Analyze data and draw a conclusion' },
    ],
},
{
    level: 32,
    title: 'Biomes',
    description: 'Different types of biomes.',
    questions: [
        { question: 'Which biome is very dry and hot?', options: ['Tundra', 'Rainforest', 'Desert', 'Grassland'], correctAnswer: 'Desert' },
        { question: 'Which biome has the most biodiversity?', options: ['Tundra', 'Rainforest', 'Desert', 'Taiga'], correctAnswer: 'Rainforest' },
        { question: 'Which biome is characterized by evergreen trees and cold winters?', options: ['Savanna', 'Taiga', 'Desert', 'Rainforest'], correctAnswer: 'Taiga' },
        { question: 'What is the largest biome on Earth?', options: ['Desert', 'Forest', 'Aquatic', 'Tundra'], correctAnswer: 'Aquatic' },
    ],
},
{
    level: 33,
    title: 'Conservation',
    description: 'Protecting our planet.',
    questions: [
        { question: 'What does "endangered species" mean?', options: ['A species that is dangerous', 'A species at risk of extinction', 'A newly discovered species', 'A species that lives in caves'], correctAnswer: 'A species at risk of extinction' },
        { question: 'What are the 3 R\'s of conservation?', options: ['Read, Write, Arithmetic', 'Reduce, Reuse, Recycle', 'Run, Rest, Repeat', 'Rock, Roll, Rhyme'], correctAnswer: 'Reduce, Reuse, Recycle' },
        { question: 'What is a major cause of air pollution?', options: ['Planting trees', 'Burning fossil fuels', 'Using solar power', 'Recycling'], correctAnswer: 'Burning fossil fuels' },
        { question: 'Why is it important to conserve water?', options: ['It is a limited resource', 'It is expensive', 'It is difficult to find', 'All of the above'], correctAnswer: 'All of the above' },
    ],
},
{
    level: 34,
    title: 'Human Impact',
    description: 'How humans affect the environment.',
    questions: [
        { question: 'What is global warming?', options: ['The Earth getting closer to the sun', 'The increase in Earth\'s average temperature', 'A natural cycle of the Earth', 'A type of weather'], correctAnswer: 'The increase in Earth\'s average temperature' },
        { question: 'What is a greenhouse gas?', options: ['A gas that is green', 'A gas that traps heat in the atmosphere', 'A gas used in greenhouses', 'A gas that cools the Earth'], correctAnswer: 'A gas that traps heat in the atmosphere' },
        { question: 'What is an invasive species?', options: ['A species that is shy', 'A species that is not native and causes harm', 'A species that is very friendly', 'A species that lives underground'], correctAnswer: 'A species that is not native and causes harm' },
        { question: 'What is a way to reduce your carbon footprint?', options: ['Drive a car everywhere', 'Use less electricity', 'Leave the water running', 'Use plastic bags'], correctAnswer: 'Use less electricity' },
    ],
},
{
    level: 35,
    title: 'Final Science Challenge',
    description: 'A mix of all scientific concepts.',
    questions: [
        { question: 'What is the chemical formula for table salt?', options: ['H2O', 'CO2', 'NaCl', 'O2'], correctAnswer: 'NaCl' },
        { question: 'Which planet is known for its rings?', options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'], correctAnswer: 'Saturn' },
        { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Cell membrane'], correctAnswer: 'Mitochondria' },
        { question: 'What is the pH of a neutral substance like pure water?', options: ['0', '7', '14', '1'], correctAnswer: '7' },
    ],
},
];

    