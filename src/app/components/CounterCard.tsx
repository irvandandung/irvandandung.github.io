'use client';

import { useCounter } from "@/app/hooks/useCounter";

interface CounterCardProps {
  target: number;
  label: string;
}

export function CounterCard({ target, label }: CounterCardProps) {
  const count = useCounter(target, 2000);

  return (
    <div className="bg-dark-bg/80 border border-accent-purple/40 p-4 text-center">
      <div className="text-2xl font-bold text-accent-purple">{count}+</div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );
}
