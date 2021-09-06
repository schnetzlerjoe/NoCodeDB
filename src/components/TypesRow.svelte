<script>
  import Option from './Option.svelte';

  export let type;
  export let name;

  let options = [
    {type: "String", selected: type == "string" ? true : false},
    {type: "Number", selected: type == "number" ? true : false},
    {type: "Date", selected: type == "date" ? true : false},
    {type: "Currency", selected: type == "currency" ? true : false},
    {type: "Reference", selected: type == "reference" ? true : false},
    {type: "Select", selected: type == "select" ? true : false}
  ]
</script>

<div class="columns">
  <div class="column is-4">
    <input value={name} class="input is-normal" type="text" placeholder="Name of Data Type">
  </div>
  <div class="column is-4">
    <div class="select is-normal">
      <select>
        {#each options as option}
          <option selected={option.selected}>{option.type}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="column is-4 vcenter" align="right">
    {#if name != "uid"}
      <span class="icon-text">
        <span class="icon">
          <i class="fas fa-trash"></i>
        </span>
      </span>
    {/if}
  </div>
</div>

<style>
  .select {
    width: 100%;
  }
  select {
    width: 100%;
  }
  .vcenter {
    display: flex;
    align-items: center;
  }
</style>