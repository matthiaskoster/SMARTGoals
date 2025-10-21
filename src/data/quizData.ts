import type { QuizData } from '../types/quiz.types';

export const quizData: QuizData = {
  title: "SMART Goals Adventure",
  description: "Learn to set SMART goals through interactive scenarios!",
  startNodeId: "intro",
  nodes: {
    intro: {
      id: "intro",
      scenario: "Welcome to the SMART Goals Adventure!",
      question: "You're about to learn how to set goals that actually work. SMART goals are:\n\n• Specific - Clear and well-defined\n• Measurable - You can track your progress\n• Achievable - Challenging but possible\n• Relevant - Matters to you\n• Time-bound - Has a deadline\n\nChoose your adventure:",
      category: "academic",
      choices: [
        {
          id: "choose-academic",
          text: "Help me improve my grades in math",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Great choice! Let's explore how to set SMART academic goals.",
          nextNodeId: "academic-1",
          score: 0
        },
        {
          id: "choose-athletic",
          text: "I want to get better at basketball",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Awesome! Athletic goals are perfect for practicing SMART goal-setting.",
          nextNodeId: "athletic-1",
          score: 0
        },
        {
          id: "choose-creative",
          text: "I'd like to learn guitar",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Cool! Let's set a SMART goal for your creative journey.",
          nextNodeId: "creative-1",
          score: 0
        },
        {
          id: "choose-social",
          text: "I want to make new friends",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "That's important! Let's create a SMART goal for building friendships.",
          nextNodeId: "social-1",
          score: 0
        }
      ]
    },

    // ACADEMIC PATH
    "academic-1": {
      id: "academic-1",
      scenario: "Math Class Challenge",
      question: "You currently have a 70% in math class and want to improve. Your teacher offers extra help sessions twice a week. The semester ends in 8 weeks.\n\nHow would you set your goal?",
      context: "Remember: A SMART goal should be Specific, Measurable, Achievable, Relevant, and Time-bound!",
      category: "academic",
      choices: [
        {
          id: "vague-goal",
          text: "I want to be better at math",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "This goal is relevant and achievable, but it's too vague. What does 'better' mean? When will you achieve it? Try to be more specific!",
          nextNodeId: "academic-2",
          score: 2
        },
        {
          id: "too-ambitious",
          text: "I'll get 100% on every test from now on",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: true, timeBound: false },
          feedback: "This goal is specific and measurable, but might not be achievable if you're currently at 70%. Also, when is 'from now on'? Setting realistic goals is important!",
          nextNodeId: "academic-2",
          score: 3
        },
        {
          id: "smart-goal",
          text: "I will raise my math grade to 80% by the end of the semester by attending extra help sessions twice a week and completing all homework",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Excellent! This is a SMART goal! It's Specific (80% grade), Measurable (you can track your grade), Achievable (10% improvement with extra help), Relevant (matters to you), and Time-bound (end of semester). You also included action steps!",
          nextNodeId: "academic-2",
          score: 10
        }
      ]
    },

    "academic-2": {
      id: "academic-2",
      scenario: "Action Steps",
      question: "You've set your math goal! Now you need to create an action plan. Your friend suggests different strategies.\n\nWhich approach follows SMART principles best?",
      category: "academic",
      choices: [
        {
          id: "no-plan",
          text: "Just study harder whenever I have time",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "This lacks structure. 'Whenever I have time' isn't specific or measurable. You need a clear plan to track your progress!",
          nextNodeId: "final",
          score: 1
        },
        {
          id: "good-plan",
          text: "Study for 30 minutes every Monday and Wednesday, attend both extra help sessions weekly, and review mistakes from each quiz within 24 hours",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Perfect! This action plan is SMART! It has specific times (Monday/Wednesday), measurable activities (30 mins, 2 sessions), and is achievable. Great job!",
          nextNodeId: "final",
          score: 10
        },
        {
          id: "over-commit",
          text: "Study math 4 hours every day, memorize the entire textbook, and get a tutor for every subject",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: false, timeBound: false },
          feedback: "This is too ambitious and not focused! 4 hours daily isn't realistic for most students, and focusing on other subjects doesn't help your math goal. Remember: achievable and relevant!",
          nextNodeId: "final",
          score: 3
        }
      ]
    },

    // ATHLETIC PATH
    "athletic-1": {
      id: "athletic-1",
      scenario: "Basketball Skills",
      question: "You love basketball but struggle with free throws. You currently make about 3 out of 10. Your school has an open gym Monday through Friday after school. Your next game is in 6 weeks.\n\nWhat goal would you set?",
      context: "Think SMART: What's specific, measurable, achievable, relevant, and time-bound?",
      category: "athletic",
      choices: [
        {
          id: "vague-sports",
          text: "I want to be really good at free throws",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "This goal is relevant but too vague. What does 'really good' mean? How will you know when you've achieved it? When do you want to achieve this?",
          nextNodeId: "athletic-2",
          score: 2
        },
        {
          id: "unrealistic-sports",
          text: "I'll make 100% of my free throws by next week",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: true, timeBound: true },
          feedback: "This is specific, measurable, and time-bound, but going from 30% to 100% in one week isn't achievable. Set yourself up for success with realistic goals!",
          nextNodeId: "athletic-2",
          score: 4
        },
        {
          id: "smart-sports",
          text: "I will improve my free throw accuracy from 3/10 to 7/10 within 6 weeks by practicing 50 free throws at the open gym 4 days per week",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Outstanding SMART goal! You specified your current (3/10) and target (7/10), made it measurable, set a realistic timeframe (6 weeks), and included specific actions (50 throws, 4 days/week)!",
          nextNodeId: "athletic-2",
          score: 10
        }
      ]
    },

    "athletic-2": {
      id: "athletic-2",
      scenario: "Tracking Progress",
      question: "You've started practicing! After 2 weeks, you're making 4 out of 10 free throws. How should you track your progress to stay motivated?",
      category: "athletic",
      choices: [
        {
          id: "no-tracking",
          text: "Just keep practicing and see what happens",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Without tracking, you won't know if you're improving! Measuring progress is a key part of SMART goals.",
          nextNodeId: "final",
          score: 1
        },
        {
          id: "smart-tracking",
          text: "Keep a log of each practice session recording makes/attempts, calculate weekly averages, and adjust practice if not improving by at least 5% every 2 weeks",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Excellent! This tracking system is SMART! You're measuring specific data (makes/attempts), reviewing regularly (weekly), and have checkpoints (5% every 2 weeks) to adjust if needed. This is how you ensure success!",
          nextNodeId: "final",
          score: 10
        },
        {
          id: "overthink",
          text: "Film every shot from 5 angles, create detailed statistical analysis, hire a professional coach, and practice 6 hours daily",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: false, timeBound: false },
          feedback: "This is overcomplicating things and not achievable for most students. Good tracking should be simple, consistent, and sustainable!",
          nextNodeId: "final",
          score: 3
        }
      ]
    },

    // CREATIVE PATH
    "creative-1": {
      id: "creative-1",
      scenario: "Learning Guitar",
      question: "You got a guitar for your birthday and want to learn to play. You found free online tutorials. Your school talent show is in 3 months.\n\nWhat's your goal?",
      context: "Remember to make it SMART!",
      category: "creative",
      choices: [
        {
          id: "vague-creative",
          text: "I want to get good at guitar",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "This goal is too vague. What does 'good' mean? How will you measure progress? When do you want to achieve this?",
          nextNodeId: "creative-2",
          score: 2
        },
        {
          id: "unrealistic-creative",
          text: "I'll become a guitar master and perform a 30-minute concert next week",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: true, timeBound: true },
          feedback: "This goal isn't achievable for a beginner in one week! Learning an instrument takes time. Set realistic milestones!",
          nextNodeId: "creative-2",
          score: 3
        },
        {
          id: "smart-creative",
          text: "I will learn to play 3 simple songs well enough to perform at the talent show in 3 months by practicing 30 minutes daily and completing one tutorial lesson per week",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Perfect SMART goal! You specified exactly what (3 songs), when (3 months/talent show), and how (30 min daily, 1 lesson weekly). This is achievable and measurable!",
          nextNodeId: "creative-2",
          score: 10
        }
      ]
    },

    "creative-2": {
      id: "creative-2",
      scenario: "Practice Challenges",
      question: "Week 4: You've learned 2 simple songs but hit a difficult chord. You're getting frustrated and want to give up.\n\nWhat's the SMART approach to this challenge?",
      category: "creative",
      choices: [
        {
          id: "give-up",
          text: "Quit guitar - maybe it's not for me",
          smartCriteria: { specific: false, measurable: false, achievable: false, relevant: false, timeBound: false },
          feedback: "Don't give up! Part of SMART goals is making them achievable by breaking down challenges. One difficult chord doesn't mean you should quit!",
          nextNodeId: "final",
          score: 0
        },
        {
          id: "smart-adjust",
          text: "Spend an extra 10 minutes daily just on this chord for one week, watch specific tutorials for this technique, and ask for help in online guitar forums",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Excellent! You created a mini SMART goal to overcome a specific challenge! This shows you understand how to adjust your plan while staying focused on your main goal. Great problem-solving!",
          nextNodeId: "final",
          score: 10
        },
        {
          id: "avoid",
          text: "Skip this song and find easier ones instead",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: false, timeBound: false },
          feedback: "While this might feel easier, avoiding challenges won't help you grow. A SMART approach is to break down the difficult part into smaller, achievable steps!",
          nextNodeId: "final",
          score: 4
        }
      ]
    },

    // SOCIAL PATH
    "social-1": {
      id: "social-1",
      scenario: "Making Friends",
      question: "You recently moved to a new school and want to make friends. You notice groups forming around clubs and sports. There's a club fair next week and lunch periods are 40 minutes.\n\nWhat's your goal?",
      context: "Think about what's SMART and realistic for building friendships.",
      category: "social",
      choices: [
        {
          id: "vague-social",
          text: "I want to be popular and have lots of friends",
          smartCriteria: { specific: false, measurable: false, achievable: false, relevant: true, timeBound: false },
          feedback: "This goal is too vague. What does 'popular' mean? How many friends? Quality friendships are better than chasing popularity. Try being more specific!",
          nextNodeId: "social-2",
          score: 2
        },
        {
          id: "too-fast-social",
          text: "I'll make 20 best friends by the end of the week",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: true, timeBound: true },
          feedback: "Real friendships take time to develop! This goal isn't achievable in one week. SMART goals should be realistic!",
          nextNodeId: "social-2",
          score: 3
        },
        {
          id: "smart-social",
          text: "I will join 2 clubs that interest me at the club fair, attend all meetings for 2 months, and aim to have 3 conversations with different people at each meeting",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Excellent SMART goal! You specified actions (2 clubs, 3 conversations), made it measurable (can count conversations and meetings), set a timeframe (2 months), and it's achievable. Friendships will grow naturally from consistent interaction!",
          nextNodeId: "social-2",
          score: 10
        }
      ]
    },

    "social-2": {
      id: "social-2",
      scenario: "Building Connections",
      question: "You joined the robotics club and art club. After 3 weeks, you've had some nice conversations but haven't hung out with anyone outside of meetings.\n\nWhat's the SMART next step?",
      category: "social",
      choices: [
        {
          id: "wait-social",
          text: "Just keep going to meetings and hope someone invites me",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "While continuing to attend is good, being passive won't help achieve your goal. SMART goals require specific actions!",
          nextNodeId: "final",
          score: 3
        },
        {
          id: "smart-social-2",
          text: "Over the next 2 weeks, invite 2 people from the clubs to work on homework together in the library or grab lunch, once per week",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Perfect! This is a SMART mini-goal! It's specific (homework/lunch), measurable (2 people, once weekly), achievable (low-pressure activities), relevant (builds friendships), and time-bound (2 weeks). Taking initiative with small, comfortable steps is great!",
          nextNodeId: "final",
          score: 10
        },
        {
          id: "too-much-social",
          text: "Invite everyone from both clubs to a huge party at my house this weekend",
          smartCriteria: { specific: true, measurable: false, achievable: false, relevant: false, timeBound: true },
          feedback: "This might be overwhelming and unrealistic! Building friendships works better with smaller, more personal interactions first. This also might not be achievable if you're new!",
          nextNodeId: "final",
          score: 2
        }
      ]
    },

    // FINAL NODE
    final: {
      id: "final",
      scenario: "Congratulations!",
      question: "You've completed the SMART Goals Adventure! Check your results below.",
      category: "academic",
      choices: []
    }
  }
};
