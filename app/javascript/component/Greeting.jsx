import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/random_greeting')
      .then((response) => response.json())
      .then((data) => setGreeting(data.message))
      .catch((error) => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;