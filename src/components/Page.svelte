<script lang="ts">
  import { page } from '../lib/state.svelte';
  import Home from './Home.svelte';
  import Edit from './Edit.svelte';

  page.title = 'Home';
</script>

{#if page.title === 'Home'}
  <Home></Home>
{:else if page.title === 'Edit'}
  <Edit></Edit>
{/if}
