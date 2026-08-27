import type { Locale } from '../i18n/config';

export const profile = {
	name: {
		en: 'Runnan Pan',
		zh: '潘润南',
	} satisfies Record<Locale, string>,
	shortName: 'Runnan',
	email: '',
	github: 'https://github.com/runnan-pan',
	linkedin: 'https://www.linkedin.com/in/runnan-pan',
} as const;
