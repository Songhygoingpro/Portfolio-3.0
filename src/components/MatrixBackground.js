import React, { useState, useEffect } from 'react';

// Define a component for the individual square
const Square = () => {
  const [color, setColor] = useState('#000336'); 
  const initialColor = '#000336'; // Initial color
  const Arrcolor = ['232652', '', '161947', '1E204D', '0F1141', '8289FF'];
  let changecount = 0;

  // Function to generate a random color
  const getRandomColor = () => {
    return '#' + Arrcolor[Math.floor(Math.random() * 30)];
  }

  // Update color on component mount and every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (changecount % 4 === 0) {
        setColor(initialColor); // Reset color to initial color
      } else {
        setColor(getRandomColor());
      }
      changecount++;
    }, 2000); 

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div 
      className="square" 
      style={{ 
        backgroundColor: color, 
        transition: 'background-color 0.8s ease-in-out 0.1s', // Adjust transition duration to 1 second
      }}
      onMouseEnter={() => {
        setColor('#8289FF');

      }} 
      onMouseLeave={() => {
        // setColor(initialColor);
        setTimeout(() => setColor(initialColor), 700); // Stay changed for 1 second before fading back
      }}
    ></div>
  );
};

// Define your MatrixBackground component
const MatrixBackground = () => {
  const squareSize = window.innerHeight / 15; // Assuming 15 squares per row
  const numCols = 15; // Number of squares per row
  const numRows = Math.floor(window.innerHeight / squareSize);

  // Create an array to hold the rows
  const rows = [];

  // Populate the rows array with Square components
  for (let i = 0; i < numRows; i++) {
    const squares = [];
    for (let j = 0; j < numCols; j++) {
      squares.push(<Square key={j} />);
    }
    rows.push(
      <div className="row" key={i}>
        {squares}
      </div>
    );
  }

  // Render the MatrixBackground component
  return <div className="matrix-background z-10">{rows}</div>;
};

export default MatrixBackground;
