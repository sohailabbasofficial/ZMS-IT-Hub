'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
}: FadeInUpProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScaleOnHoverProps {
  children: React.ReactNode;
  scale?: number;
  className?: string;
}

export function ScaleOnHover({
  children,
  scale = 1.05,
  className = '',
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TiltOnHoverProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltOnHover({ children, className = '' }: TiltOnHoverProps) {
  return (
    <motion.div
      whileHover={{
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface BounceInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function BounceIn({
  children,
  delay = 0,
  className = '',
}: BounceInProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={
        inView
          ? {
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay,
              },
            }
          : { opacity: 0, scale: 0.3 }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RotateOnHoverProps {
  children: React.ReactNode;
  className?: string;
}

export function RotateOnHover({
  children,
  className = '',
}: RotateOnHoverProps) {
  return (
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
