import React from 'react';
import avatarPlaceholder from '../assets/avatar-placeholder.png';  // Placeholder avatar image

const Art: React.FC = () => {
  return (
    <div style={{ padding: '2rem', color: 'var(--white)' }}>
      <h1>Art Page</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>The Art of John Paul Bourke</h2>
        <p>Details about Art .</p>
      </section>
      

    </div>
  );
};

export default Art;