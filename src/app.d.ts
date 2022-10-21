/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
	interface Platform {
		env: {
			COUNTER: DurableObjectNamespace
		}
		context: {
			waitUntil(promise: Promise<unknown>): void
		}
		caches: CacheStorage & { default: Cache }
	}
}
