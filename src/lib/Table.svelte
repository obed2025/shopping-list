<script lang="ts">
	import TableHead from './TableHead.svelte';
	import TableBody from './TableBody.svelte';
	import TableFoot from './TableFoot.svelte';
	import Table2 from './Table2.svelte';
	import type { List } from './types';

	const { data }: { data: List } = $props();

	let subtotal = $derived(
		data.items.reduce((prev, curr) => prev + (curr.quantity ?? 0) * (curr.unitPrice ?? 0), 0)
	);

	let total = $derived(
		subtotal + data.additionalExpenses.reduce((prev, curr) => prev + (curr.amount ?? 0), 0)
	);
</script>

<table>
	<TableHead></TableHead>
	<TableBody {data}></TableBody>
	<TableFoot {data}></TableFoot>
</table>

{#if data.additionalExpenses.length}
	<Table2 {data}></Table2>
	<h1>TOTAL: {total.toLocaleString()} RWF</h1>
{/if}

<style>
	:global(table) {
		border-collapse: collapse;
		margin-block: 1.5rem;
		border: 1px solid transparent;
	}

	:global(td, th) {
		padding: 0.5rem 1rem;
		border: 1px solid black;
	}

	@media only screen and (width < 41rem) {
		table {
			display: flex;
			width: fit-content;
			max-width: 100%;
			overflow-x: auto;

			:global(td, tfoot th) {
				text-wrap: nowrap;
				height: 100%;
				border-left: 0;
				text-align: right;
			}

			:global(td, th) {
				&:not(:last-child) {
					border-bottom: 0;
				}
			}

			:global(tr) {
				display: flex;
				flex-direction: column;
			}
		}
	}

	h1 {
		padding-block: 1rem;
		margin-bottom: 3.5rem;
	}
</style>
