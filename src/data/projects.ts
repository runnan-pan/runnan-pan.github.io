import type { Locale } from '../i18n/config';
import { images } from '../assets/images/registry';

type Localized<T> = Record<Locale, T>;

export type ProjectItem = {
	id: string;
	href?: string;
	image: typeof images.projects.dealerSites;
	title: Localized<string>;
	summary: Localized<string>;
	tags: string[];
};

export const projects: ProjectItem[] = [
	{
		id: 'dealer-sites',
		image: images.projects.dealerSites,
		title: {
			en: 'Dealer websites at scale',
			zh: '规模化经销商网站',
		},
		summary: {
			en: 'A Gatsby and GraphQL system that generates fast, dealer-specific sites from shared components and live data.',
			zh: '用 Gatsby 和 GraphQL，从共享组件和实时数据生成快速、可按经销商定制的站点。',
		},
		tags: ['Gatsby', 'GraphQL', 'TypeScript'],
	},
	{
		id: 'typescript-migration',
		image: images.projects.typescript,
		title: {
			en: 'JavaScript to TypeScript',
			zh: 'JavaScript 到 TypeScript',
		},
		summary: {
			en: 'A component-library migration that improved maintainability without stopping feature work, including reviews and team training.',
			zh: '在不停功能开发的前提下迁移组件库，并配合评审和团队培训，提升可维护性。',
		},
		tags: ['TypeScript', 'React', 'DX'],
	},
	{
		id: 'jobpin-product',
		image: images.projects.jobpin,
		title: {
			en: 'Jobpin hiring product',
			zh: 'Jobpin 招聘产品',
		},
		summary: {
			en: 'A Next.js hiring platform with resume building, REST APIs, and a six-person delivery loop.',
			zh: '用 Next.js 做的招聘平台，包含简历生成、REST API，以及六人团队的交付节奏。',
		},
		tags: ['Next.js', 'Node.js', 'MongoDB'],
	},
];
