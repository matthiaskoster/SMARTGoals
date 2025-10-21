import { useState } from 'react';
import type { StoryNode as StoryNodeType, Choice } from '../../types/quiz.types';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { FeedbackPanel } from './FeedbackPanel';

interface StoryNodeProps {
  node: StoryNodeType;
  onChoiceSelect: (choice: Choice) => void;
}

export const StoryNode: React.FC<StoryNodeProps> = ({ node, onChoiceSelect }) => {
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleChoiceClick = (choice: Choice) => {
    setSelectedChoice(choice);
    setShowFeedback(true);
  };

  const handleContinue = () => {
    if (selectedChoice) {
      setShowFeedback(false);
      setSelectedChoice(null);
      onChoiceSelect(selectedChoice);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return '📚';
      case 'athletic':
        return '🏀';
      case 'creative':
        return '🎸';
      case 'social':
        return '👥';
      default:
        return '🎯';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic':
        return 'from-blue-500 to-blue-600';
      case 'athletic':
        return 'from-orange-500 to-red-600';
      case 'creative':
        return 'from-purple-500 to-pink-600';
      case 'social':
        return 'from-green-500 to-teal-600';
      default:
        return 'from-blue-500 to-indigo-600';
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        {/* Category Badge */}
        <div className="flex items-center mb-4">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(node.category)} text-white font-semibold text-sm`}>
            <span className="mr-2">{getCategoryIcon(node.category)}</span>
            {node.category.charAt(0).toUpperCase() + node.category.slice(1)}
          </div>
        </div>

        {/* Scenario */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {node.scenario}
        </h2>

        {/* Context */}
        {node.context && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm text-blue-900">{node.context}</p>
          </div>
        )}

        {/* Question */}
        <div className="mb-6">
          <p className="text-lg text-gray-700 whitespace-pre-line">{node.question}</p>
        </div>

        {/* Choices */}
        {!showFeedback && (
          <div className="space-y-3">
            {node.choices.map((choice, index) => (
              <button
                key={choice.id}
                onClick={() => handleChoiceClick(choice)}
                className="w-full text-left p-4 rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{choice.text}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Feedback */}
        {showFeedback && selectedChoice && (
          <>
            <FeedbackPanel
              feedback={selectedChoice.feedback}
              smartCriteria={selectedChoice.smartCriteria}
              score={selectedChoice.score}
            />

            <div className="mt-6 text-center">
              <Button onClick={handleContinue} variant="primary">
                {selectedChoice.nextNodeId ? 'Continue' : 'See Results'}
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
