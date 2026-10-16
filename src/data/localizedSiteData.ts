import { siteData } from './siteData';
import { siteDataEs } from './siteDataEs';

export function getSiteData(locale?: string) {
  return locale === 'es' ? siteDataEs : siteData;
}
