"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { X } from "lucide-react";

export function ZoomablePhoto({
  src,
  alt,
  sizes,
  priority = false,
  label,
  closeLabel,
  credit,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  label: string;
  closeLabel: string;
  credit?: { href: string; text: string };
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");
  const [open, setOpen] = useState(false);
  function show() {
    if (!dialog.current || dialog.current.open) return;
    previousOverflow.current = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = "hidden";
    setOpen(true);
  }
  function hide() {
    document.body.style.overflow = previousOverflow.current;
    setOpen(false);
  }
  return (
    <>
      <button
        type="button"
        className="zoom-trigger"
        onClick={show}
        aria-label={`${label}: ${alt}`}
      >
        <Image src={src} alt={alt} fill sizes={sizes} preload={priority} />
      </button>
      <dialog
        ref={dialog}
        className="photo-dialog"
        onClose={hide}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        aria-label={alt}
      >
        <button
          type="button"
          className="dialog-close gallery-control"
          onClick={() => dialog.current?.close()}
          aria-label={closeLabel}
        >
          <X size={22} aria-hidden="true" />
        </button>
        {open && (
          <figure>
            <div className="dialog-image">
              <Image src={src} alt={alt} fill sizes="95vw" quality={80} />
            </div>
            <figcaption>
              {alt}
              {credit && (
                <a href={credit.href} target="_blank" rel="noopener noreferrer">
                  {credit.text}
                </a>
              )}
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
