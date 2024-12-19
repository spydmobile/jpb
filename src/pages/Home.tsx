import React from 'react';
import logo from '../assets/logo.png';  // Import the PNG logo

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img src={logo} alt="Site Logo" style={{ width: '300px', marginBottom: '2rem' }} />
      <h1>John Paul Bourke</h1>
      <p>
       JPB is a talented Musician and Artist as well as a technologist from Fort Smith NWT
      </p>
    </div>
  );
};

export default Home;