<script lang="ts">
	import type { List } from './types';

	const { data }: { data: List } = $props();
	let total = $derived(
		data.additionalExpenses.reduce((prev, curr) => prev + (curr.amount ?? 0), 0)
	);
</script>

<h3 contenteditable>Additional Expenses</h3>

<table>
	<tbody>
		{#each data.additionalExpenses as item, i}
			<tr>
				<td>{i + 1}</td>
				<td>{item.name}</td>
				<td>{item.amount?.toLocaleString() ?? 0} RWF</td>
			</tr>
		{/each}
		<tr>
			<th>Total</th>
			<td>{total.toLocaleString()} RWF</td>
		</tr>
	</tbody>
</table>
