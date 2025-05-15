<script lang="ts">
	import Header from '$lib/Header.svelte';
	import { page } from '$lib/state.svelte';
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<Header></Header>

<main>
	{@render children()}
</main>
