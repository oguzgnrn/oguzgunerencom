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

const spotDemo = 'https://youtube.com/watch?v=W4eGxCQr0tk';
const ecomgenDemo = 'https://www.youtube.com/watch?v=BnrTY1mWj_E';

function DemoLink({ href }: { href: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#004225] underline underline-offset-4">Watch demo <span aria-hidden="true">↗</span></a>;
}

export function ExperienceCards({ text }: { text: string }) {
  const blocks = text.split(/\n(?=(?:AI Engineer|Data Scientist|AI Research Intern|Overtech Information))/);
  const entries = blocks.map(block => {
    const [heading, metadata, ...body] = block.trim().split('\n');
    const delimiter = heading.includes(' | ') ? ' | ' : ' — ';
    const parts = heading.split(delimiter).map(part => part.trim());
    const company = parts.length > 1 ? parts[parts.length - 1] : heading;
    const title = parts.length > 1 ? parts.slice(0, -1).join(delimiter) : '';
    const [period] = metadata.split(' · ');
    return { title, company, period, body: body.join('\n') };
  });
  // Keep the supplied descriptions while showing a repeated employer/role only once.
  const grouped: typeof entries = [];
  for (const entry of entries) {
    const previous = grouped.find(item => item.title === entry.title && item.company === entry.company && item.period === entry.period);
    if (previous) previous.body += '\n' + entry.body;
    else grouped.push({ ...entry });
  }
  return <div className="space-y-6 sm:space-y-8 md:space-y-12">{grouped.map((entry, i) =>
    <article key={i} className="bg-[#E7E4DA] p-4 sm:p-5 md:p-6 rounded-lg">
      <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">{entry.title || entry.company}</h2>
          <div className="text-sm sm:text-base text-black">
            {entry.title && <span className="font-medium">{entry.company}</span>}
          </div>
        </div>
        <p className="text-sm sm:text-base text-black md:text-right md:whitespace-nowrap">{entry.period}</p>
      </div>
      <CvText text={entry.body} />
      {entry.company === 'SPOT' && <div className="mt-5"><DemoLink href={spotDemo} /></div>}
    </article>
  )}</div>;
}

export function ProjectCards({ text }: { text: string }) {
  const blocks = text.replace(/^(PROJECTS\s*)+/, '').split(/\n(?=(?:EComGen —|SPOT —|Deep Learning for Dementia|Real-Time Object Recognition|Image Recognition & Deep Learning))/);
  return <div className="space-y-8 sm:space-y-12">{blocks.map((block, i) => {
    const [heading, ...lines] = block.trim().split('\n').filter(Boolean);
    const firstBullet = lines.findIndex(line => line.startsWith('* '));
    const metadata = lines.slice(0, firstBullet);
    const demo = heading.startsWith('EComGen') ? ecomgenDemo : heading.startsWith('SPOT') ? spotDemo : undefined;
    const descriptions = lines.slice(firstBullet).filter(line => !line.startsWith('Tech:') && !line.startsWith('Demo:'));
    const tech = lines.find(line => line.startsWith('Tech:'))?.slice(5).trim().split(' · ') ?? [];
    const dates = metadata.join(' · ').match(/(?:May 2026 – Present|Aug 2023|2022–2023|2026|2022)/);
    const details = metadata.map(line => line.replace(/(?: · )?(?:May 2026 – Present|Aug 2023|2022–2023|2026|2022)$/, '').replace(/ · Demo: 8:38$/, '')).filter(Boolean);
    return <article key={i} className="bg-[#E7E4DA] p-4 sm:p-5 md:p-6 rounded-lg">
      <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">{heading.startsWith('SPOT') ? 'AI Engineer & Founding Partner — SPOT' : heading}</h2>
          {details.map((detail, j) => <p key={j} className="text-sm sm:text-base text-black">{detail}</p>)}
        </div>
        {dates && <p className="text-sm sm:text-base md:whitespace-nowrap">{dates[0]}</p>}
      </div>
      <CvText text={descriptions.join('\n')} />
      <div className="flex flex-wrap gap-2 mt-5">{tech.map(skill => <span key={skill} className="px-3 py-1 bg-[#FFFDE7] text-[#004225] rounded-full text-xs sm:text-sm">{skill}</span>)}</div>
      {demo && <div className="mt-5"><DemoLink href={demo} /></div>}
    </article>;
  })}</div>;
}

export function CvDownloads() {
  return <div className="flex flex-wrap justify-center gap-3 pt-5">
    <a className="button" href="/cv/oguz-guneren-cv.pdf" download>Download CV</a>
  </div>;
}

export function EducationCard({ text }: { text: string }) {
  const [universityLine, degreeLine, , ...courseLines] = text.split('\n').filter(Boolean);
  const [university, location] = universityLine.split(' — ');
  const [degree, graduation] = degreeLine.split(' · ');
  return <article className="overflow-hidden rounded-xl border border-[#004225]/15 bg-[#E7E4DA]">
    <div className="flex flex-col sm:flex-row gap-5 p-5 sm:p-8 border-b border-[#004225]/15">
      <div aria-hidden="true" className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#004225] text-[#FFFDD0] font-bold text-xl tracking-wider">ITU</div>
      <div className="flex-1">
        <h3 className="text-xl sm:text-2xl font-semibold">{university}</h3>
        <p className="mt-2 text-base sm:text-lg font-medium">{degree}</p>
        <p className="mt-2 text-sm text-[#4A4A4A]">{location}</p>
      </div>
      <p className="self-start rounded-full bg-[#FFFDE7] px-4 py-2 text-sm font-medium text-[#004225] whitespace-nowrap">{graduation}</p>
    </div>
    <div className="p-5 sm:p-8">
      <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest">Relevant Coursework</h4>
      <div className="grid gap-6 lg:grid-cols-3">{courseLines.map(line => {
        const colon = line.indexOf(':');
        const category = line.slice(0, colon);
        return <div key={category} className="rounded-lg bg-[#FFFDE7]/60 p-4">
          <h5 className="font-semibold text-base mb-3">{category}</h5>
          <ul className="space-y-2 text-sm leading-relaxed">{line.slice(colon + 1).trim().split(' · ').map(course => <li key={course}>{course}</li>)}</ul>
        </div>;
      })}</div>
    </div>
  </article>;
}
