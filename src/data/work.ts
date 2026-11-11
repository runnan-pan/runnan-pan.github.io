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
			en: 'Building the websites car dealers run their businesses on — high-volume, configurable, and typed end to end.',
			zh: '建设汽车经销商日常使用的网站：量大、可配置，并且全面使用类型约束。',
		},
		highlights: {
			en: [
				'Core contributor to a multi-tenant Gatsby and React platform serving approximately 1,500 dealer and OEM sites, with 500+ changelog-listed PRs.',
				'Primary contributor to the JavaScript to TypeScript migration: 670+ files converted and about 750 TypeScript files created.',
				'Enabled Gatsby GraphQL Typegen and delivered the React 19, ESLint 10 and TypeScript 6 upgrades.',
				'Built CLI checks that keep per-brand styling consistent across hundreds of shadowed style files, and Claude Code skills for team workflows.',
				'Delivered payment, email-verification and anti-abuse features of an embeddable Next.js purchase flow, using an AI-driven workflow with full human review and testing.',
			],
			zh: [
				'核心贡献者之一，参与一个多租户 Gatsby 与 React 平台，服务约 1,500 个经销商和 OEM 站点，changelog 登记的 PR 超过 500 个。',
				'JavaScript 到 TypeScript 迁移的主要贡献者：转换 670 多个文件，新建约 750 个 TypeScript 文件。',
				'启用 Gatsby GraphQL Typegen，并完成 React 19、ESLint 10 和 TypeScript 6 的升级。',
				'编写命令行检查工具，让数百个 shadow 样式文件的品牌样式保持一致，并为团队编写 Claude Code skills。',
				'在 AI 驱动的开发流程中，负责可嵌入 Next.js 购买流程里的支付、邮箱验证和防滥用功能，并全程审阅与测试。',
			],
		},
	},
	{
		id: 'jobpin',
		href: 'https://www.jiangren.com.au',
		image: images.work.jobpin,
		company: 'Jobpin (JR Academy)',
		role: {
			en: 'Internship project · Team lead',
			zh: '实习项目 · 小组组长',
		},
		period: {
			en: 'Sep — Dec 2022',
			zh: '2022年9月 — 12月',
		},
		location: {
			en: 'Australia',
			zh: '澳大利亚',
		},
		summary: {
			en: 'Led a six-person group on the front end of a hiring platform, as part of JR Academy’s software training program.',
			zh: '在匠人学院（JR Academy）的软件开发培训中，带领 6 人小组开发招聘平台前端。',
		},
		highlights: {
			en: [
				'Ran daily stand-ups and delivered the Resume Builder with Next.js, TypeScript, Redux Toolkit and Konva.',
				'Built drag-and-drop module ordering, rich-text editing, live preview and PDF export across about 25 tickets.',
			],
			zh: [
				'负责每日站会，并用 Next.js、TypeScript、Redux Toolkit 和 Konva 交付简历生成器。',
				'完成拖拽排序、富文本编辑、实时预览和 PDF 导出，涉及约 25 个工单。',
			],
		},
	},
];
