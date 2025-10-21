# SMART Goals Adventure 🎯

An interactive, choose-your-own-adventure style quiz designed for grade 8 students to learn about SMART goal-setting through engaging scenarios.

## What are SMART Goals?

SMART is an acronym that helps you set effective goals:

- **S**pecific - Clear and well-defined
- **M**easurable - You can track your progress
- **A**chievable - Challenging but possible
- **R**elevant - Matters to you and your life
- **T**ime-bound - Has a clear deadline

## Features

- 🎮 **Interactive Storytelling**: Choose-your-own-adventure format with branching paths
- 📚 **Multiple Scenarios**: Academic, Athletic, Creative, and Social goal-setting paths
- 📊 **Real-time Feedback**: Instant SMART analysis for each choice
- 🎯 **Progress Tracking**: Visual progress bar and score tracking
- 💾 **Auto-save**: Progress is saved automatically to localStorage
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- ✨ **Engaging UI**: Colorful gradients, smooth animations, and intuitive interface

## Technology Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe code
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Modern ES6+** - Clean, maintainable code

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd SMARTGoals
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
SMARTGoals/
├── src/
│   ├── components/
│   │   ├── Quiz/
│   │   │   ├── StoryNode.tsx       # Main quiz interaction component
│   │   │   ├── ProgressBar.tsx     # Visual progress tracker
│   │   │   ├── FeedbackPanel.tsx   # SMART criteria feedback
│   │   │   └── ScoreCard.tsx       # Final results display
│   │   └── UI/
│   │       ├── Button.tsx          # Reusable button component
│   │       ├── Card.tsx            # Card container component
│   │       └── Badge.tsx           # Badge for SMART criteria
│   ├── data/
│   │   └── quizData.ts             # Quiz scenarios and content
│   ├── types/
│   │   └── quiz.types.ts           # TypeScript type definitions
│   ├── utils/
│   │   └── scoring.ts              # Scoring and grading logic
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles and Tailwind
├── public/                         # Static assets
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite configuration
```

## Quiz Paths

The quiz includes four different scenario paths:

1. **Academic Path** 📚
   - Setting math grade improvement goals
   - Creating effective study plans

2. **Athletic Path** 🏀
   - Improving basketball free throw accuracy
   - Tracking athletic progress

3. **Creative Path** 🎸
   - Learning to play guitar
   - Overcoming creative challenges

4. **Social Path** 👥
   - Making new friends at school
   - Building meaningful connections

Each path teaches SMART goal-setting principles through relatable, age-appropriate scenarios.

## Educational Value

This quiz helps students:

- Understand the difference between vague and SMART goals
- Learn to set realistic, achievable objectives
- Develop critical thinking about goal-setting
- Practice applying SMART criteria to real-life situations
- Build confidence in their ability to set and achieve goals

## Customization

### Adding New Scenarios

To add new scenarios, edit `src/data/quizData.ts`:

```typescript
{
  id: "your-node-id",
  scenario: "Scenario title",
  question: "The question or situation",
  context: "Additional context (optional)",
  category: "academic" | "athletic" | "creative" | "social",
  choices: [
    {
      id: "choice-id",
      text: "Choice text",
      smartCriteria: {
        specific: true,
        measurable: true,
        achievable: true,
        relevant: true,
        timeBound: true
      },
      feedback: "Feedback for this choice",
      nextNodeId: "next-node-id",
      score: 10
    }
  ]
}
```

### Styling

The project uses Tailwind CSS for styling. Custom colors and animations can be configured in `tailwind.config.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is available for educational use.

## Acknowledgments

- Designed for grade 8 students learning goal-setting skills
- Built with modern web technologies for optimal performance
- Inspired by the SMART goals framework

---

**Built with React, TypeScript, and Tailwind CSS** 🚀
