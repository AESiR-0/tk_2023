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
          <div className="container">
            {images.map(src => (
              <div
                key={src}
                className="card"
                style={{
                  backgroundImage: `url(${src})`
                }}
              />
            ))}
          </div>
        </>
      );
    };
