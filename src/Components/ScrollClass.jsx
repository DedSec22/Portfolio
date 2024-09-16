import React, { useEffect, useState } from 'react';

function ScrollClass() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Run the handleScroll function initially to set the correct class on mount
    handleScroll();

    return () => {
      // Remove the scroll event listener on cleanup
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update the class on the body element based on the scroll state
    if (isScrolled) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  }, [isScrolled]); // Run this effect whenever `isScrolled` changes

  return (
    <div>
      {/* This div can be used for other purposes, but it won't affect body styling */}
    </div>
  );
}

export default ScrollClass;
