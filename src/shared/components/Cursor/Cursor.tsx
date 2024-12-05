import React, { useEffect, useState } from 'react';
import classes from './Cursor.module.scss';
import { Box } from '@mantine/core';

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <Box
      className={classes['custom-cursor']}
      style={{
        background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    ></Box>
  );
};

export default Cursor;
