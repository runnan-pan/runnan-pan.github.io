import type { Locale, RouteKey } from './config';

export const ui = {
	en: {
		nav: {
			home: 'Home',
			about: 'About',
			work: 'Work',
			projects: 'Projects',
			contact: 'Contact',
		},
		meta: {
			siteTitle: 'Runnan Pan',
			homeTitle: 'Runnan Pan — Software Engineer',
			aboutTitle: 'About — Runnan Pan',
			workTitle: 'Work — Runnan Pan',
			projectsTitle: 'Projects — Runnan Pan',
			contactTitle: 'Contact — Runnan Pan',
			homeDescription:
				'Software engineer in Sydney. I build fast, maintainable web products — from dealer sites at scale to TypeScript migrations that stick.',
			aboutDescription: 'About Runnan Pan, a software engineer based in Sydney.',
			workDescription: 'Selected experience across carsales, Jobpin, and earlier product work.',
			projectsDescription: 'Selected projects and the problems they were built to solve.',
			contactDescription: 'Get in touch with Runnan Pan.',
		},
		home: {
			kicker: 'Software Engineer · Sydney',
			headline: 'I build web products that stay fast after launch week.',
			lede: 'Currently at carsales, working on the sites car dealers run their businesses on. Typed code, clear ownership, and pages that still perform at scale.',
			aboutCta: 'About me',
			workCta: 'See work',
			featuredTitle: 'Selected work',
			featuredMore: 'All experience',
		},
		about: {
			title: 'About',
			p1: 'I am a software engineer in Sydney, currently at carsales. I work on the web products that car dealers rely on every day — configurable sites, shipped at scale, and kept fast as they grow.',
			p2: 'Before that I led a small team at Jobpin, building hiring product with Next.js. Earlier I worked across full-stack delivery: React, TypeScript, PHP, and the unglamorous work of making a site actually ship.',
			p3: 'I care about the things that make software last: migrating JavaScript to TypeScript without stalling the team, designing features that can be tailored without forking the codebase, and leaving pages faster than I found them.',
			nowTitle: 'Right now',
			nowBody: 'Building and maintaining dealer websites at carsales. Based in Sydney.',
		},
		work: {
			title: 'Work',
			intro: 'A short history of the teams and products I have helped ship.',
		},
		projects: {
			title: 'Projects',
			intro: 'A few pieces of work that show how I like to build.',
		},
		contact: {
			title: 'Contact',
			intro: 'The fastest way to reach me is LinkedIn. GitHub is where the code lives.',
			linkedin: 'LinkedIn',
			github: 'GitHub',
			email: 'Email',
		},
		footer: {
			rights: 'All rights reserved.',
		},
		notFound: {
			title: 'Page not found',
			body: 'That page does not exist, or it has moved.',
			home: 'Back home',
		},
		lang: {
			switchTo: 'Switch to Chinese',
			label: 'Language',
		},
	},
	zh: {
		nav: {
			home: '首页',
			about: '关于',
			work: '经历',
			projects: '项目',
			contact: '联系',
		},
		meta: {
			siteTitle: '潘润楠',
			homeTitle: '潘润楠 — 软件工程师',
			aboutTitle: '关于 — 潘润楠',
			workTitle: '经历 — 潘润楠',
			projectsTitle: '项目 — 潘润楠',
			contactTitle: '联系 — 潘润楠',
			homeDescription:
				'在悉尼工作的软件工程师。我做能够长期保持速度的网页产品：从规模化的经销商站点，到能落地的 TypeScript 迁移。',
			aboutDescription: '关于潘润楠，一名在悉尼工作的软件工程师。',
			workDescription: 'carsales、Jobpin 以及更早的产品工作经历。',
			projectsDescription: '部分项目，以及它们要解决的问题。',
			contactDescription: '联系潘润楠。',
		},
		home: {
			kicker: '软件工程师 · 悉尼',
			headline: '我做上线之后仍然快的网页产品。',
			lede: '目前在 carsales，参与汽车经销商日常使用的网站。类型、清晰的职责边界，以及能规模化运行的页面。',
			aboutCta: '关于我',
			workCta: '查看经历',
			featuredTitle: '部分经历',
			featuredMore: '全部经历',
		},
		about: {
			title: '关于',
			p1: '我是一名在悉尼工作的软件工程师，目前在 carsales。我参与的是汽车经销商每天都在用的网站产品：可配置、能规模化交付，并且随着功能增加仍然保持速度。',
			p2: '此前我在 Jobpin 带过一个小团队，用 Next.js 做招聘产品。再往前，我做过完整的全栈交付：React、TypeScript、PHP，以及把一个站点真正上线的那些具体工作。',
			p3: '我更在意让软件能用得久的事情：把 JavaScript 迁到 TypeScript 而不拖垮团队，做出能按客户定制、又不必分叉代码库的功能，以及离开时页面比接手时更快。',
			nowTitle: '现在',
			nowBody: '在 carsales 建设和维护经销商网站。生活在悉尼。',
		},
		work: {
			title: '经历',
			intro: '我参与过的团队和产品，按时间排列。',
		},
		projects: {
			title: '项目',
			intro: '几件能说明我怎么做东西的工作。',
		},
		contact: {
			title: '联系',
			intro: '最快的联系方式是 LinkedIn。代码在 GitHub。',
			linkedin: 'LinkedIn',
			github: 'GitHub',
			email: '邮箱',
		},
		footer: {
			rights: '保留所有权利。',
		},
		notFound: {
			title: '没有这个页面',
			body: '这个地址不存在，或者已经换了位置。',
			home: '回到首页',
		},
		lang: {
			switchTo: '切换到英文',
			label: '语言',
		},
	},
} as const;

export type UiDictionary = (typeof ui)[Locale];

export function useTranslations(lang: Locale) {
	const dict = ui[lang];

	return {
		nav: dict.nav,
		meta: dict.meta,
		home: dict.home,
		about: dict.about,
		work: dict.work,
		projects: dict.projects,
		contact: dict.contact,
		footer: dict.footer,
		notFound: dict.notFound,
		lang: dict.lang,
		pageTitle(route: RouteKey): string {
			const titles: Record<RouteKey, string> = {
				home: dict.meta.homeTitle,
				about: dict.meta.aboutTitle,
				work: dict.meta.workTitle,
				projects: dict.meta.projectsTitle,
				contact: dict.meta.contactTitle,
			};
			return titles[route];
		},
		pageDescription(route: RouteKey): string {
			const descriptions: Record<RouteKey, string> = {
				home: dict.meta.homeDescription,
				about: dict.meta.aboutDescription,
				work: dict.meta.workDescription,
				projects: dict.meta.projectsDescription,
				contact: dict.meta.contactDescription,
			};
			return descriptions[route];
		},
	};
}
