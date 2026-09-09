'use client';
/* eslint-disable next/no-img-element -- Official local portrait WebP thumbnails. */
import { ArrowUpRight, Play, X } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

export const testimonials = [
  { name: 'Rafael', image: '/rafael.webp', video: 'mVJbWZtPK7w' },
  { name: 'Guilherme', image: '/guilherme.webp', video: 'EcTFStoYDMs' },
  { name: 'Larissa', image: '/depoimentos/larissa.webp', video: 'dOJcP3Q49KA' },
  {
    name: 'Gabriella',
    image: '/depoimentos/gabriella.webp',
    video: 'PrYBtv3V1aE',
  },
  { name: 'Victor', image: '/depoimentos/victor.webp', video: 'PHRfA-0M0mc' },
  { name: 'Danilo', image: '/depoimentos/danilo.webp', video: 'oentcR6ei28' },
];
export function TestimonialGallery() {
  return (
    <div className="testimonials-grid">
      {testimonials.map(({ name, image, video }) => (
        <Dialog key={video}>
          <DialogTrigger
            className="portrait-testimonial"
            aria-label={`Assistir ao depoimento de ${name}`}
          >
            <div className="portrait-testimonial-image">
              <img src={image} alt="" width="520" height="924" loading="lazy" />
              <span className="portrait-play">
                <Play size={21} fill="currentColor" />
              </span>
            </div>
            <div className="portrait-testimonial-caption">
              <strong>{name}</strong>
              <span>
                Assistir ao depoimento <ArrowUpRight size={15} />
              </span>
            </div>
          </DialogTrigger>
          <DialogContent className="portrait-dialog" showCloseButton={false}>
            <div className="portrait-dialog-heading">
              <DialogTitle>{name} · Depoimento IFH</DialogTitle>
              <DialogClose aria-label="Fechar depoimento">
                <X size={24} />
              </DialogClose>
            </div>
            <DialogDescription className="sr-only">
              Depoimento em vídeo vertical publicado pelo Instituto Felipe
              Hurtado. Resultado individual, sem garantia de resultados para
              outros participantes.
            </DialogDescription>
            <div className="portrait-video-stage">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video}?rel=0&playsinline=1`}
                title={`Depoimento de ${name}`}
                allow="encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
            <a
              className="portrait-external"
              href={`https://www.youtube.com/watch?v=${video}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no YouTube <ArrowUpRight size={16} />
            </a>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
