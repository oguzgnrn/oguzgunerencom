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
  return <span>{period}{duration && <span className="text-[#4A4A4A]"> · {duration}</span>}</span>;
}
