<script lang="ts">
	import TableHead from './TableHead.svelte';
	import TableBody from './TableBody.svelte';
	import TableFoot from './TableFoot.svelte';
</script>

<table>
	<TableHead></TableHead>
	<TableBody></TableBody>
	<TableFoot></TableFoot>
</table>

<style>
	table {
		border-collapse: collapse;
		margin-bottom: 1rem;
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
</style>
