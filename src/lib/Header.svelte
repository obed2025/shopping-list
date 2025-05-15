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
</style>
