<script>
  import TypesRow from './../components/TypesRow.svelte';

  export let rows = [{name: "User", type: "string"},{name: "Income", type: "number"}]
</script>

<ul>
  {#each rows as row}
    <li>
      <TypesRow name={row.name} type={row.type}/>
    </li>
  {/each}
  <li>
    <div style={"margin-top: 15px"} align="center">
      <i class="fas fa-plus fa-2x"></i>
    </div>
  </li>
</ul>

<style>
</style>