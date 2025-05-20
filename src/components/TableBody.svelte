<script lang="ts">
  import { data } from '../lib/state.svelte';
</script>

<tbody>
  {#each data.list as item, i}
    <tr>
      <td>{i + 1}</td>
      <td>{item.description}</td>
      <td>{item.unit}</td>
      <td>{item.quantity?.toLocaleString()}</td>
      <td class="money">{item.unitPrice?.toLocaleString().concat(' RWF')}</td>
      <td class="money"
        >{((item?.quantity ?? 0) * (item.unitPrice ?? 0))
          .toLocaleString()
          .concat(' RWF')}</td
      >
    </tr>
  {/each}
</tbody>

<style>
  .money {
    text-align: right;
  }

  @media only screen and (width < 41rem) {
    tbody {
      display: flex;
    }
  }
</style>
