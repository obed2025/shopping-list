<script lang="ts">
	import { data } from './state.svelte';

	let total = $derived(
		data.additionalExpenses.reduce((prev, curr) => prev + (curr.amount ?? 0), 0)
	);
</script>

<h3>Additional Expenses</h3>

<table>
	<tbody>
		{#each data.additionalExpenses as item, i}
			<tr>
				<td>{i + 1}</td>
				<td>{item.name}</td>
				<td>{item.amount ?? 0} RWF</td>
			</tr>
		{/each}
		<tr>
			<th>Total</th>
			<td>{total.toLocaleString()} RWF</td>
		</tr>
	</tbody>
</table>
