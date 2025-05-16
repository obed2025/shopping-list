<script lang="ts">
	import Header from '$lib/Header.svelte';
	import { page } from '$lib/state.svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';

	const { children } = $props();
	let scrollY = $state(0);
	let innerHeight = $state(0);

	const onclick = () => (scrollY = 0);
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<svelte:window bind:scrollY bind:innerHeight />

<Header></Header>

<main>
	{@render children()}

	{#if scrollY > innerHeight}
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
		bottom: 1rem;
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
