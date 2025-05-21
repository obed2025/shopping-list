<script lang="ts">
	import Header from '$lib/Header.svelte';
	import { page } from '$lib/state.svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import '@fontsource-variable/open-sans'; /* Supports weights 300-800 */
	import '@fortawesome/fontawesome-free/css/all.css';
	import { SITE_TITLE, SITE_DESC, SITE_ICON, SITE_URL, SITE_DOMAIN } from '$lib/consts';

	const { children } = $props();
	let scrollY = $state(0);

	const onclick = () => (scrollY = 0);
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{page.title} - {SITE_TITLE}</title>
	<meta name="description" content={SITE_DESC} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta property="og:description" content={SITE_DESC} />
	<meta property="og:image" content={SITE_ICON} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={SITE_DOMAIN} />
	<meta property="twitter:url" content={SITE_URL} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESC} />
	<meta name="twitter:image" content={SITE_ICON} />

	<!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<svelte:window bind:scrollY />

<Header></Header>

<main>
	{@render children()}

	{#if scrollY >= page.headerHeight}
		{@render BackToTop()}
	{/if}
</main>

{#snippet BackToTop()}
	<button aria-label="Back to top" {onclick} transition:fade>
		<span>Back to top</span>
		<i class="fa-solid fa-arrow-up"></i>
	</button>
{/snippet}

<style>
	button {
		all: unset;
		position: fixed;
		bottom: 0.75rem;
		right: 1rem;
		background-color: hsl(0, 0%, 25%);
		color: white;
		border: none;
		font-size: 1.25rem;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		gap: 0.75rem;
		padding: 0.75rem;
		border-radius: 0.5rem;
	}
</style>
