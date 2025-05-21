<script lang="ts">
	import { data } from './state.svelte';

	let subtotal = $derived(
		data.list
			.reduce((prev, curr) => prev + (curr.quantity ?? 0) * (curr.unitPrice ?? 0), 0)
			.toLocaleString()
	);
</script>

<tfoot>
	<tr>
		<th>
			{#if data.additionalExpenses.length}
				Subtotal
			{:else}
				Total
			{/if}
		</th>
		<td>{subtotal} RWF</td>
	</tr>
</tfoot>

<style>
	th {
		text-align: right;
		text-wrap: nowrap;
	}
</style>
