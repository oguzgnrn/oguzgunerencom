const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function currentMonth(now: Date): number {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Istanbul', year: 'numeric', month: 'numeric' }).formatToParts(now);
  return Number(parts.find(p => p.type === 'year')!.value) * 12 + Number(parts.find(p => p.type === 'month')!.value) - 1;
}

export function calculateDuration(period: string, nowMonth: number | null): string | null {
  const match = period.match(/^([A-Z][a-z]{2}) (\d{4})\s*[–-]\s*(?:([A-Z][a-z]{2}) (\d{4})|(Present))$/);
  if (!match || !months.includes(match[1])) return null;
  const start = Number(match[2]) * 12 + months.indexOf(match[1]);
  if (match[5] && nowMonth === null) return null;
  if (!match[5] && !months.includes(match[3])) return null;
  const end = match[5] ? nowMonth! : Number(match[4]) * 12 + months.indexOf(match[3]);
  if (end < start) return null;
  // Like LinkedIn, include both the starting and ending calendar months.
  const total = end - start + 1;
  const years = Math.floor(total / 12);
  const remaining = total % 12;
  return [years ? `${years} ${years === 1 ? 'yr' : 'yrs'}` : '', remaining ? `${remaining} ${remaining === 1 ? 'mo' : 'mos'}` : ''].filter(Boolean).join(' ');
}
