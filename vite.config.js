import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			// these are the aliases and paths to them
			$src: path.resolve('./src'),
		},
	},
}

export default config
