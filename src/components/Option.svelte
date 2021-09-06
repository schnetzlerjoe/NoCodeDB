<script>
  export let selected = false;
</script>

{#if selected}
<option selected>{text}</option>
{:else}
<option>{text}</option>
{/if}

<style>
</style>