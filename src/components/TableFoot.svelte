<script lang="ts">
  import { data } from '../lib/state.svelte';

  let total = $derived(
    data.list
      .reduce(
        (prev, curr) => prev + (curr.quantity ?? 0) * (curr.unitPrice ?? 0),
        0
      )
      .toLocaleString()
  );
</script>

<tfoot>
  <tr>
    <th>Total</th>
    <th>{total} RWF</th>
  </tr>
</tfoot>

<style>
  th {
    text-align: right;
    text-wrap: nowrap;
  }
</style>
