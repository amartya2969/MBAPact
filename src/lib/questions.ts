import { Question, LogisticsQuestion } from "./types";
import { CITY_OPTIONS, CAREER_OPTIONS, SUNDAY_OPTIONS } from "./constants";

export const PSYCHOMETRIC_QUESTIONS: Question[] = [
  // ===== CONSCIENTIOUSNESS (1-4) — "Operations & Planning" =====
  {
    id: 1,
    dimension: "conscientiousness",
    category: "Operations & Planning",
    text: "When planning a vacation with your partner, you...",
    options: [
      { text: "Create a detailed day-by-day itinerary with reservations and backup plans", score: 4 },
      { text: "Research thoroughly but leave room for spontaneous changes", score: 3 },
      { text: "Have a rough outline with a few must-do activities", score: 2 },
      { text: "Book flights and figure the rest out when you land", score: 1 },
    ],
  },
  {
    id: 2,
    dimension: "conscientiousness",
    category: "Operations & Planning",
    text: "Your approach to career ambitions is best described as...",
    options: [
      { text: "I have a 5-year plan with quarterly milestones and review it regularly", score: 4 },
      { text: "I set annual goals and adjust them as opportunities arise", score: 3 },
      { text: "I have a general direction but stay open to unexpected pivots", score: 2 },
      { text: "I trust the process — the right opportunities find me when I'm ready", score: 1 },
    ],
  },
  {
    id: 3,
    dimension: "conscientiousness",
    category: "Operations & Planning",
    text: "In a shared living space, you...",
    options: [
      { text: "Have a cleaning schedule, labeled shelves, and never let dishes sit overnight", score: 4 },
      { text: "Keep common areas tidy but your personal space has 'organized chaos'", score: 3 },
      { text: "Clean when it starts to bother you, usually a big weekend session", score: 2 },
      { text: "Have a higher mess tolerance — life's too short for label makers", score: 1 },
    ],
  },
  {
    id: 4,
    dimension: "conscientiousness",
    category: "Operations & Planning",
    text: "When facing a tough work challenge, your first instinct is to...",
    options: [
      { text: "Break it into smaller tasks, set deadlines for each, and systematically execute", score: 4 },
      { text: "Research how others solved similar problems before building your approach", score: 3 },
      { text: "Dive in and iterate — you learn best by doing, not planning", score: 2 },
      { text: "Talk it through with someone — collaboration sparks your best thinking", score: 1 },
    ],
  },

  // ===== OPENNESS (5-8) — "Risk Appetite & Innovation" =====
  {
    id: 5,
    dimension: "openness",
    category: "Risk Appetite & Innovation",
    text: "Your ideal weekend involves...",
    options: [
      { text: "Exploring a new neighborhood, exhibit, or restaurant you've never tried", score: 4 },
      { text: "A mix of something new and something familiar — new brunch spot, then your favorite park", score: 3 },
      { text: "Your go-to routine with your favorite people at your favorite places", score: 2 },
      { text: "Recharging at home — you expend enough novelty energy during the work week", score: 1 },
    ],
  },
  {
    id: 6,
    dimension: "openness",
    category: "Risk Appetite & Innovation",
    text: "If you were building an investment portfolio, you'd lean toward...",
    options: [
      { text: "Heavy allocation to venture, crypto, and emerging markets — high risk, high reward", score: 4 },
      { text: "Diversified with a meaningful allocation to growth and alternative assets", score: 3 },
      { text: "Mostly index funds and blue chips with a small 'play money' allocation", score: 2 },
      { text: "Capital preservation first — bonds, treasuries, and sleeping well at night", score: 1 },
    ],
  },
  {
    id: 7,
    dimension: "openness",
    category: "Risk Appetite & Innovation",
    text: "In professional settings, you are most energized by...",
    options: [
      { text: "Ambiguous, greenfield problems where you build the framework from scratch", score: 4 },
      { text: "Improving existing processes — finding the 10x unlock in something that already works", score: 3 },
      { text: "Executing a well-defined playbook with clear metrics and expectations", score: 2 },
      { text: "Maintaining stability and ensuring operational excellence in your domain", score: 1 },
    ],
  },
  {
    id: 8,
    dimension: "openness",
    category: "Risk Appetite & Innovation",
    text: "Regarding travel and life experiences, you believe...",
    options: [
      { text: "You should say yes to everything — sleep when you're dead, collect passport stamps now", score: 4 },
      { text: "Depth over breadth — you'd rather spend a month in one country than speed through ten", score: 3 },
      { text: "Travel is great but overhyped — some of the best experiences are close to home", score: 2 },
      { text: "You prefer familiar destinations where you know what to expect and can truly relax", score: 1 },
    ],
  },

  // ===== EXTRAVERSION (9-12) — "Network & Social Capital" =====
  {
    id: 9,
    dimension: "extraversion",
    category: "Network & Social Capital",
    text: "After a long work week, you most look forward to...",
    options: [
      { text: "A packed Friday night — dinner party, bars, spontaneous after-party", score: 4 },
      { text: "Drinks or dinner with a small group of close friends", score: 3 },
      { text: "A quiet evening with your partner or one close friend", score: 2 },
      { text: "Solo time — workout, good book, your own recharge ritual", score: 1 },
    ],
  },
  {
    id: 10,
    dimension: "extraversion",
    category: "Network & Social Capital",
    text: "Your ideal professional network is best described as...",
    options: [
      { text: "Massive and diverse — you know someone in every industry and city", score: 4 },
      { text: "Broad but with intentional deep relationships in key areas", score: 3 },
      { text: "Tight-knit — a smaller circle of people you truly trust", score: 2 },
      { text: "Minimal but high-quality — a few mentors and peers who really get you", score: 1 },
    ],
  },
  {
    id: 11,
    dimension: "extraversion",
    category: "Network & Social Capital",
    text: "At a networking event or large party, you typically...",
    options: [
      { text: "Work the room — introduce yourself to everyone and leave with 20 new contacts", score: 4 },
      { text: "Seek out 3-4 interesting conversations and go deep", score: 3 },
      { text: "Stick with people you already know but are open if approached", score: 2 },
      { text: "Find one person having a real conversation and talk to them all night", score: 1 },
    ],
  },
  {
    id: 12,
    dimension: "extraversion",
    category: "Network & Social Capital",
    text: "Your ideal partner's social style is...",
    options: [
      { text: "The life of the party — you want a power couple who commands every room", score: 4 },
      { text: "Socially confident and charming, but also happy with a quiet night in", score: 3 },
      { text: "More introverted — you like being the social one in the relationship", score: 2 },
      { text: "It doesn't matter as long as you deeply enjoy each other's company", score: 1 },
    ],
  },

  // ===== AGREEABLENESS (13-16) — "Negotiation & Conflict Resolution" =====
  {
    id: 13,
    dimension: "agreeableness",
    category: "Negotiation & Conflict",
    text: "When you disagree with your partner on something important, you...",
    options: [
      { text: "Prioritize harmony — you'll compromise or let it go to keep the peace", score: 4 },
      { text: "Listen fully to their side first, then share your perspective calmly", score: 3 },
      { text: "State your position clearly and expect a structured discussion to resolution", score: 2 },
      { text: "Stand firm on your view — you respect yourself too much to cave on what matters", score: 1 },
    ],
  },
  {
    id: 14,
    dimension: "agreeableness",
    category: "Negotiation & Conflict",
    text: "In team dynamics at work, you are typically the person who...",
    options: [
      { text: "Ensures everyone feels heard and mediates between conflicting viewpoints", score: 4 },
      { text: "Builds consensus by finding common ground between different ideas", score: 3 },
      { text: "Pushes for the best idea regardless of whose feelings might get bruised", score: 2 },
      { text: "Leads with your own strong vision and expects others to align or push back", score: 1 },
    ],
  },
  {
    id: 15,
    dimension: "agreeableness",
    category: "Negotiation & Conflict",
    text: "When someone criticizes your work or ideas, your natural reaction is to...",
    options: [
      { text: "Thank them genuinely — all feedback is a gift and helps you grow", score: 4 },
      { text: "Consider it objectively, take what's useful, and discard the rest", score: 3 },
      { text: "Defend your work but acknowledge valid points if they exist", score: 2 },
      { text: "Feel frustrated initially — you put a lot into your work and criticism stings", score: 1 },
    ],
  },
  {
    id: 16,
    dimension: "agreeableness",
    category: "Negotiation & Conflict",
    text: "Your approach to compromise in relationships is...",
    options: [
      { text: "Happy to give more than you take — your partner's happiness is your happiness", score: 4 },
      { text: "Aim for 50/50 on most things, with occasional give-and-take flexibility", score: 3 },
      { text: "Compromise on logistics, but never on values or things that define you", score: 2 },
      { text: "You compromise when the data supports it, not just to smooth things over", score: 1 },
    ],
  },

  // ===== EMOTIONAL STABILITY (17-20) — "Volatility & Risk Management" =====
  {
    id: 17,
    dimension: "emotionalStability",
    category: "Volatility & Risk Mgmt",
    text: "When facing financial uncertainty (job loss, market crash, unexpected expense), you...",
    options: [
      { text: "Stay calm and execute your contingency plan — you've stress-tested for this", score: 4 },
      { text: "Feel anxious briefly, then shift into problem-solving mode within a day", score: 3 },
      { text: "Worry significantly but keep functioning — the stress motivates you to act", score: 2 },
      { text: "It consumes you — financial stress is the hardest thing for you to manage", score: 1 },
    ],
  },
  {
    id: 18,
    dimension: "emotionalStability",
    category: "Volatility & Risk Mgmt",
    text: "Your natural response to relationship conflict is...",
    options: [
      { text: "Discuss it calmly as soon as possible — unresolved tension bothers you more than the conversation", score: 4 },
      { text: "Take a few hours to cool down, then initiate a thoughtful conversation", score: 3 },
      { text: "Withdraw and process internally — you need space before you can talk", score: 2 },
      { text: "It spirals in your head — you replay scenarios and struggle to let things go", score: 1 },
    ],
  },
  {
    id: 19,
    dimension: "emotionalStability",
    category: "Volatility & Risk Mgmt",
    text: "Under significant work stress (big deadline, difficult manager, high stakes), you...",
    options: [
      { text: "Thrive — pressure is your performance enhancer and you do your best work under fire", score: 4 },
      { text: "Manage it well with intentional habits — gym, sleep hygiene, boundaries", score: 3 },
      { text: "Push through but it visibly affects your mood, sleep, or relationships", score: 2 },
      { text: "Burn out if it lasts too long — you need balance to function at your best", score: 1 },
    ],
  },
  {
    id: 20,
    dimension: "emotionalStability",
    category: "Volatility & Risk Mgmt",
    text: "When you experience a major failure or setback, you...",
    options: [
      { text: "Post-mortem it, extract the lessons, and move forward within days", score: 4 },
      { text: "Feel disappointed but reframe it as redirection — things happen for a reason", score: 3 },
      { text: "Dwell on it for a while and need external validation to rebuild confidence", score: 2 },
      { text: "Take it very personally — failure hits your identity and takes a long time to recover from", score: 1 },
    ],
  },
];

export const LOGISTICS_QUESTIONS: LogisticsQuestion[] = [
  {
    id: "city",
    category: "Logistics",
    text: "Where are you headed post-MBA (or this summer)?",
    options: CITY_OPTIONS,
  },
  {
    id: "career",
    category: "Logistics",
    text: "What's your target career trajectory?",
    options: CAREER_OPTIONS,
  },
  {
    id: "sunday",
    category: "Lifestyle",
    text: "It's 2 PM on a Sunday. What's the vibe?",
    options: SUNDAY_OPTIONS,
  },
];
