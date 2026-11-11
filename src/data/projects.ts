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
			en: 'A component-library migration that improved maintainability without stopping feature work: 670+ files converted along the way.',
			zh: '在不停功能开发的前提下迁移组件库，提升可维护性，期间转换了 670 多个文件。',
		},
		tags: ['TypeScript', 'React', 'DX'],
	},
	{
		id: 'carfacts',
		image: images.projects.carfacts,
		title: {
			en: 'Embeddable purchase flow',
			zh: '可嵌入的购买流程',
		},
		summary: {
			en: 'A Next.js checkout wizard for vehicle-history reports, with card and PayPal payments, email verification and abuse protection. Built with an AI-driven workflow and reviewed and tested by hand.',
			zh: '用 Next.js 做的车辆历史报告购买向导，支持刷卡和 PayPal 支付、邮箱验证与防滥用。采用 AI 驱动的开发流程，并由我审阅和测试。',
		},
		tags: ['Next.js', 'TypeScript', 'Claude Code'],
	},
	{
		id: 'jobpin-product',
		image: images.projects.jobpin,
		title: {
			en: 'Jobpin Resume Builder',
			zh: 'Jobpin 简历生成器',
		},
		summary: {
			en: 'A drag-and-drop resume builder front end with rich-text editing, live preview and PDF export, built with a six-person team during training.',
			zh: '培训期间与 6 人小组一起做的简历生成器前端，支持拖拽排序、富文本编辑、实时预览和 PDF 导出。',
		},
		tags: ['Next.js', 'TypeScript', 'Redux Toolkit'],
	},
];
