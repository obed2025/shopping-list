import { entries } from 'idb-keyval';
import type { List } from '$lib/types';
import { browser } from '$app/environment';

export async function load() {
	if (browser) {
		return { lists: await entries<number, List>() };
	}
}
