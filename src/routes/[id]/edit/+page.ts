import { get } from 'idb-keyval';
import { browser } from '$app/environment';

export async function load({ params }) {
	if (browser) {
		return { list: await get(+params.id) };
	}
}
