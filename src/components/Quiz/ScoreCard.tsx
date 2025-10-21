import { getSMARTGrade } from '../../utils/scoring';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';

interface ScoreCardProps {
  totalScore: number;
  maxScore: number;
  onRestart: () => void;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({
  totalScore,
  maxScore,
  onRestart
}) => {
  const { grade, message, color } = getSMARTGrade(totalScore, maxScore);
  const percentage = Math.round((totalScore / maxScore) * 100);

  return (
    <Card className="text-center max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Quiz Complete!
        </h2>
        <p className="text-gray-600">Here's how you did on your SMART Goals Adventure</p>
      </div>

      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
          <span className="text-6xl font-bold text-white">{grade}</span>
        </div>
        <p className={`text-2xl font-semibold ${color} mb-2`}>{message}</p>
        <p className="text-gray-600">
          You scored <span className="font-bold text-2xl text-gray-900">{totalScore}</span> out of{' '}
          <span className="font-bold text-2xl text-gray-900">{maxScore}</span> points
          <span className="block text-lg mt-1">({percentage}%)</span>
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Remember SMART Goals:</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-left">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-bold text-blue-600 text-sm">S</div>
            <div className="text-xs text-gray-700">Specific</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-bold text-blue-600 text-sm">M</div>
            <div className="text-xs text-gray-700">Measurable</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-bold text-blue-600 text-sm">A</div>
            <div className="text-xs text-gray-700">Achievable</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-bold text-blue-600 text-sm">R</div>
            <div className="text-xs text-gray-700">Relevant</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-bold text-blue-600 text-sm">T</div>
            <div className="text-xs text-gray-700">Time-bound</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button onClick={onRestart} variant="primary" className="w-full md:w-auto">
          Try Again
        </Button>
        <p className="text-sm text-gray-500">
          Want to improve your score? Try a different path or make better choices!
        </p>
      </div>
    </Card>
  );
};
