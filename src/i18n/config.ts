export const locales = ['en', 'zh'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta = {
	en: {
		label: 'EN',
		nativeLabel: 'English',
		htmlLang: 'en',
		ogLocale: 'en_AU',
	},
	zh: {
		label: '中文',
		nativeLabel: '中文',
		htmlLang: 'zh-CN',
		ogLocale: 'zh_CN',
	},
} as const;

export const routes = {
	home: '',
	about: 'about',
	work: 'work',
	projects: 'projects',
	contact: 'contact',
} as const;

export type RouteKey = keyof typeof routes;

export const navRoutes: RouteKey[] = ['about', 'work', 'projects', 'contact'];
