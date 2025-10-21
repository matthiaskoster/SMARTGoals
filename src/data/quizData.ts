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
          text: "I want to improve my grades in math",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Great choice! Let's explore how to set SMART academic goals.",
          nextNodeId: "academic-1",
          score: 0
        },
        {
          id: "choose-vocabulary",
          text: "I want to learn 10 new English words per week",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Excellent! Building vocabulary is a perfect goal for SMART planning.",
          nextNodeId: "vocabulary-1",
          score: 0
        },
        {
          id: "choose-typing",
          text: "I want to improve my typing speed and accuracy",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Great! Typing skills are valuable and easy to measure progress on.",
          nextNodeId: "typing-1",
          score: 0
        },
        {
          id: "choose-punctuality",
          text: "I want to arrive on time to class",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Smart thinking! Punctuality is an important life skill.",
          nextNodeId: "punctuality-1",
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
          id: "choose-running",
          text: "I want to run faster",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Great choice! Running goals are highly measurable and trackable.",
          nextNodeId: "running-1",
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
          id: "choose-drawing",
          text: "I want to get better at drawing",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Wonderful! Creative skills improve with focused practice.",
          nextNodeId: "drawing-1",
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

    // VOCABULARY PATH
    "vocabulary-1": {
      id: "vocabulary-1",
      scenario: "Building Your Vocabulary",
      question: "You want to expand your English vocabulary. You have a vocabulary notebook and access to dictionary apps. You're preparing for an essay writing competition in 8 weeks.\n\nHow would you set your vocabulary goal?",
      context: "Remember: Make it SMART!",
      category: "academic",
      choices: [
        {
          id: "vague-vocab",
          text: "I want to learn lots of new words",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "This is too vague! How many is 'lots'? How will you track them? When will you achieve this?",
          nextNodeId: "vocabulary-2",
          score: 2
        },
        {
          id: "unrealistic-vocab",
          text: "I'll learn 100 new words every day starting tomorrow",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: true, timeBound: false },
          feedback: "100 words per day isn't realistic - you won't remember them all! SMART goals should be achievable and sustainable.",
          nextNodeId: "vocabulary-2",
          score: 3
        },
        {
          id: "smart-vocab",
          text: "I will learn 10 new English words per week for the next 8 weeks by studying 2 words daily Monday-Friday, using them in sentences, and reviewing them on weekends",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Perfect SMART goal! Specific (10 words/week), Measurable (you can count them), Achievable (2 words/day is realistic), Relevant (helps with writing), and Time-bound (8 weeks). Great planning!",
          nextNodeId: "vocabulary-2",
          score: 10
        }
      ]
    },

    "vocabulary-2": {
      id: "vocabulary-2",
      scenario: "Retention Strategy",
      question: "You've learned 30 new words in 3 weeks, but you're forgetting some of them. How can you make sure these words stick?",
      category: "academic",
      choices: [
        {
          id: "no-review",
          text: "Just keep learning new words and hope I remember",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: false, timeBound: false },
          feedback: "Without review, you'll forget most words! A SMART approach includes a plan for retention.",
          nextNodeId: "final",
          score: 1
        },
        {
          id: "smart-review",
          text: "Create flashcards for all words, review them 10 minutes daily, use 3 new words in my writing each day, and test myself every Friday",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Excellent! This is a SMART retention plan! Specific actions (flashcards, writing), measurable (3 words/day), achievable (10 min daily), and includes regular testing. Perfect!",
          nextNodeId: "final",
          score: 10
        },
        {
          id: "overwhelming-review",
          text: "Write each word 100 times, memorize the entire dictionary, and read 5 novels this week",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: false, timeBound: true },
          feedback: "This is overwhelming and not achievable! SMART goals should be realistic and focused on what truly helps.",
          nextNodeId: "final",
          score: 2
        }
      ]
    },

    // TYPING PATH
    "typing-1": {
      id: "typing-1",
      scenario: "Keyboard Skills",
      question: "You currently type at 25 words per minute (WPM) with about 85% accuracy. You have access to typing practice websites. Your school starts requiring typed assignments next quarter (10 weeks).\n\nWhat's your typing goal?",
      context: "Think SMART: Specific, Measurable, Achievable, Relevant, Time-bound",
      category: "academic",
      choices: [
        {
          id: "vague-typing",
          text: "I want to type faster",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Too vague! How much faster? How will you measure improvement? Set specific targets!",
          nextNodeId: "typing-2",
          score: 2
        },
        {
          id: "unrealistic-typing",
          text: "I'll type 120 WPM by next week",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: true, timeBound: true },
          feedback: "Going from 25 to 120 WPM in one week isn't achievable! Set realistic increments.",
          nextNodeId: "typing-2",
          score: 3
        },
        {
          id: "smart-typing",
          text: "I will improve my typing speed from 25 to 40 WPM while maintaining 95% accuracy within 10 weeks by practicing 15 minutes daily on typing websites",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Outstanding SMART goal! Specific metrics (25→40 WPM, 95% accuracy), measurable, realistic improvement, relevant to your needs, clear deadline, and specific practice plan!",
          nextNodeId: "typing-2",
          score: 10
        }
      ]
    },

    "typing-2": {
      id: "typing-2",
      scenario: "Building the Habit",
      question: "You've been practicing for 2 weeks and improved to 30 WPM! But you keep forgetting to practice. How do you stay consistent?",
      category: "academic",
      choices: [
        {
          id: "random-practice",
          text: "Practice whenever I remember",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Random practice won't build a habit! SMART goals need specific timing and structure.",
          nextNodeId: "final",
          score: 1
        },
        {
          id: "smart-habit",
          text: "Practice every day right after lunch for 15 minutes, track progress weekly in a spreadsheet, and set a phone reminder at 12:30 PM",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Perfect SMART habit-building! Specific time (after lunch), measurable tracking (spreadsheet), achievable duration (15 min), with accountability (reminder). This ensures consistency!",
          nextNodeId: "final",
          score: 10
        },
        {
          id: "excessive-practice",
          text: "Practice for 5 hours every day and type everything I do",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: false, timeBound: false },
          feedback: "This is excessive and will lead to burnout! SMART goals should be sustainable.",
          nextNodeId: "final",
          score: 2
        }
      ]
    },

    // PUNCTUALITY PATH
    "punctuality-1": {
      id: "punctuality-1",
      scenario: "Arriving On Time",
      question: "You're often 5-10 minutes late to your first class. It's a 15-minute walk from home, and class starts at 8:00 AM. You want to change this habit.\n\nWhat's your goal?",
      context: "Make it SMART!",
      category: "academic",
      choices: [
        {
          id: "vague-time",
          text: "I want to be on time more often",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "'More often' isn't specific enough! How often? What's your target? Be precise!",
          nextNodeId: "punctuality-2",
          score: 2
        },
        {
          id: "unrealistic-time",
          text: "I'll arrive 30 minutes early to every class starting tomorrow",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: false, timeBound: true },
          feedback: "30 minutes early might not be sustainable or necessary. SMART goals should be realistic and relevant!",
          nextNodeId: "punctuality-2",
          score: 3
        },
        {
          id: "smart-time",
          text: "I will arrive to first period at least 5 minutes early every day for the next 4 weeks by leaving home at 7:35 AM and setting two alarms at 7:00 and 7:20 AM",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Excellent SMART goal! Specific (5 min early), measurable (can track daily), achievable (realistic buffer time), relevant (improves punctuality), time-bound (4 weeks), with clear action steps (leave 7:35, set alarms)!",
          nextNodeId: "punctuality-2",
          score: 10
        }
      ]
    },

    "punctuality-2": {
      id: "punctuality-2",
      scenario: "Staying Consistent",
      question: "After 2 weeks, you've been on time 12 out of 14 days! But mornings are still hard. How do you maintain this success?",
      category: "academic",
      choices: [
        {
          id: "no-system",
          text: "Keep doing what I'm doing and hope it continues",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Hope isn't a strategy! SMART goals need specific systems to maintain success.",
          nextNodeId: "final",
          score: 2
        },
        {
          id: "smart-system",
          text: "Prepare everything the night before (pack bag, pick clothes), keep a weekly punctuality tracker, and go to bed by 10 PM on school nights",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Perfect SMART system! Specific preparation steps, measurable tracking, achievable routines, all relevant to punctuality. This creates lasting habits!",
          nextNodeId: "final",
          score: 10
        },
        {
          id: "extreme-system",
          text: "Wake up at 5 AM, arrive to school at 6:30 AM, never do anything in the evening",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: false, timeBound: false },
          feedback: "This is extreme and unsustainable! SMART goals should improve your life, not make it harder.",
          nextNodeId: "final",
          score: 1
        }
      ]
    },

    // RUNNING PATH
    "running-1": {
      id: "running-1",
      scenario: "Running Faster",
      question: "You currently run a mile in 10 minutes. There's a school track available after school. You have a fun run event in 8 weeks and want to improve your time.\n\nWhat's your running goal?",
      context: "Remember SMART principles!",
      category: "athletic",
      choices: [
        {
          id: "vague-running",
          text: "I want to run faster",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "Too vague! How much faster? How will you measure it? When?",
          nextNodeId: "running-2",
          score: 2
        },
        {
          id: "unrealistic-running",
          text: "I'll run a 5-minute mile by next week",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: true, timeBound: true },
          feedback: "Cutting your time in half in one week isn't achievable! Set realistic improvements.",
          nextNodeId: "running-2",
          score: 3
        },
        {
          id: "smart-running",
          text: "I will improve my mile time from 10 minutes to 8:30 within 8 weeks by running 3 times per week and doing interval training twice weekly",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Excellent SMART goal! Specific target (8:30), measurable (can time yourself), achievable (1.5 min improvement over 8 weeks), relevant (prepares for fun run), with specific training plan!",
          nextNodeId: "running-2",
          score: 10
        }
      ]
    },

    "running-2": {
      id: "running-2",
      scenario: "Training Plan",
      question: "You've been running for 3 weeks and your time is now 9:15. You want to keep improving safely. What's the SMART approach?",
      category: "athletic",
      choices: [
        {
          id: "no-plan-running",
          text: "Just run as fast as I can every day",
          smartCriteria: { specific: false, measurable: false, achievable: false, relevant: true, timeBound: false },
          feedback: "Running hard every day can lead to injury! SMART training includes rest and variety.",
          nextNodeId: "final",
          score: 1
        },
        {
          id: "smart-training",
          text: "Follow a schedule: Monday/Wednesday - interval sprints, Friday - distance run, Tuesday/Thursday - rest, track times weekly, stretch for 10 minutes after each run",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Outstanding SMART training plan! Specific workouts, measurable progress tracking, achievable with rest days, relevant exercises, and includes injury prevention (stretching). Perfect!",
          nextNodeId: "final",
          score: 10
        },
        {
          id: "extreme-training",
          text: "Run 10 miles every single day starting tomorrow",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: false, timeBound: false },
          feedback: "This is dangerous for someone training for a mile! SMART goals match the training to the goal.",
          nextNodeId: "final",
          score: 1
        }
      ]
    },

    // DRAWING PATH
    "drawing-1": {
      id: "drawing-1",
      scenario: "Improving Drawing Skills",
      question: "You enjoy doodling but want to improve your drawing skills. You have sketchbooks and access to free online tutorials. Your art class has a portfolio review in 6 weeks.\n\nWhat's your drawing goal?",
      context: "Make it SMART!",
      category: "creative",
      choices: [
        {
          id: "vague-drawing",
          text: "I want to get better at drawing",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: true, timeBound: false },
          feedback: "'Better' is too vague! What specifically do you want to improve? How will you measure progress?",
          nextNodeId: "drawing-2",
          score: 2
        },
        {
          id: "unrealistic-drawing",
          text: "I'll become a professional artist by next week",
          smartCriteria: { specific: false, measurable: false, achievable: false, relevant: true, timeBound: true },
          feedback: "Professional level takes years! Set realistic milestones for steady improvement.",
          nextNodeId: "drawing-2",
          score: 2
        },
        {
          id: "smart-drawing",
          text: "I will complete 30 practice sketches over 6 weeks by drawing for 20 minutes daily, focusing on faces one week and hands the next, and compile my best 10 for the portfolio review",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Perfect SMART goal! Specific focus areas (faces, hands), measurable (30 sketches, 10 for portfolio), achievable (20 min daily), relevant (portfolio review), time-bound (6 weeks)!",
          nextNodeId: "drawing-2",
          score: 10
        }
      ]
    },

    "drawing-2": {
      id: "drawing-2",
      scenario: "Getting Feedback",
      question: "You've completed 15 sketches but aren't sure if you're improving. How do you get better using SMART principles?",
      category: "creative",
      choices: [
        {
          id: "keep-drawing",
          text: "Just keep drawing the same things and hope I improve",
          smartCriteria: { specific: false, measurable: false, achievable: true, relevant: false, timeBound: false },
          feedback: "Repeating without feedback won't help you grow! SMART improvement needs assessment.",
          nextNodeId: "final",
          score: 1
        },
        {
          id: "smart-feedback",
          text: "Every week, compare current sketches to week 1, ask my art teacher for specific feedback on 2 pieces, watch one tutorial addressing my weak areas, and try the new technique 3 times",
          smartCriteria: { specific: true, measurable: true, achievable: true, relevant: true, timeBound: true },
          feedback: "Excellent SMART improvement plan! Specific actions (compare, ask teacher, watch tutorial), measurable (2 pieces, 3 tries), achievable weekly goals, relevant feedback, time-bound reviews!",
          nextNodeId: "final",
          score: 10
        },
        {
          id: "overwhelming-feedback",
          text: "Take 5 online courses, buy expensive art supplies, and practice 8 hours daily",
          smartCriteria: { specific: true, measurable: true, achievable: false, relevant: false, timeBound: false },
          feedback: "This is overwhelming and expensive! SMART goals use available resources efficiently.",
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
