import type { SMARTCriteria } from '../../types/quiz.types';
import { getSMARTFeedback } from '../../utils/scoring';
import { Card } from '../UI/Card';
import { Badge } from '../UI/Badge';

interface FeedbackPanelProps {
  feedback: string;
  smartCriteria: SMARTCriteria;
  score: number;
}

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  feedback,
  smartCriteria,
  score
}) => {
  const smartFeedback = getSMARTFeedback(smartCriteria);

  return (
    <Card className="mt-6 border-2 border-blue-200 animate-slide-up">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
            <span className="text-2xl">
              {score >= 8 ? '🌟' : score >= 5 ? '👍' : '💡'}
            </span>
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Feedback</h3>
          <p className="text-gray-700 mb-4">{feedback}</p>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">SMART Analysis:</h4>
            <div className="space-y-2">
              {smartFeedback.map((item, index) => {
                const isPositive = item.startsWith('✓');
                return (
                  <div key={index} className="flex items-center">
                    <Badge variant={isPositive ? 'success' : 'error'} className="text-xs">
                      {item}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <span className="text-sm font-medium text-gray-700 mr-2">Points earned:</span>
            <span className="text-xl font-bold text-blue-600">+{score}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
