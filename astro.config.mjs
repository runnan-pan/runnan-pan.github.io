// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://runnan-pan.github.io',
	trailingSlash: 'always',
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en-AU',
					zh: 'zh-CN',
				},
			},
		}),
	],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
