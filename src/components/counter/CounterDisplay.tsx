"use client";

import { useCounter } from '@/contexts/CounterContext';

export default function CounterDisplay() {
  const { count } = useCounter();
  
  return (
    <div className="text-[20rem] font-light leading-none select-none">
      {count}
    </div>
  );
}