export type Locale = 'en' | 'es';

export function getLocale(locale?: string): Locale {
  return locale === 'es' ? 'es' : 'en';
}

export function localizePath(pathname: string, locale: Locale): string {
  const englishPath = pathname.replace(/^\/es(?=\/|$)/, '') || '/';

  if (locale === 'en') {
    return englishPath;
  }

  return englishPath === '/' ? '/es/' : `/es${englishPath}`;
}
