export type Locale = 'en' | 'es';

export function getLocale(locale?: string): Locale {
  return locale === 'es' ? 'es' : 'en';
}

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function withBase(path: string): string {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function stripBase(pathname: string): string {
  if (base && (pathname === base || pathname.startsWith(`${base}/`))) {
    return pathname.slice(base.length) || '/';
  }
  return pathname;
}

export function localizePath(pathname: string, locale: Locale): string {
  const sitePath = stripBase(pathname);
  const englishPath = sitePath.replace(/^\/es(?=\/|$)/, '') || '/';

  if (locale === 'en') {
    return withBase(englishPath);
  }

  return withBase(englishPath === '/' ? '/es/' : `/es${englishPath}`);
}
