import type { Locale } from '../i18n/config';
import { images } from '../assets/images/registry';

type Localized<T> = Record<Locale, T>;

export type WorkItem = {
	id: string;
	href?: string;
	image: typeof images.work.carsales;
	company: string;
	role: Localized<string>;
	period: Localized<string>;
	location: Localized<string>;
	summary: Localized<string>;
	highlights: Localized<string[]>;
};

export const work: WorkItem[] = [
	{
		id: 'carsales',
		href: 'https://www.carsales.com.au',
		image: images.work.carsales,
		company: 'carsales',
		role: {
			en: 'Software Engineer',
			zh: '软件工程师',
		},
		period: {
			en: 'Feb 2023 — Present',
			zh: '2023年2月 — 至今',
		},
		location: {
			en: 'Sydney, Australia',
			zh: '澳大利亚 · 悉尼',
		},
		summary: {
			en: 'Building the websites car dealers run their businesses on — high-volume, configurable, and fast.',
			zh: '建设汽车经销商日常使用的网站：量大、可配置、并且保持速度。',
		},
		highlights: {
			en: [
				'Helped ship nearly 2,000 dealer websites on a Gatsby and GraphQL stack.',
				'Led the React component migration from JavaScript to TypeScript.',
				'Used a modular, shadowed-file approach so dealer-specific features do not fork the core.',
			],
			zh: [
				'在 Gatsby 与 GraphQL 技术栈上，参与交付了近 2000 个经销商网站。',
				'推动 React 组件从 JavaScript 迁移到 TypeScript。',
				'用模块化和 shadowed files，让经销商定制不必分叉核心代码。',
			],
		},
	},
	{
		id: 'jobpin',
		href: 'https://www.linkedin.com/company/jobpin-ai',
		image: images.work.jobpin,
		company: 'Jobpin',
		role: {
			en: 'Full Stack Developer',
			zh: '全栈开发',
		},
		period: {
			en: 'Jan 2022 — Feb 2023',
			zh: '2022年1月 — 2023年2月',
		},
		location: {
			en: 'Australia',
			zh: '澳大利亚',
		},
		summary: {
			en: 'Led a team of six on a hiring product built with Next.js, Node, and MongoDB.',
			zh: '带领六人团队，用 Next.js、Node 和 MongoDB 做招聘产品。',
		},
		highlights: {
			en: [
				'Owned stand-ups and hands-on delivery of core features, including a resume builder.',
				'Designed REST APIs and worked with Keystone for content and data.',
				'Kept quality in an Agile loop: reviews, refactoring, and CI.',
			],
			zh: [
				'负责站会，并亲手交付核心功能，包括简历生成与预览。',
				'设计 REST API，并用 Keystone 管理内容与数据。',
				'在敏捷节奏里做代码评审、重构和持续集成。',
			],
		},
	},
	{
		id: 'mk-sports',
		image: images.work.mk,
		company: 'MK Sports Warehouse',
		role: {
			en: 'Full Stack Developer',
			zh: '全栈开发',
		},
		period: {
			en: 'Apr 2021 — Jan 2022',
			zh: '2021年4月 — 2022年1月',
		},
		location: {
			en: 'Australia',
			zh: '澳大利亚',
		},
		summary: {
			en: 'Shipped and supported the retail site for a sports equipment business.',
			zh: '为体育用品零售商交付并维护网站。',
		},
		highlights: {
			en: [
				'Built responsive storefronts with PHP, MySQL, HTML, and JavaScript.',
				'Created a WordPress contact-form plugin and custom child themes.',
				'Worked with clients on requirements, then deployed and iterated.',
			],
			zh: [
				'用 PHP、MySQL、HTML 和 JavaScript 做响应式店铺站点。',
				'开发 WordPress 表单插件，并维护自定义子主题。',
				'和客户对齐需求，再完成部署和后续迭代。',
			],
		},
	},
];
