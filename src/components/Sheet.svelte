<script >
  import { onMount } from 'svelte';
  import { rows } from './../stores/rows.js';
  import { columns } from './../stores/columns.js';

  let cols = $columns
  let rowz = $rows

  onMount(async () => {
    const grid = await document.querySelector('revo-grid');
    const plugin = { 'numeric': new Number(), 'date': new Date() };

    grid.columns = await cols;
    grid.source = await rowz;
  })
</script>

<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/@revolist/revogrid@latest/dist/revo-grid/revo-grid.js"></script>
</svelte:head>

<revo-grid style="height: 400px" theme="material" filter="true" resize="true"/>