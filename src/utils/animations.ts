import { Variants, Transition } from 'framer-motion';

export class AnimationService {
  static getFadeInAnimation(delay: number = 0) {
    return {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    };
  }

  static getSlideInAnimation(direction: 'left' | 'right' | 'up' | 'down', delay: number = 0) {
    const getInitialPosition = () => {
      switch (direction) {
        case 'left': return { x: -50, opacity: 0 };
        case 'right': return { x: 50, opacity: 0 };
        case 'up': return { y: -50, opacity: 0 };
        case 'down': return { y: 50, opacity: 0 };
        default: return { y: 30, opacity: 0 };
      }
    };

    return {
      initial: getInitialPosition(),
      animate: { x: 0, y: 0, opacity: 1 },
      transition: { duration: 0.8, delay }
    };
  }

  static getStaggeredAnimation(delay: number = 0.1) {
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    };
  }

  static getScaleAnimation(delay: number = 0) {
    return {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.5, delay }
    };
  }

  static getHoverAnimation() {
    return {
      whileHover: { 
        scale: 1.05,
        transition: { duration: 0.2 }
      },
      whileTap: { 
        scale: 0.95,
        transition: { duration: 0.1 }
      }
    };
  }

  static getScrollTriggerAnimation(threshold: number = 0.1) {
    return {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, threshold },
      transition: { duration: 0.6 }
    };
  }
}
