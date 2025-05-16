<script lang="ts">
	import { data } from './state.svelte';
	import Button from './Button.svelte';

	function importData() {
		const data2 = JSON.parse(localStorage.getItem('list') ?? data.str);

		data.title = data2.title;
		data.subtitle = data2.subtitle;
		data.list = data2.list;
	}

	function saveData() {
		localStorage.setItem('list', data.str);
		data.reset();
	}
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/edit">Edit</a>
			</li>
		</ul>
		<ul>
			<li>
				<Button onclick={importData} icon="upload" text="Import"></Button>
			</li>
			<li>
				<Button onclick={saveData} icon="save" text="Save"></Button>
			</li>
			<li>
				<Button onclick={() => print()} icon="print" text="Print"></Button>
			</li>
		</ul>
	</nav>
</header>

<style>
	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	ul {
		display: flex;
		gap: 1rem;

		:global(&:has(button)) {
			flex-wrap: wrap;

			li {
				flex-grow: 1;
			}

			:global(button) {
				width: 100%;
			}
		}
	}

	header {
		padding-block: 1rem;
		position: sticky;
		top: 0;
		background-color: white;
	}

	@media print {
		header {
			display: none;
		}
	}

	nav {
		display: flex;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: blue;
		font-weight: 600;
		font-size: large;
	}
</style>
