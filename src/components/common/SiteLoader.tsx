"use client";
import React, { useState, useEffect } from 'react';

export default function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Prevent scrolling initially
    document.body.style.overflow = 'hidden';
    
    const checkIfLoaded = () => {
      // Check if document is ready
      const isDocumentReady = document.readyState === 'complete';
      
      // Check if all images are loaded
      const images = Array.from(document.images);
      const allImagesLoaded = images.every(img => img.complete);
      
      // Check if fonts are loaded (if CSS Font Loading API is available)
      const fontsLoaded = document.fonts ? document.fonts.ready : Promise.resolve();
      
      return Promise.all([
        new Promise(resolve => {
          if (isDocumentReady) {
            resolve(true);
          } else {
            window.addEventListener('load', () => resolve(true));
          }
        }),
        fontsLoaded,
        // Additional delay to ensure animations are ready
        new Promise(resolve => setTimeout(resolve, 500))
      ]);
    };

    const handleLoadComplete = () => {
      setFadeOut(true);
      // Remove loader after fade animation
      setTimeout(() => {
        setIsLoading(false);
        // Restore scrolling
        document.body.style.overflow = '';
        document.body.classList.add('site-loaded');
      }, 600); // Wait for fade transition
    };

    // Check loading status
    checkIfLoaded().then(handleLoadComplete);

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={`site-loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>

      <style jsx>{`
        .site-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #F4F3ED;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99999;
          opacity: 1;
          transition: opacity 0.6s ease-out;
        }

        .site-loader.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        .wrapper {
          width: 200px;
          height: 60px;
          position: relative;
          z-index: 1;
        }

        .circle {
          width: 20px;
          height: 20px;
          position: absolute;
          border-radius: 50%;
          background-color: #070707;
          left: 15%;
          transform-origin: 50%;
          animation: circle7124 0.5s alternate infinite ease;
        }

        @keyframes circle7124 {
          0% {
            top: 60px;
            height: 5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
          }

          40% {
            height: 20px;
            border-radius: 50%;
            transform: scaleX(1);
          }

          100% {
            top: 0%;
          }
        }

        .circle:nth-child(2) {
          left: 45%;
          animation-delay: 0.2s;
        }

        .circle:nth-child(3) {
          left: auto;
          right: 15%;
          animation-delay: 0.3s;
        }

        .shadow {
          width: 20px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(7, 7, 7, 0.3);
          position: absolute;
          top: 62px;
          transform-origin: 50%;
          z-index: -1;
          left: 15%;
          filter: blur(1px);
          animation: shadow046 0.5s alternate infinite ease;
        }

        @keyframes shadow046 {
          0% {
            transform: scaleX(1.5);
          }

          40% {
            transform: scaleX(1);
            opacity: 0.7;
          }

          100% {
            transform: scaleX(0.2);
            opacity: 0.4;
          }
        }

        .shadow:nth-child(4) {
          left: 45%;
          animation-delay: 0.2s;
        }

        .shadow:nth-child(5) {
          left: auto;
          right: 15%;
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
