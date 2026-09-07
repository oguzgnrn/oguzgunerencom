'use client';

import { useEffect, useState } from 'react';
import { calculateDuration, currentMonth } from './duration';

export default function DateRange({ period }: { period: string }) {
  const [month, setMonth] = useState<number | null>(null);
  useEffect(() => {
    const refresh = () => setMonth(currentMonth(new Date()));
    refresh();
    const timer = window.setInterval(refresh, 60_000);
    document.addEventListener('visibilitychange', refresh);
    return () => { window.clearInterval(timer); document.removeEventListener('visibilitychange', refresh); };
  }, []);
  const duration = calculateDuration(period, month);
  return <span className="inline-flex flex-wrap items-baseline gap-x-1 md:flex-nowrap"><span className="whitespace-nowrap">{period}</span>{duration && <span className="whitespace-nowrap text-[#4A4A4A]">· {duration}</span>}</span>;
}
