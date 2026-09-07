'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';

type Screenshot = { src: string; width: number; height: number; caption: string; alt: string };

export default function ProjectGallery({ name, images }: { name: string; images: Screenshot[] }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const stripId = useId();
  const scrollStrip = (direction: number) => {
    const element = strip.current;
    if (element) element.scrollBy({ left: direction * ((element.firstElementChild?.clientWidth ?? 280) + 16), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  const current = images[selected];
  const move = (direction: number) => setSelected(index => (index + direction + images.length) % images.length);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  return <section aria-label={`${name} screenshots`} className="my-6">
    <div className="mb-3 flex items-center justify-between gap-3 text-sm">
      <h3 className="font-semibold">Inside {name}</h3>
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline text-[#4A4A4A] mr-2">{images.length} photos · Click to enlarge</span>
        <button type="button" aria-label={`Scroll ${name} photos left`} aria-controls={stripId} onClick={() => scrollStrip(-1)} className="h-10 w-10 rounded-full border border-[#004225]/25 hover:bg-white/60">←</button>
        <button type="button" aria-label={`Scroll ${name} photos right`} aria-controls={stripId} onClick={() => scrollStrip(1)} className="h-10 w-10 rounded-full border border-[#004225]/25 hover:bg-white/60">→</button>
      </div>
    </div>
    <div ref={strip} id={stripId} className="flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory px-1 pt-1 pb-3" aria-label={`${name} photo strip`}>
      {images.map((shot, index) => <button key={shot.src} type="button"
        aria-label={`Enlarge ${name}: ${shot.caption}`}
        onClick={() => { setSelected(index); dialog.current?.showModal(); setOpen(true); }}
        className="group w-[min(280px,80vw)] sm:w-[300px] shrink-0 snap-start overflow-hidden rounded-lg border border-[#004225]/15 bg-white text-left transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#004225]">
        <Image src={shot.src} width={shot.width} height={shot.height} alt={shot.alt}
          sizes="300px"
          className="aspect-[16/9] w-full object-contain bg-[#080f1b]" />
        <span className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-[#004225]">{shot.caption}<span aria-hidden="true">↗</span></span>
      </button>)}
    </div>
    <dialog ref={dialog} aria-labelledby={titleId} onClose={() => setOpen(false)}
      onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
      onKeyDown={event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      }}
      className="m-auto w-[96vw] max-w-[1440px] max-h-[94dvh] rounded-xl bg-[#FFFDE7] p-0 text-[#004225] shadow-2xl backdrop:bg-black/80">
      {open && <div className="p-3 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 id={titleId} className="text-sm font-semibold sm:text-lg">{name} — {current.caption}</h3>
          <button type="button" autoFocus onClick={() => dialog.current?.close()} className="shrink-0 rounded-lg border border-[#004225]/25 px-4 py-2 text-sm hover:bg-[#E7E4DA]">Close</button>
        </div>
        <Image src={current.src} width={current.width} height={current.height} alt={current.alt} sizes="96vw" className="max-h-[72dvh] w-full object-contain bg-[#080f1b]" />
        <div className="mt-3 flex items-center justify-between gap-3 text-sm">
          <button type="button" aria-label="Previous screenshot" onClick={() => move(-1)} className="rounded-lg border border-[#004225]/25 px-4 py-2 hover:bg-[#E7E4DA]">← Previous</button>
          <span aria-live="polite">{selected + 1} / {images.length}</span>
          <button type="button" aria-label="Next screenshot" onClick={() => move(1)} className="rounded-lg border border-[#004225]/25 px-4 py-2 hover:bg-[#E7E4DA]">Next →</button>
        </div>
      </div>}
    </dialog>
  </section>;
}
