interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`card animate-fade-in ${className}`}>
      {children}
    </div>
  );
};
