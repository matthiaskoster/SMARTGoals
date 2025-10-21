interface ProgressBarProps {
  current: number;
  total: number;
  score: number;
  maxScore: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  score,
  maxScore
}) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Progress: Step {current} of {total}
        </span>
        <span className="text-sm font-medium text-blue-600">
          Score: {score} / {maxScore}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};
