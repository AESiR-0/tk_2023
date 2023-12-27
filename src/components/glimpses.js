import React from 'react'

export default function Glimpses() {
    const images = ['./glimpses/1 (1).jpg', 
    './glimpses/1 (2).jpg',
    './glimpses/1 (3).jpg',
    './glimpses/1 (4).jpg',
    './glimpses/1 (5).jpg',
    './glimpses/1 (6).jpg']
    return (
        <>
            <div className="text-center text-4xl font-semibold text-uppercase text-secondary"> Glimpses of previous Events </div>
            <div className="gallery h-screen w-screen" id="gallery">
            {images.map(src => (
              <div className="gallery-item">
              <div className="content">
              <img
                src={src}
                className="card"
              />
            </div>
          </div>
            ))}
          </div>
        </>
      );
    };
