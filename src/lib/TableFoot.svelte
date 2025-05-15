<script lang="ts">
	import { data } from './state.svelte';

	let total = $derived(
		data.list.reduce((prev, curr) => prev + curr.quantity * curr.unitPrice, 0).toLocaleString()
	);
</script>

<tfoot>
	<tr>
		<th>Total</th>
		<th>{total} RWF</th>
	</tr>
</tfoot>
