<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	interface Props {
		onclick: EventHandler;
		text: string;
		icon: string;
	}

	const { onclick, icon, text }: Props = $props();
</script>

<button {onclick}> {@render Icon(icon)} {text}</button>

{#snippet Icon(name: string)}
	<i class="fa-solid fa-{name}"></i>
{/snippet}

<style>
	button {
		background-color: #1616d7db;
		border: none;
		color: white;
		font-weight: 600;
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: background-color 0.35s ease-in-out;

		&:hover {
			background-color: #2b59e2e3;
		}
	}

	i {
		margin-right: 0.5rem;
	}
</style>
