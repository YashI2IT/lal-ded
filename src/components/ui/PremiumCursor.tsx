import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function PremiumCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isButton = target.tagName === 'BUTTON' || target.closest('button') !== null || target.classList.contains('btn-primary') || target.classList.contains('btn-outline');
      const isLink = target.tagName === 'A' || target.closest('a') !== null;
      const isImage = target.tagName === 'IMG' || target.closest('img') !== null;

      setIsHoveringButton(isButton);
      setIsHoveringLink(!isButton && isLink);
      setIsHoveringImage(isImage);
    };

    const handleMouseOut = () => {
      setIsHoveringButton(false);
      setIsHoveringLink(false);
      setIsHoveringImage(false);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mouseover', handleMouseOver);
      window.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      border: '1.5px solid #C9A227',
      backgroundColor: 'transparent',
      x: '-50%',
      y: '-50%',
      mixBlendMode: 'normal' as const,
    },
    button: {
      width: 48,
      height: 48,
      border: '0px solid #C9A227',
      backgroundColor: '#C9A227',
      x: '-50%',
      y: '-50%',
      mixBlendMode: 'normal' as const,
      opacity: 0.9,
    },
    link: {
      width: 32,
      height: 32,
      border: '1.5px solid #C9A227',
      backgroundColor: 'rgba(201, 162, 39, 0.1)',
      x: '-50%',
      y: '-50%',
      mixBlendMode: 'normal' as const,
    },
    image: {
      width: 64,
      height: 64,
      border: '1.5px solid #FFFDF8',
      backgroundColor: 'transparent',
      x: '-50%',
      y: '-50%',
      mixBlendMode: 'difference' as const,
    }
  };

  let currentState = 'default';
  if (isHoveringButton) currentState = 'button';
  else if (isHoveringImage) currentState = 'image';
  else if (isHoveringLink) currentState = 'link';

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      variants={variants}
      animate={currentState}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    />
  );
}
