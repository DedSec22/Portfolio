import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = ({ strings, options }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: strings,
      ...options,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, options]);

  return <span ref={typedRef} />;
};

export default TypedComponent;