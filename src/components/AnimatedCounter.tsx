
import React, { useState, useEffect, useRef } from 'react';
import { Users } from 'lucide-react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter = ({ end, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="bg-white/70 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg inline-flex items-center gap-3 transition-all duration-500 hover:shadow-xl">
      <Users className="text-kiryat-blue h-6 w-6" />
      <div className="flex items-baseline">
        <span className="font-heebo font-bold text-3xl text-kiryat-blue animate-count-up">
          {count}
        </span>
        <span className="text-gray-700 mr-2">משפחות כבר הצטרפו למסע</span>
      </div>
    </div>
  );
};

export default AnimatedCounter;
