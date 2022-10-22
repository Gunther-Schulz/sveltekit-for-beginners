import { error } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

// import {
// 	createTweet,
// 	getTweets,
// 	removeTweet,
// 	likeTweet,
// } from '$lib/utils/prisma'

export const load: PageServerLoad = async () => {
	// const tweets = await getTweets()
	const tweets = JSON.parse(`
	[
		{
		  "id": 34,
		  "content": "",
		  "likes": 0,
		  "posted": "Sep 19, 2022",
		  "url": "3544f46d10f33",
		  "avatar": "/profile/matia/avatar.webp",
		  "handle": "@joyofcodedev",
		  "name": "matia",
		  "liked": false
		},
		{
		  "id": 33,
		  "content": "gtrgr",
		  "likes": 0,
		  "posted": "Sep 19, 2022",
		  "url": "59cb25be68ae2",
		  "avatar": "/profile/matia/avatar.webp",
		  "handle": "@joyofcodedev",
		  "name": "matia",
		  "liked": false
		}
	  ]
	`)
	console.log(tweets)
	if (!tweets) {
		throw error(400, 'No Tweets Found')
	}

	return { tweets }
}

// export const actions: Actions = {
// 	createTweet: async ({ request }) => {
// 		await createTweet(request)
// 	},
// 	deleteTweet: async ({ request }) => {
// 		await removeTweet(request)
// 	},
// 	likeTweet: async ({ request }) => {
// 		await likeTweet(request)
// 	},
// }
