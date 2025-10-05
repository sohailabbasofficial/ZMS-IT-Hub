'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = '',
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (isPlaying && autoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [isPlaying, autoPlay, autoPlayInterval, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="rounded-2xl bg-white p-8 shadow-lg"
          >
            <div className="mb-4 flex items-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="fill-current text-yellow-400"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </motion.div>
              ))}
            </div>

            <blockquote className="mb-6 text-lg italic leading-relaxed text-gray-700">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                {testimonials[currentIndex].avatar ? (
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-semibold text-primary">
                    {testimonials[currentIndex].name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                )}
              </div>
              <div>
                <div className="font-semibold text-secondary">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[currentIndex].role},{' '}
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={goToPrevious}
          className="rounded-full bg-primary p-2 text-white transition-colors duration-200 hover:bg-primary-dark"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'scale-125 bg-primary'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="rounded-full bg-primary p-2 text-white transition-colors duration-200 hover:bg-primary-dark"
          aria-label="Next testimonial"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      {/* Play/Pause Button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:text-primary"
        >
          {isPlaying ? 'Pause' : 'Play'} Auto-rotation
        </button>
      </div>
    </div>
  );
}
