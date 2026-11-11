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
				'Original author (2024) of the Lexus dealer header and footer template, with mega-navigation, model filters, branch tabs and opening-hours dropdowns.',
				'Delivered a feature in the Ruby on Rails and GraphQL CMS (incompatible products), with AI assistance.',
			],
			zh: [
				'核心贡献者之一，参与一个多租户 Gatsby 与 React 平台，服务约 1,500 个经销商和 OEM 站点，changelog 登记的 PR 超过 500 个。',
				'JavaScript 到 TypeScript 迁移的主要贡献者：转换 670 多个文件，新建约 750 个 TypeScript 文件。',
				'启用 Gatsby GraphQL Typegen，并完成 React 19、ESLint 10 和 TypeScript 6 的升级。',
				'编写命令行检查工具，让数百个 shadow 样式文件的品牌样式保持一致，并为团队编写 Claude Code skills。',
				'在 AI 驱动的开发流程中，负责可嵌入 Next.js 购买流程里的支付、邮箱验证和防滥用功能，并全程审阅与测试。',
				'2024 年独立完成 Lexus 经销商站点的页头和页脚模板，包含导航菜单、车型筛选、分店标签页和营业时间下拉。',
				'借助 AI 在 Ruby on Rails 与 GraphQL 的 CMS 中交付了一个功能（不兼容产品）。',
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
	{
		id: 'tafe',
		image: images.work.tafe,
		company: 'TAFE NSW',
		role: {
			en: 'Diploma of Website Development',
			zh: '网站开发大专文凭',
		},
		period: {
			en: 'Jan — Jun 2022',
			zh: '2022年1月 — 6月',
		},
		location: {
			en: 'Sydney, Australia',
			zh: '澳大利亚 · 悉尼',
		},
		summary: {
			en: 'Full-time retraining into software development after leaving construction.',
			zh: '离开建筑行业后，全职转向软件开发的学习。',
		},
		highlights: {
			en: [
				'Built a PHP and MySQL sports-equipment e-commerce site as the course project, with shopping cart, user authentication and admin product maintenance.',
			],
			zh: [
				'课程项目：用 PHP 和 MySQL 做体育用品电商网站，包含购物车、用户认证和后台商品管理。',
			],
		},
	},
	{
		id: 'nick-ceiling',
		image: images.work.construction,
		company: 'Nick Ceiling Pty. Ltd.',
		role: {
			en: 'Project Manager',
			zh: '项目经理',
		},
		period: {
			en: 'Mar 2021 — Jan 2022',
			zh: '2021年3月 — 2022年1月',
		},
		location: {
			en: 'Sydney, Australia',
			zh: '澳大利亚 · 悉尼',
		},
		summary: {
			en: 'Delivered construction projects for clients, working with architects, engineers and subcontractors.',
			zh: '为客户交付建筑项目，与建筑师、工程师和分包商协作。',
		},
		highlights: {
			en: [
				'Delivered projects on time and within budget, building referral-generating relationships with clients and subcontractors.',
				'Planned timelines, resolved conflicts and enforced quality control against design and engineering specifications.',
			],
			zh: [
				'按时并在预算内交付项目，与客户和分包商建立了能带来转介绍的关系。',
				'规划工期、化解冲突，并按设计和工程规范严格把控质量。',
			],
		},
	},
	{
		id: 'yh-interiors',
		image: images.work.construction,
		company: 'YH Interiors And Construction',
		role: {
			en: 'Site Engineer',
			zh: '现场工程师',
		},
		period: {
			en: 'Nov 2019 — Feb 2021',
			zh: '2019年11月 — 2021年2月',
		},
		location: {
			en: 'Sydney, Australia',
			zh: '澳大利亚 · 悉尼',
		},
		summary: {
			en: 'Site engineering for interior fit-out and construction projects.',
			zh: '负责室内装修和建筑项目的现场工程。',
		},
		highlights: {
			en: [
				'Ran site inspections against design, safety and sanitation requirements, coordinating engineers, architects and MEP teams.',
				'Achieved a 95% on-time or ahead-of-schedule project completion rate.',
			],
			zh: [
				'按设计、安全和卫生要求进行现场检查，协调工程师、建筑师和机电团队。',
				'项目按时或提前完成的比例达到 95%。',
			],
		},
	},
	{
		id: 'impero',
		image: images.work.construction,
		company: 'Impero Constructions',
		role: {
			en: 'Junior Contracts Administrator',
			zh: '初级合同管理员',
		},
		period: {
			en: 'Sep 2018 — Oct 2019',
			zh: '2018年9月 — 2019年10月',
		},
		location: {
			en: 'Sydney, Australia',
			zh: '澳大利亚 · 悉尼',
		},
		summary: {
			en: 'Contract administration and procurement support on construction projects.',
			zh: '在建筑项目中负责合同管理和采购支持。',
		},
		highlights: {
			en: [
				'Supported budget and cost control, defect management and document control.',
				'Streamlined subcontractor procurement through tender interviews and design review, informing the Contracts Manager’s decisions.',
			],
			zh: [
				'协助预算和成本控制、缺陷管理与文件管理。',
				'通过招标面谈和设计审查优化分包商采购流程，为合同经理的决策提供支持。',
			],
		},
	},
];
