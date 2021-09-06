<script>
  import Sheet from './../components/Sheet.svelte';
  import FormulaInput from './../components/FormulaInput.svelte';
  import TableMenu from './../components/TableMenu.svelte';
</script>

<main>
  <div class="block">
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
</main>

<style>
</style>