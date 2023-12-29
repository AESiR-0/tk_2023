'use client';

import React, { useEffect } from 'react';

const ShootingStars = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `-${Math.random() * 50}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;
      star.style.animationDuration = `${Math.random() * 5 + 2}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      document.querySelector('.sky').appendChild(star);
    };

    const createShootingStars = () => {
      for (let i = 0; i < 30; i++) {
        createStar();
      }
    };

    createShootingStars();
  }, []);

  return <div className="sky fixed"></div>;
};

export default ShootingStars;
