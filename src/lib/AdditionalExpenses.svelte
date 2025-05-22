<script lang="ts">
	import type { List } from './types';
	import Button from './Button.svelte';

	const { data }: { data: List } = $props();
	const reversedExpenses = $derived((() => [...data.additionalExpenses].reverse())());
</script>

<div class="container">
	{#each reversedExpenses as item, i}
		<div>
			<input type="text" bind:value={item.name} placeholder="Title" />
			<input type="number" inputmode="numeric" bind:value={item.amount} placeholder="Amount" />
			<Button
				onclick={() => data.additionalExpenses.splice(data.additionalExpenses.length - (i + 1), 1)}
				icon="trash"
				text="Delete"
			></Button>
		</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}
</style>
