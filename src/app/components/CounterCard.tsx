'use client';

import { useCounter } from "@/app/hooks/useCounter";
import { useInView } from "@/app/hooks/useInView";

interface CounterCardProps {
  target: number;
  label: string;
}

export function CounterCard({ target, label }: CounterCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const count = useCounter(target, 2000, isInView);

  return (
    <div 
      ref={ref}
      className="bg-dark-bg/80 border border-accent-purple/40 p-4 text-center"
    >
      <div className="text-2xl font-bold">{count}+</div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );
}
