<script lang="ts">
	import { page, data } from '$lib/state.svelte';

	page.title = 'Home';
	let total = $derived(
		data.list.reduce((prev, curr) => prev + curr.quantity * curr.unitPrice, 0).toLocaleString()
	);
	const tableHeadings = ['No', 'Description', 'Unit', 'Quantity', 'Unit Price', 'Total'];
</script>

<h1>{data.title}</h1>
<h2>{data.subtitle}</h2>

<table>
	<thead>
		<tr>
			{#each tableHeadings as heading}
				<th>{heading}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data.list as item, i}
			<tr>
				<td>{i + 1}</td>
				<td>{item.description}</td>
				<td>{item.unit}</td>
				<td>{item.quantity.toLocaleString()}</td>
				<td class="money">{item.unitPrice.toLocaleString()} RWF</td>
				<td class="money">{(item.quantity * item.unitPrice).toLocaleString()} RWF</td>
			</tr>
		{/each}
	</tbody>
	<tfoot>
		<tr>
			<th>Total</th>
			<th>{total} RWF</th>
		</tr>
	</tfoot>
</table>

<style>
	table {
		border-collapse: collapse;

		.money {
			text-align: right;
		}
	}

	td,
	th {
		padding: 0.5rem 1rem;
		border: 1px solid black;
	}

	@media only print {
		h1,
		h2 {
			margin-top: 1.5rem;
		}
	}

	@media only screen and (width < 41rem) {
		table {
			display: flex;
			width: fit-content;
			max-width: 100%;
			overflow-x: auto;

			tbody {
				display: flex;
			}

			thead {
				position: sticky;
				background-color: white;
				left: 0;
				text-align: left;
			}

			td,
			tfoot th {
				text-wrap: nowrap;
				height: 100%;
				border-left: 0;
				text-align: right;
			}

			td,
			th {
				&:not(:last-child) {
					border-bottom: 0;
				}
			}

			tr {
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
