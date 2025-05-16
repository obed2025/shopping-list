<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	interface Props {
		onclick: EventHandler;
		text: string;
		icon: string;
		isPrimary?: boolean;
	}

	const { onclick, icon, text, isPrimary }: Props = $props();
</script>

<button {onclick} class={[{ isPrimary }]}> {@render Icon(icon)} {text}</button>

{#snippet Icon(name: string)}
	<i class="fa-solid fa-{name}"></i>
{/snippet}

<style>
	button {
		--color: hsl(0, 0%, 15%);
		--color-hover: hsla(0, 0%, 20%, 0.7);

		background-color: var(--color);
		border: none;
		color: white;
		font-weight: 600;
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: background-color 0.35s ease-in-out;

		&:hover {
			background-color: var(--color-hover);
		}

		&.isPrimary {
			--color: hsl(0, 0%, 12.5%);
			--color-hover: hsla(0, 0%, 15%, 0.7);
		}
	}

	i {
		margin-right: 0.5rem;
	}
</style>
