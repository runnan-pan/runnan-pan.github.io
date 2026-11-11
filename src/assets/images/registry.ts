/**
 * Image library
 *
 * Drop files into the folders below, then import and register them here
 * so pages can reuse the same assets.
 *
 *   portraits/  photos of you
 *   work/       company or role images
 *   projects/   project covers
 *   shared/     logos, Open Graph images, icons used across pages
 *
 * You can also import a file directly from its folder when a page
 * needs a one-off image.
 */
import portrait from './portraits/portrait.webp';
import carfacts from './projects/carfacts.svg';
import dealerNav from './projects/dealer-nav.svg';
import dealerSites from './projects/dealer-sites.svg';
import jobpinProject from './projects/jobpin.svg';
import typescript from './projects/typescript.svg';
import ogDefault from './shared/og-default.svg';
import carsales from './work/carsales.svg';
import construction from './work/construction.svg';
import jobpin from './work/jobpin.svg';
import mk from './work/mk.svg';
import tafe from './work/tafe.png';

export const images = {
	portraits: {
		hero: portrait,
	},
	work: {
		carsales,
		jobpin,
		mk,
		tafe,
		construction,
	},
	projects: {
		dealerSites,
		dealerNav,
		carfacts,
		typescript,
		jobpin: jobpinProject,
	},
	shared: {
		ogDefault,
	},
} as const;
