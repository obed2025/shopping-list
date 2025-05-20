<script lang="ts">
  import { data } from '../lib/state.svelte';
  import Button from './Button.svelte';
  import { page } from '../lib/state.svelte';

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

  let icon = $state('pen');
  let text = $state('Edit');

  function onclick() {
    page.title = page.title === 'Home' ? 'Edit' : 'Home';
    icon = page.title === 'Home' ? 'pen' : 'eye';
    text = page.title === 'Home' ? 'Edit' : 'Preview';
  }
</script>

<header bind:clientHeight={page.headerHeight}>
  <nav>
    <ul>
      <li>
        <Button {icon} isPrimary {onclick} {text}></Button>
      </li>
    </ul>
    <ul>
      <li>
        <Button onclick={importData} icon="upload" text="Import" isPrimary
        ></Button>
      </li>
      <li>
        <Button onclick={saveData} icon="save" text="Save" isPrimary></Button>
      </li>
      <li>
        <Button onclick={() => print()} icon="print" text="Print" isPrimary
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
</style>
