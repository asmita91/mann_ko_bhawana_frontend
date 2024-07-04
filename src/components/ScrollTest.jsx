import React from 'react';

const ScrollTest = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
      Scroll to Top
    </button>
  );
};

export default ScrollTest;
