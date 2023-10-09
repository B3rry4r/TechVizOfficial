import React, { useEffect } from 'react';

const ScrollToTop = (WrappedComponent) => {
  const ScrollToTopComponent = (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ScrollToTopComponent;
};

export default ScrollToTop;
