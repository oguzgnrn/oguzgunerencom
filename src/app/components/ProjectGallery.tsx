'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';

type Screenshot = { src: string; width: number; height: number; alt: string };

export default function ProjectGallery({ name, images }: { name: string; images: Screenshot[] }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const imageId = useId();
  const current = images[selected];
  const move = (direction: number) => setSelected(index => (index + direction + images.length) % images.length);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  return <section aria-label={`${name} screenshots`} className="my-5 w-full max-w-[230px]">
    <button id={imageId} type="button" aria-label={`Enlarge ${name} screenshot ${selected + 1}`}
      onClick={() => {
        if (touchStart.current === -1) { touchStart.current = null; return; }
        dialog.current?.showModal(); setOpen(true);
      }}
      onTouchStart={event => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={event => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(distance) > 35) { move(distance < 0 ? 1 : -1); touchStart.current = -1; }
        else touchStart.current = null;
      }}
      onTouchCancel={() => { touchStart.current = null; }}
      className="block w-full overflow-hidden rounded-lg border border-[#004225]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004225]">
      <Image key={current.src} src={current.src} width={current.width} height={current.height} alt={current.alt}
        sizes="230px" className="aspect-[16/9] w-full object-contain bg-[#080f1b]" />
    </button>
    <div className="mt-2 flex items-center justify-between text-xs text-[#004225]">
      <button type="button" aria-label={`Previous ${name} photo`} aria-controls={imageId} onClick={() => move(-1)} className="h-9 w-9 rounded-full border border-[#004225]/25 hover:bg-white/60">←</button>
      <span aria-live="polite">{selected + 1} / {images.length}</span>
      <button type="button" aria-label={`Next ${name} photo`} aria-controls={imageId} onClick={() => move(1)} className="h-9 w-9 rounded-full border border-[#004225]/25 hover:bg-white/60">→</button>
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
