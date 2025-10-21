import { useState, useEffect } from 'react';
import { quizData } from './data/quizData';
import type { Choice, QuizProgress } from './types/quiz.types';
import { StoryNode } from './components/Quiz/StoryNode';
import { ProgressBar } from './components/Quiz/ProgressBar';
import { ScoreCard } from './components/Quiz/ScoreCard';

function App() {
  const [progress, setProgress] = useState<QuizProgress>({
    currentNodeId: quizData.startNodeId,
    totalScore: 0,
    maxScore: 0,
    path: [quizData.startNodeId],
    choicesMade: []
  });

  const [isComplete, setIsComplete] = useState(false);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('smartGoalsProgress', JSON.stringify(progress));
  }, [progress]);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('smartGoalsProgress');
    if (saved) {
      try {
        const savedProgress = JSON.parse(saved);
        // Only restore if not at final node
        if (savedProgress.currentNodeId !== 'final') {
          setProgress(savedProgress);
        }
      } catch (e) {
        console.error('Failed to load saved progress', e);
      }
    }
  }, []);

  const currentNode = quizData.nodes[progress.currentNodeId];

  const handleChoiceSelect = (choice: Choice) => {
    // Update progress with choice
    const newProgress = {
      ...progress,
      totalScore: progress.totalScore + choice.score,
      maxScore: progress.maxScore + 10, // Each choice has a max of 10 points
      choicesMade: [
        ...progress.choicesMade,
        {
          nodeId: progress.currentNodeId,
          choiceId: choice.id,
          timestamp: Date.now()
        }
      ]
    };

    // Move to next node or complete quiz
    if (choice.nextNodeId) {
      setProgress({
        ...newProgress,
        currentNodeId: choice.nextNodeId,
        path: [...newProgress.path, choice.nextNodeId]
      });

      // Check if we reached the final node
      if (choice.nextNodeId === 'final') {
        setIsComplete(true);
      }
    } else {
      // No next node means quiz is complete
      setProgress(newProgress);
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setProgress({
      currentNodeId: quizData.startNodeId,
      totalScore: 0,
      maxScore: 0,
      path: [quizData.startNodeId],
      choicesMade: []
    });
    setIsComplete(false);
    localStorage.removeItem('smartGoalsProgress');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
            {quizData.title}
          </h1>
          <p className="text-gray-600 text-lg">{quizData.description}</p>
        </header>

        {/* Progress Bar (hide on intro and final) */}
        {progress.currentNodeId !== 'intro' && progress.currentNodeId !== 'final' && !isComplete && (
          <ProgressBar
            current={progress.path.length - 1}
            total={4} // Approximate total steps
            score={progress.totalScore}
            maxScore={progress.maxScore}
          />
        )}

        {/* Main Content */}
        <main>
          {isComplete ? (
            <ScoreCard
              totalScore={progress.totalScore}
              maxScore={progress.maxScore}
              onRestart={handleRestart}
            />
          ) : (
            <StoryNode
              node={currentNode}
              onChoiceSelect={handleChoiceSelect}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 text-sm text-gray-500">
          <p>Learn to set goals that are Specific, Measurable, Achievable, Relevant, and Time-bound</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
