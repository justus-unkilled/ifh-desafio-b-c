'use client';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';
import { registrationUrl } from '@/lib/registration-url';
function subscribe(callback: () => void) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}
export function VariantSwitch() {
  const pathname = usePathname();
  const search = useSyncExternalStore(
    subscribe,
    () => window.location.search,
    () => '',
  );
  const campaign = new URL(registrationUrl(search)).search;
  const current = pathname.startsWith('/versao-c') ? 'c' : 'b';
  return (
    <nav className="variant-switch" aria-label="Comparar versões da página">
      <span>PRÉVIA IFH</span>
      <div>
        <a
          href={`/versao-b${campaign}`}
          aria-current={current === 'b' ? 'page' : undefined}
        >
          Versão B
        </a>
        <a
          href={`/versao-c${campaign}`}
          aria-current={current === 'c' ? 'page' : undefined}
        >
          Versão C
        </a>
      </div>
      <p>
        {current === 'c'
          ? 'Design da referência · copy revisada'
          : 'Estrutura original · design refinado'}
      </p>
    </nav>
  );
}
