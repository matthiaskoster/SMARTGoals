export interface SMARTCriteria {
  specific: boolean;
  measurable: boolean;
  achievable: boolean;
  relevant: boolean;
  timeBound: boolean;
}

export interface Choice {
  id: string;
  text: string;
  smartCriteria: SMARTCriteria;
  feedback: string;
  nextNodeId: string | null; // null means end of quiz
  score: number; // Points awarded for this choice
}

export interface StoryNode {
  id: string;
  scenario: string;
  question: string;
  context?: string; // Additional context or flavor text
  choices: Choice[];
  category: 'academic' | 'athletic' | 'creative' | 'social';
}

export interface QuizProgress {
  currentNodeId: string;
  totalScore: number;
  maxScore: number;
  path: string[]; // Track which nodes were visited
  choicesMade: {
    nodeId: string;
    choiceId: string;
    timestamp: number;
  }[];
}

export interface QuizData {
  title: string;
  description: string;
  startNodeId: string;
  nodes: Record<string, StoryNode>;
}
