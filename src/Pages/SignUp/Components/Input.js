import React from 'react';

const Input = props => {
  const { type, text } = props;
  return (
    <div className="Input">
      <input type={type} placeholder={text} />
    </div>
  );
};

export default Input;
