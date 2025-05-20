<script lang="ts">
  import { page } from '../lib/state.svelte';
  import { fade } from 'svelte/transition';

  let scrollY = $state(0);
  const onclick = () => (scrollY = 0);
</script>

<svelte:window bind:scrollY />

{#if scrollY >= page.headerHeight}
  {@render BackToTop()}
{/if}

{#snippet BackToTop()}
  <button aria-label="Back to top" {onclick} transition:fade>
    <span>Back to top</span>
    <i class="fa-solid fa-arrow-up"></i>
  </button>
{/snippet}

<style>
  button {
    all: unset;
    position: fixed;
    bottom: 0.75rem;
    right: 1rem;
    background-color: hsl(0, 0%, 25%);
    color: white;
    border: none;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
  }
</style>
