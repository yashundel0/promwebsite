export interface Coach {
  id: string;
  name: string;
  position: string;
  bio: string;
  experience: string;
  image: string;
  credentials: string[];
}

export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  ageRange: string;
  schedule: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  image: string;
}

export const coaches: Coach[] = [
  {
    id: 'pavel-mamaev',
    name: 'Pavel Mamaev',
    position: 'Founder & President',
    bio: 'Former professional footballer and founder of PRO-M Football Academy. Pavel brings years of elite playing experience and a vision to develop the next generation of football talent in Dubai through professional coaching and genuine passion for the game.',
    experience: '15+ Years',
    image: '/images/coaches/mamaev_pavel.webp',
    credentials: ['Ex-Pro Footballer', 'Academy Founder', '15+ Years Experience'],
  },
  {
    id: 'fedor-smolov',
    name: 'Fedor Smolov',
    position: 'Partner of the Academy',
    bio: 'Professional footballer and partner of PRO-M Academy. Fedor brings top-level playing experience and a deep understanding of what it takes to reach the highest levels of the game, inspiring young players to aim high.',
    experience: '15+ Years',
    image: '/images/coaches/fedor_smolov.webp',
    credentials: ['Professional Player', 'Academy Partner', 'International Experience'],
  },
  {
    id: 'nikita-gogolev',
    name: 'Nikita Gogolev',
    position: 'Coach',
    bio: 'Dedicated coach with a strong focus on technical fundamentals and player development. Nikita works closely with young players to build confidence, ball control, and game intelligence in a supportive and challenging environment.',
    experience: '10+ Years',
    image: '/images/coaches/nikita_gogolev.webp',
    credentials: ['Certified Coach', 'Youth Development', '10+ Years Experience'],
  },
  {
    id: 'almaz-gilmutdinov',
    name: 'Almaz Gilmutdinov',
    position: 'Coach',
    bio: 'Experienced coach specializing in tactical awareness and physical conditioning. Almaz helps players develop the athleticism and game understanding needed to perform at their best, both in training and on match day.',
    experience: '10+ Years',
    image: '/images/coaches/almaz_gilmutdinov.webp',
    credentials: ['Certified Coach', 'Tactical Specialist', '10+ Years Experience'],
  },
];

export const programs: Program[] = [
  {
    id: 'play-for-fun',
    title: 'Play for Fun',
    shortDescription: 'An introduction to football for the youngest players, focused on fun and movement.',
    description: 'Our Play for Fun program is designed for the youngest players taking their first steps in football. Through playful activities and engaging exercises, children develop basic coordination, ball familiarity, and a genuine love for the game in a relaxed and supportive environment.',
    image: '/images/about/6.webp',
    features: [
      'Ages 3-4 welcome',
      'Play-based learning',
      'Basic coordination skills',
      'Ball familiarity drills',
      'Fun and supportive environment',
    ],
    ageRange: 'Ages 3-4',
    schedule: 'Mon, Wed, Fri',
  },
  {
    id: 'play-for-learn',
    title: 'Play for Learn',
    shortDescription: 'Building foundational technical skills through structured, enjoyable sessions.',
    description: 'Play for Learn introduces structured technical training while keeping the experience enjoyable. Players develop fundamental skills — dribbling, passing, shooting — alongside basic tactical concepts, building a solid foundation for future development.',
    image: '/images/approach/2.jpg',
    features: [
      'Fundamental technique building',
      'Dribbling & passing drills',
      'Basic tactical concepts',
      'Small-sided games',
      'Progress tracking',
    ],
    ageRange: 'Ages 5-8',
    schedule: 'Mon, Wed, Fri',
  },
  {
    id: 'learn-in-game',
    title: 'Learn in Game',
    shortDescription: 'Developing game intelligence through competitive scenarios and positional play.',
    description: 'Learn in Game bridges the gap between technical training and real match performance. Players develop game intelligence through competitive scenarios, positional play, and decision-making exercises that translate skills into match-day performance.',
    image: '/images/approach/7.jpg',
    features: [
      'Game intelligence training',
      'Positional play development',
      'Decision-making exercises',
      'Competitive match scenarios',
      'Tactical awareness building',
    ],
    ageRange: 'Ages 9-10',
    schedule: 'Mon, Wed, Fri',
  },
  {
    id: 'play-like-a-pro',
    title: 'Play like a PRO',
    shortDescription: 'Elite-level training for players aiming to compete at the highest level.',
    description: 'Our flagship program for ambitious players. Play like a PRO delivers elite-level training that mirrors professional academy standards. Players undergo intensive technical, tactical, physical, and mental development designed to prepare them for competitive football at the highest level.',
    image: '/images/approach/1.jpg',
    features: [
      'Professional-level training',
      'Advanced tactical systems',
      'Physical conditioning',
      'Match analysis & feedback',
      'Pathway to professional clubs',
    ],
    ageRange: 'Ages 11-14',
    schedule: 'Mon, Wed, Fri',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ahmed Al Mansoori',
    role: 'Parent of U-12 Player',
    quote: 'The transformation in my son\'s game has been remarkable. His technical ability, confidence, and understanding of the game have all improved dramatically since joining PRO-M.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sarah Williams',
    role: 'Parent of U-10 Player',
    quote: 'Professional, structured, and genuinely caring. The coaches don\'t just train — they mentor. My daughter looks forward to every single session.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Khalid Rahman',
    role: 'Parent of U-14 Player',
    quote: 'We tried several academies in Dubai before finding PRO-M. The difference in coaching quality and attention to individual development is night and day.',
    rating: 5,
  },
];

export const locations: Location[] = [
  {
    id: 'dubai',
    name: 'Dubai',
    address: 'Dubai, United Arab Emirates',
    image: '/images/approach/11.jpg',
  },
  {
    id: 'ras-al-khaimah',
    name: 'Ras Al Khaimah',
    address: 'Ras Al Khaimah, United Arab Emirates',
    image: '/images/approach/4.jpg',
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    address: 'Abu Dhabi, United Arab Emirates',
    image: '/images/approach/9.jpg',
  },
];

export const whyChooseUs = [
  {
    icon: 'Trophy',
    title: 'Elite Coaching Staff',
    description: 'Professional coaches with playing and academy experience at the highest level, led by founder Pavel Mamaev.',
  },
  {
    icon: 'Target',
    title: 'Individual Development',
    description: 'Every player gets a personalized development plan with tracked progress and regular feedback.',
  },
  {
    icon: 'MapPin',
    title: 'World-Class Facilities',
    description: 'Training across Dubai\'s top pitches with professional-grade equipment and environments.',
  },
  {
    icon: 'Users',
    title: 'Pathway to Pro',
    description: 'Structured progression from grassroots to elite, with connections to professional clubs and scouts.',
  },
  {
    icon: 'Heart',
    title: 'Character First',
    description: 'We build not just players, but disciplined, confident, and respectful young people.',
  },
  {
    icon: 'Calendar',
    title: 'Year-Round Programs',
    description: 'Flexible training schedules with programs running all year for ages 3 to 14.',
  },
];
