"use client"
import React, { useState, useEffect, useRef } from 'react';

function Project() {
  const slides = [
    { url: "/project/homepage.png" },
    { url: "/project/login-page.png" },
    { url: "/project/register-page.png" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const navigateToSite = () => {
    window.location.href = "https://github.com/alwwi/e-farm.git"
  }

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide => (currentSlide + 1) % slides.length);
        setLeaving(false);
      }, 1000);
    }, 3000); // Change slide every 3 seconds
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    return () => stopSlideShow(); // Cleanup on component unmount
  }, []);

  return (
    <div className=''>
      <div className='flex items-center justify-center'>

        <button
          onClick={navigateToSite}
          className='w-[500px] h-[300px] mt-[50px] relative overflow-hidden cursor-pointer'
          onMouseEnter={startSlideShow}
          onMouseLeave={stopSlideShow}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${slides[currentSlide].url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              className={`w-full h-full rounded-2xl bg-center bg-cover absolute inset-0 transition-all duration-1000 transform ${index === currentSlide ? 'opacity-100' : 'opacity-0'} ${leaving && 'translate-x-full'}`}
            />
          ))}
        </button>
      </div>
    </div>
  );
}

export default Project;
