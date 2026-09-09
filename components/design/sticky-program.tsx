'use client';
// Adapted from Sticky Scroll Reveal by Manu Arora / Aceternity UI (MIT).
// https://21st.dev/@manuarora700/components/sticky-scroll-reveal
// Uses page scroll, full-contrast text and complete mobile content.
import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from 'motion/react';
import { ArrowUpRight, Check, CalendarDays, Video } from 'lucide-react';
export type Lesson = {
  day: string;
  weekday: string;
  title: string;
  label: string;
  text: string;
  takeaway: string;
};
const words = [
  'Enxergar.',
  'Começar.',
  'Valorizar.',
  'Organizar.',
  'Expandir.',
];
export function StickyProgram({ lessons }: { lessons: Lesson[] }) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.4', 'end 0.7'],
  });
  useMotionValueEvent(scrollY, 'change', () => {
    const cards = ref.current?.querySelectorAll<HTMLElement>('.journey-lesson');
    if (!cards?.length) return;
    let closest = 0;
    cards.forEach((card, index) => {
      if (card.getBoundingClientRect().top <= window.innerHeight * 0.4)
        closest = index;
    });
    setActiveCard(closest);
  });
  return (
    <div className="journey" ref={ref}>
      <aside className="journey-sidebar">
        <div className="journey-sticky">
          <p className="eyebrow">UM PASSO DE CADA VEZ</p>
          <h3>
            Cinco noites.
            <br />
            <em>Um novo olhar.</em>
          </h3>
          <p>
            Da primeira oportunidade à visão de negócio. Acompanhe o caminho.
          </p>
          <div className="journey-calendar" aria-hidden="true">
            <div className="calendar-heading">
              <CalendarDays size={17} />
              <span>OUTUBRO 2026</span>
              <span>AO VIVO</span>
            </div>
            <div className="calendar-main">
              <motion.strong
                key={activeCard}
                initial={reduce ? false : { y: 12, opacity: 0.3 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {lessons[activeCard].day}
              </motion.strong>
              <span>
                {lessons[activeCard].weekday}
                <br />
                <b>ÀS 20H</b>
              </span>
            </div>
            <div className="calendar-word">
              <span>0{activeCard + 1}</span>
              {words[activeCard]}
            </div>
            <div className="calendar-dots">
              {lessons.map((lesson, index) => (
                <span
                  key={lesson.day}
                  className={index <= activeCard ? 'complete' : ''}
                />
              ))}
            </div>
          </div>
          <a href="#inscricao" className="text-link">
            Quero estar no Desafio <ArrowUpRight size={17} />
          </a>
        </div>
      </aside>
      <div className="journey-lessons">
        <div className="journey-rail" aria-hidden="true">
          <motion.div style={{ scaleY: reduce ? 1 : scrollYProgress }} />
        </div>
        {lessons.map((lesson, index) => (
          <article
            className={`journey-lesson ${activeCard === index ? 'active' : ''}`}
            id={`aula-${index + 1}`}
            key={lesson.day}
          >
            <span className="journey-dot" aria-hidden="true" />
            <div className="journey-lesson-top">
              <span>AULA 0{index + 1}</span>
              <span>
                {lesson.day} OUT <span className="date-separator">/</span> 20H
              </span>
            </div>
            <span className="journey-word" aria-hidden="true">
              {words[index]}
            </span>
            <h3>{lesson.title}</h3>
            <p>{lesson.text}</p>
            <div className="journey-takeaway">
              <Check size={18} />
              <span>{lesson.takeaway}</span>
            </div>
            <span className="journey-topic">
              <Video size={14} />
              {lesson.label}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
