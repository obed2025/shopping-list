<script lang="ts">
	const tableHeadings = ['No', 'Description', 'Unit', 'Quantity', 'Unit Price', 'Total'];
</script>

<thead>
	<tr>
		{#each tableHeadings as heading}
			<th>{heading}</th>
		{/each}
	</tr>
</thead>

<style>
	@media only screen and (width < 41rem) {
		thead {
			position: sticky;
			background-color: white;
			left: 0;
			text-align: left;
		}
	}
</style>
