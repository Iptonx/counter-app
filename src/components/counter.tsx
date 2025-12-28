"use client";

import CounterDisplay from './counter/CounterDisplay';
import CounterControls from './counter/CounterControls';
import TopActions from './counter/TopActions';

export default function Counter() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <TopActions />
      <CounterDisplay />
      <CounterControls />
    </div>
  );
}
