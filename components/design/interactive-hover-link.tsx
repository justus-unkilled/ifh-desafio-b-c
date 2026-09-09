'use client';
// Adapted from Magic UI / Dillion Verma (MIT). See licenses/Magic-UI.md.
// https://21st.dev/@dillionverma/components/interactive-hover-button
// Anchor semantics retained for checkout and navigation; duplicate text is decorative.
import { ArrowUpRight } from 'lucide-react';
import type { AnchorHTMLAttributes } from 'react';
export function InteractiveHoverLink({
  children,
  className = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`interactive-cta ${className}`} {...props}>
      <span className="cta-default">
        <span className="cta-dot" aria-hidden="true" />
        <span>{children}</span>
        <span className="cta-arrow">
          <ArrowUpRight size={20} />
        </span>
      </span>
      <span className="cta-hover" aria-hidden="true">
        <span>{children}</span>
        <ArrowUpRight size={21} />
      </span>
    </a>
  );
}
