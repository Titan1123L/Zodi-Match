export interface ZodiacSign {
  id: string
  name: string
  symbol: string
  element: string
  dates: string
  traits: string[]
}

export interface Compatibility {
  overall: number
  love: number
  friendship: number
  communication: number
  emotional: number
  professional: number
  description: string
  strengths: string[]
  challenges: string[]
}

export interface Horoscope {
  general: string
  love: string
  career: string
  health: string
  luckyNumbers: number[]
  luckyColors: string[]
}

export const zodiacSigns: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    symbol: "♈",
    element: "Fire",
    dates: "Mar 21 - Apr 19",
    traits: ["Energetic", "Confident", "Impulsive", "Leadership"],
  },
  {
    id: "taurus",
    name: "Taurus",
    symbol: "♉",
    element: "Earth",
    dates: "Apr 20 - May 20",
    traits: ["Reliable", "Patient", "Practical", "Stubborn"],
  },
  {
    id: "gemini",
    name: "Gemini",
    symbol: "♊",
    element: "Air",
    dates: "May 21 - Jun 20",
    traits: ["Adaptable", "Curious", "Social", "Indecisive"],
  },
  {
    id: "cancer",
    name: "Cancer",
    symbol: "♋",
    element: "Water",
    dates: "Jun 21 - Jul 22",
    traits: ["Emotional", "Nurturing", "Intuitive", "Moody"],
  },
  {
    id: "leo",
    name: "Leo",
    symbol: "♌",
    element: "Fire",
    dates: "Jul 23 - Aug 22",
    traits: ["Confident", "Generous", "Creative", "Dramatic"],
  },
  {
    id: "virgo",
    name: "Virgo",
    symbol: "♍",
    element: "Earth",
    dates: "Aug 23 - Sep 22",
    traits: ["Analytical", "Practical", "Perfectionist", "Helpful"],
  },
  {
    id: "libra",
    name: "Libra",
    symbol: "♎",
    element: "Air",
    dates: "Sep 23 - Oct 22",
    traits: ["Diplomatic", "Balanced", "Social", "Indecisive"],
  },
  {
    id: "scorpio",
    name: "Scorpio",
    symbol: "♏",
    element: "Water",
    dates: "Oct 23 - Nov 21",
    traits: ["Intense", "Passionate", "Mysterious", "Jealous"],
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    symbol: "♐",
    element: "Fire",
    dates: "Nov 22 - Dec 21",
    traits: ["Adventurous", "Optimistic", "Philosophical", "Restless"],
  },
  {
    id: "capricorn",
    name: "Capricorn",
    symbol: "♑",
    element: "Earth",
    dates: "Dec 22 - Jan 19",
    traits: ["Ambitious", "Disciplined", "Practical", "Pessimistic"],
  },
  {
    id: "aquarius",
    name: "Aquarius",
    symbol: "♒",
    element: "Air",
    dates: "Jan 20 - Feb 18",
    traits: ["Independent", "Innovative", "Humanitarian", "Detached"],
  },
  {
    id: "pisces",
    name: "Pisces",
    symbol: "♓",
    element: "Water",
    dates: "Feb 19 - Mar 20",
    traits: ["Intuitive", "Compassionate", "Artistic", "Escapist"],
  },
]

// Compatibility matrix - simplified for demo
const compatibilityMatrix: Record<string, Record<string, Compatibility>> = {
  aries: {
    aries: {
      overall: 85,
      love: 80,
      friendship: 90,
      communication: 85,
      emotional: 75,
      professional: 85,
      description:
        "Two Aries together create a dynamic and energetic partnership. Both share similar drives and ambitions, making them understand each other's need for independence and adventure.",
      strengths: ["High energy and enthusiasm", "Mutual understanding of independence", "Shared love for adventure"],
      challenges: ["Both can be impulsive", "Competition between partners", "Need to learn compromise"],
    },
    leo: {
      overall: 92,
      love: 95,
      friendship: 88,
      communication: 90,
      emotional: 85,
      professional: 95,
      description:
        "Aries and Leo form a powerful fire sign combination. Both are confident, passionate, and love to be in the spotlight, creating a dynamic and exciting relationship.",
      strengths: [
        "Natural chemistry and attraction",
        "Shared confidence and ambition",
        "Mutual respect and admiration",
      ],
      challenges: ["Both want to lead", "Ego clashes possible", "Need to share the spotlight"],
    },
    cancer: {
      overall: 65,
      love: 70,
      friendship: 60,
      communication: 65,
      emotional: 55,
      professional: 70,
      description:
        "Aries and Cancer have different approaches to life. Aries is direct and impulsive while Cancer is emotional and nurturing, requiring patience and understanding.",
      strengths: ["Aries brings excitement to Cancer", "Cancer provides emotional depth", "Complementary strengths"],
      challenges: [
        "Different communication styles",
        "Aries may seem insensitive",
        "Cancer's moodiness vs Aries' directness",
      ],
    },
  },
  leo: {
    leo: {
      overall: 88,
      love: 90,
      friendship: 85,
      communication: 90,
      emotional: 80,
      professional: 90,
      description:
        "Two Leos together create a magnificent and dramatic partnership. Both understand the need for attention and appreciation, creating a relationship full of passion and creativity.",
      strengths: ["Mutual admiration and respect", "Shared love for luxury and drama", "Strong physical attraction"],
      challenges: ["Competition for attention", "Both want to be the star", "Pride can cause conflicts"],
    },
    aries: {
      overall: 92,
      love: 95,
      friendship: 88,
      communication: 90,
      emotional: 85,
      professional: 95,
      description:
        "Leo and Aries form a powerful fire sign combination. Both are confident, passionate, and love to be in the spotlight, creating a dynamic and exciting relationship.",
      strengths: [
        "Natural chemistry and attraction",
        "Shared confidence and ambition",
        "Mutual respect and admiration",
      ],
      challenges: ["Both want to lead", "Ego clashes possible", "Need to share the spotlight"],
    },
  },
}

