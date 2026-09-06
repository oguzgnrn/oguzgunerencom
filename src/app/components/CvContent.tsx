import React from 'react';

function LinkedText({ text }: { text: string }) {
  return <>{text.split(/(https?:\/\/[^\s]+|youtube\.com\/watch\?v=[^\s]+)/g).map((part, i) =>
    /^(https?:\/\/|youtube\.com\/)/.test(part)
      ? <a key={i} href={part.startsWith('http') ? part : `https://${part}`} className="underline underline-offset-4 break-all" target="_blank" rel="noopener noreferrer">{part}</a>
      : <React.Fragment key={i}>{part}</React.Fragment>
  )}</>;
}

export function CvText({ text }: { text: string }) {
  const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
  const elements: React.ReactNode[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('* ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('* ')) {
        items.push(<li key={i}><LinkedText text={lines[i].slice(2)} /></li>);
        i++;
      }
      i--;
      elements.push(<ul key={`list-${i}`} className="list-disc pl-5 space-y-3">{items}</ul>);
    } else {
      elements.push(<p key={i}><LinkedText text={lines[i]} /></p>);
    }
  }
  return <div className="space-y-4 text-sm sm:text-base leading-relaxed text-black [overflow-wrap:anywhere]">{elements}</div>;
}

export function CvCards({ text }: { text: string }) {
  const blocks = text.split(/\n(?=(?:AI Engineer|Data Scientist|AI Research Intern|Overtech Information|EComGen —|SPOT —|Deep Learning for Dementia|Real-Time Object Recognition|Image Recognition & Deep Learning))/);
  return <div className="space-y-6 sm:space-y-8">{blocks.map((block, i) => {
    const [title, ...rest] = block.trim().split('\n');
    return <article key={i} className="bg-[#E7E4DA] p-5 sm:p-8 rounded-xl">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 leading-snug">{title}</h2>
      <CvText text={rest.join('\n')} />
    </article>;
  })}</div>;
}

export function CvDownloads() {
  return <div className="flex flex-wrap justify-center gap-3 pt-5">
    <a className="button" href="/cv/oguz-guneren-cv.pdf" download>Download CV · 1 page</a>
    <a className="px-4 py-2 rounded-md border border-[#004225] text-[#004225]" href="/cv/oguz-guneren-original.txt" download>Full CV · Original text</a>
  </div>;
}
