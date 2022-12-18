export const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 1.9
      },
    },
};
export const SlideUp = (delay, speed) => ({
  hidden: {
    opacity:0,
    y:100
  },
  visible: {
    opacity:1,
    y:0,
    transition: {
      type: 'spring',
      stiffness: speed,
      damping: 140,
      delay:delay
    }
  }
})
export const heroAnim = {
    hidden: {
        x:1400,
        transition: {
          type: 'spring',
          stiffness: 140,
          damping: 10,
        },
    },
    visible: {
        x:0,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 80,
        },
    }
}
export const textShowDelay = (delay) => ({
    hidden: {
    opacity:0,
    // transition: {
    //   type: 'spring',
    //   delay:delay,
    //   stiffness: 460,
    // }
  },
  visible: {
    opacity:1,
    transition: {
      type: 'spring',
      delay:delay,
      stiffness: 500,
      damping: 100,
    }
  }
})
export const titleAnim = {
  hidden: {
    opacity:0,
    y:70,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 100,
    }
  },
  visible: {
    y:0,
    opacity:1,
    transition: {
      type: 'spring',
      stiffness: 25,
      // damping: 200,
    }
  }
}
export const slideIn = (delay) => ({
  hidden: {
    x:-30,
    opacity:0,
    transition: {
      type: 'spring',
      stiffness: 10,
      delay:delay
    }
  },
  visible: {
    x:0,
    opacity:1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay:delay
    }
  }
})
export const planerVariants = (variant, rotate) => ({
  hidden: {
    opacity:0,
    rotate: rotate === true ? 140 : 0,
    x: variant === 'left' ? "-80%" : '80%'
  },
  visible: {
    opacity:1,
    rotate:0,
    x:0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: rotate === true ? 1 : 0.5,
    },
  }
})
export const slideUp = {
  hidden: {
    opacity:0,
    y: -30,
  },
  visible: {
    opacity:1,
    y:0,
    transition: {
      type:'spring',
      duration:1.4
    }
  }
}
export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};