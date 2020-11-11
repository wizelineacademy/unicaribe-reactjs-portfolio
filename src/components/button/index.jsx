import React, { useState, useEffect } from 'react';

const Button = ({ label, onClick }) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('Este mensaje solo se ejecuta cuando el componente se ha montado')
  }, []);

  return (
  <button onClick={addCount}>Has dado click {count} veces</button>
  );
};

export default Button;
