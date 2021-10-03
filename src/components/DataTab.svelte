<script>
  import Sheet from './../components/Sheet.svelte';
  import FormulaInput from './../components/FormulaInput.svelte';
  import TableMenu from './../components/TableMenu.svelte';
</script>

<div class="block tab-div">
  <FormulaInput />
</div>
<div class="columns">
  <div class="column is-2">
    <TableMenu />
  </div>
  <div class="column">
    <Sheet />
  </div>
</div>

<style>
  .tab-div {
    width: 100%;
  }
</style>