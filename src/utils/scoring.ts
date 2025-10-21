import type { SMARTCriteria } from '../types/quiz.types';

export const calculateSMARTScore = (criteria: SMARTCriteria): number => {
  const { specific, measurable, achievable, relevant, timeBound } = criteria;
  let score = 0;

  if (specific) score += 20;
  if (measurable) score += 20;
  if (achievable) score += 20;
  if (relevant) score += 20;
  if (timeBound) score += 20;

  return score;
};

export const getSMARTGrade = (totalScore: number, maxScore: number): {
  grade: string;
  message: string;
  color: string;
} => {
  const percentage = (totalScore / maxScore) * 100;

  if (percentage >= 90) {
    return {
      grade: 'A',
      message: 'Outstanding! You\'re a SMART goal master!',
      color: 'text-green-600'
    };
  } else if (percentage >= 80) {
    return {
      grade: 'B',
      message: 'Great work! You understand SMART goals well!',
      color: 'text-blue-600'
    };
  } else if (percentage >= 70) {
    return {
      grade: 'C',
      message: 'Good effort! Keep practicing SMART goal-setting!',
      color: 'text-yellow-600'
    };
  } else if (percentage >= 60) {
    return {
      grade: 'D',
      message: 'You\'re learning! Review the SMART criteria and try again!',
      color: 'text-orange-600'
    };
  } else {
    return {
      grade: 'F',
      message: 'Keep trying! Practice makes perfect!',
      color: 'text-red-600'
    };
  }
};

export const getSMARTFeedback = (criteria: SMARTCriteria): string[] => {
  const feedback: string[] = [];

  if (criteria.specific) {
    feedback.push('✓ Specific - Clear and well-defined goal');
  } else {
    feedback.push('✗ Not Specific - Goal needs more clarity');
  }

  if (criteria.measurable) {
    feedback.push('✓ Measurable - You can track progress');
  } else {
    feedback.push('✗ Not Measurable - How will you measure success?');
  }

  if (criteria.achievable) {
    feedback.push('✓ Achievable - Realistic and possible');
  } else {
    feedback.push('✗ Not Achievable - Might be too ambitious');
  }

  if (criteria.relevant) {
    feedback.push('✓ Relevant - Matters to you and your life');
  } else {
    feedback.push('✗ Not Relevant - Doesn\'t align with your goals');
  }

  if (criteria.timeBound) {
    feedback.push('✓ Time-bound - Has a clear deadline');
  } else {
    feedback.push('✗ Not Time-bound - Needs a deadline');
  }

  return feedback;
};
