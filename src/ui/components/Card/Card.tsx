import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="p-3 border-2 rounded-xl border-amber-600">
      {props.children}
    </div>
  );
};

export default Card;
