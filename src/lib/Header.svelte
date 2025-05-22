<script lang="ts">
	import Button from './Button.svelte';
	import { page } from './state.svelte';
</script>

<header bind:clientHeight={page.headerHeight}>
	<nav>
		<ul>
			<li>
				<a href="/"><i class="fa-solid fa-house"></i> Home</a>
			</li>
			<li>
				<a href="/new"><i class="fa-solid fa-plus"></i> New List</a>
			</li>
		</ul>
		<ul>
			<li>
				<Button onclick={() => print()} icon="print" text="Print" isPrimary hide={!page.print}
				></Button>
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
		color: hsl(0, 0%, 5%);
		font-weight: 600;
		font-size: large;

		&:focus-visible {
			outline: 2px solid black;
		}
	}
</style>
