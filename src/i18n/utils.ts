import { ui, defaultLang, languages } from './ui';

export function getLangFromUrl(url: URL) {
  const [, base, lang] = url.pathname.split('/');
  // base is 'lionardo-leilani-shower', lang might be 'es' or a page
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const base = '/lionardo-leilani-shower';
  
  // Remove base path
  let route = pathname.replace(base, '');
  
  // Remove language prefix if present
  const langCodes = Object.keys(languages);
  for (const lang of langCodes) {
    if (route.startsWith(`/${lang}/`) || route === `/${lang}`) {
      route = route.replace(`/${lang}`, '') || '/';
      break;
    }
  }
  
  return route || '/';
}

export function getLocalizedPath(path: string, lang: string): string {
  const base = '/lionardo-leilani-shower';
  
  // Clean up the path
  const cleanPath = path === '/' ? '' : path;
  
  if (lang === defaultLang) {
    return `${base}${cleanPath}` || base;
  }
  
  return `${base}/${lang}${cleanPath}`;
}

export { languages, defaultLang };
