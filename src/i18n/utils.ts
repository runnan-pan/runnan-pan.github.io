import { defaultLocale, locales, routes, type Locale, type RouteKey } from './config';

export { useTranslations } from './ui';

export function isLocale(value: string | undefined): value is Locale {
	return locales.includes(value as Locale);
}

export function getLocaleStaticPaths() {
	return locales.map((lang) => ({ params: { lang } }));
}

export function getLangFromUrl(url: URL): Locale {
	const [maybeLocale] = url.pathname.split('/').filter(Boolean);
	return isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}

export function localePath(lang: Locale, route: RouteKey | string = 'home'): string {
	const slug = route in routes ? routes[route as RouteKey] : String(route).replace(/^\/+|\/+$/g, '');
	return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
	const parts = pathname.split('/').filter(Boolean);

	if (isLocale(parts[0])) {
		parts[0] = nextLocale;
	} else {
		parts.unshift(nextLocale);
	}

	return `/${parts.join('/')}/`;
}

export function localize<T>(value: Record<Locale, T>, lang: Locale): T {
	return value[lang];
}