export function getCompatibility(sign1: string, sign2: string): Compatibility | null {
  // Check direct match
  if (compatibilityMatrix[sign1]?.[sign2]) {
    return compatibilityMatrix[sign1][sign2]
  }

  // Check reverse match
  if (compatibilityMatrix[sign2]?.[sign1]) {
    return compatibilityMatrix[sign2][sign1]
  }

  // Generate default compatibility for demo
  const elements = {
    aries: "fire",
    taurus: "earth",
    gemini: "air",
    cancer: "water",
    leo: "fire",
    virgo: "earth",
    libra: "air",
    scorpio: "water",
    sagittarius: "fire",
    capricorn: "earth",
    aquarius: "air",
    pisces: "water",
  }

  const element1 = elements[sign1 as keyof typeof elements]
  const element2 = elements[sign2 as keyof typeof elements]

  let baseScore = 70
  if (element1 === element2)
    baseScore = 85 // Same element
  else if (
    (element1 === "fire" && element2 === "air") ||
    (element1 === "air" && element2 === "fire") ||
    (element1 === "earth" && element2 === "water") ||
    (element1 === "water" && element2 === "earth")
  )
    baseScore = 80 // Compatible elements

  return {
    overall: baseScore,
    love: baseScore + Math.floor(Math.random() * 20) - 10,
    friendship: baseScore + Math.floor(Math.random() * 20) - 10,
    communication: baseScore + Math.floor(Math.random() * 20) - 10,
    emotional: baseScore + Math.floor(Math.random() * 20) - 10,
    professional: baseScore + Math.floor(Math.random() * 20) - 10,
    description: `${zodiacSigns.find((z) => z.id === sign1)?.name} and ${zodiacSigns.find((z) => z.id === sign2)?.name} share a ${baseScore >= 80 ? "strong" : "moderate"} compatibility. Their ${element1} and ${element2} elements create an interesting dynamic that requires understanding and patience.`,
    strengths: ["Complementary personality traits", "Potential for growth together", "Unique perspectives on life"],
    challenges: [
      "Different approaches to life",
      "Need for patience and understanding",
      "Communication style differences",
    ],
  }
}

export function getHoroscope(sign: string, period: string): Horoscope {
  const horoscopes = {
    today: {
      general:
        "Today brings new opportunities for growth and self-discovery. The stars align to support your natural talents and encourage you to step out of your comfort zone.",
      love: "Romance is in the air today. Single? Keep your eyes open for unexpected connections. Partnered? It's a perfect day for intimate conversations.",
      career:
        "Your professional life takes center stage today. A project you've been working on may finally get the recognition it deserves.",
      health:
        "Pay attention to your body's signals today. A balanced approach to diet and exercise will serve you well.",
    },
    week: {
      general:
        "This week promises significant developments in your personal and professional life. Trust your instincts and don't be afraid to take calculated risks.",
      love: "The middle of the week brings clarity to relationship matters. Important conversations may lead to deeper understanding.",
      career:
        "Professional opportunities multiply this week. Your leadership skills will be particularly valuable around Wednesday.",
      health: "Focus on stress management this week. Meditation or yoga could provide the balance you need.",
    },
    month: {
      general:
        "This month marks a period of transformation and renewal. Old patterns give way to new possibilities as you embrace change.",
      love: "Relationships undergo positive changes this month. Whether single or partnered, expect meaningful developments.",
      career: "Career advancement is highlighted this month. Your hard work begins to pay off in tangible ways.",
      health: "A holistic approach to health serves you well this month. Consider both physical and mental wellness.",
    },
  }

  const selectedHoroscope = horoscopes[period as keyof typeof horoscopes] || horoscopes.today

  return {
    ...selectedHoroscope,
    luckyNumbers: [
      Math.floor(Math.random() * 50) + 1,
      Math.floor(Math.random() * 50) + 1,
      Math.floor(Math.random() * 50) + 1,
    ],
    luckyColors: ["Purple", "Gold", "Silver"].sort(() => Math.random() - 0.5).slice(0, 2),
  }
}
