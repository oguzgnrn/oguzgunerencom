'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';

type Screenshot = { src: string; width: number; height: number; alt: string };

export default function ProjectGallery({ name, images }: { name: string; images: Screenshot[] }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const stripId = useId();
  const current = images[selected];
  const move = (direction: number) => setSelected(index => (index + direction + images.length) % images.length);
  const scrollStrip = (direction: number) => {
    const element = strip.current;
    if (element) element.scrollBy({ left: direction * 246, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  return <section aria-label={`${name} screenshots`} className="my-5 w-full">
    <div className="mb-2 flex items-center justify-end gap-2">
      <button type="button" aria-label={`Scroll ${name} photos left`} aria-controls={stripId} onClick={() => scrollStrip(-1)} className="h-11 w-11 rounded-full border border-[#004225]/25 hover:bg-white/60">←</button>
      <button type="button" aria-label={`Scroll ${name} photos right`} aria-controls={stripId} onClick={() => scrollStrip(1)} className="h-11 w-11 rounded-full border border-[#004225]/25 hover:bg-white/60">→</button>
    </div>
    <div ref={strip} id={stripId} className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3" aria-label={`${name} photo strip`}>
      {images.map((shot, index) => <button key={shot.src} type="button" aria-label={`Enlarge ${name} screenshot ${index + 1}`}
        onClick={() => { setSelected(index); dialog.current?.showModal(); setOpen(true); }}
        className="w-[230px] shrink-0 snap-start overflow-hidden rounded-lg border border-[#004225]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004225]">
        <Image src={shot.src} width={shot.width} height={shot.height} alt={shot.alt} sizes="230px" className="aspect-[16/9] w-full object-contain bg-[#080f1b]" />
      </button>)}
    </div>
    <dialog ref={dialog} aria-label={`${name} screenshot viewer`} onClose={() => setOpen(false)}
      onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
      onKeyDown={event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      }}
      className="m-auto w-[96vw] max-w-[1440px] max-h-[94dvh] rounded-xl bg-[#FFFDE7] p-0 text-[#004225] shadow-2xl backdrop:bg-black/80">
      {open && <div className="p-3 sm:p-5">
        <div className="mb-3 flex items-center justify-end gap-3">
          <button type="button" autoFocus onClick={() => dialog.current?.close()} className="min-h-[44px] shrink-0 rounded-lg border border-[#004225]/25 px-4 text-sm hover:bg-[#E7E4DA]">Close</button>
        </div>
        <Image src={current.src} width={current.width} height={current.height} alt={current.alt} sizes="96vw" className="max-h-[72dvh] w-full object-contain bg-[#080f1b]" />
        <div className="mt-3 flex items-center justify-between gap-3 text-sm">
          <button type="button" aria-label="Previous screenshot" onClick={() => move(-1)} className="min-h-[44px] rounded-lg border border-[#004225]/25 px-3 hover:bg-[#E7E4DA] sm:px-4">← Previous</button>
          <span aria-live="polite">{selected + 1} / {images.length}</span>
          <button type="button" aria-label="Next screenshot" onClick={() => move(1)} className="min-h-[44px] rounded-lg border border-[#004225]/25 px-3 hover:bg-[#E7E4DA] sm:px-4">Next →</button>
        </div>
      </div>}
    </dialog>
  </section>;
}
