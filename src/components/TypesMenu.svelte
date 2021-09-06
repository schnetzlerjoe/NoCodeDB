<script>
  export let tables = ["Users", "Products"];
</script>

<aside class="menu">
  <ul class="menu-list">
    {#each tables as table}
    <li><a>{table}</a></li>
    {/each}
  </ul>
</aside>

<style>
</style>