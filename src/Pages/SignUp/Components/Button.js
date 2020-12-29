import React from 'react';

const Button = props => {
  const { text } = props;
  return (
    <div className="Button">
      <button>{text}</button>
    </div>
  );
};

export default Button;
