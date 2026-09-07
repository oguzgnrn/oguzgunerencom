'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';

type Screenshot = { src: string; width: number; height: number; caption: string; alt: string };

export default function ProjectGallery({ name, images }: { name: string; images: Screenshot[] }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
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
      <span className="text-[#4A4A4A]">Click to enlarge</span>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {images.map((shot, index) => <button key={shot.src} type="button"
        aria-label={`Enlarge ${name}: ${shot.caption}`}
        onClick={() => { setSelected(index); dialog.current?.showModal(); setOpen(true); }}
        className={`group overflow-hidden rounded-lg border border-[#004225]/15 bg-white text-left transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#004225] ${images.length > 2 && index === 0 ? 'sm:col-span-2' : ''}`}>
        <Image src={shot.src} width={shot.width} height={shot.height} alt={shot.alt}
          sizes={images.length > 2 && index === 0 ? '(max-width: 768px) 95vw, 1000px' : '(max-width: 640px) 90vw, 500px'}
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
