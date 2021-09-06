<script>
  import { goto, layout } from '@roxi/routify';
  import DataTab from './../components/DataTab.svelte';
  import TypesTab from './../components/TypesTab.svelte';

  export let tab = "types";
</script>

<main>
  <div class="tabs is-boxed is-medium">
    <ul>
      <li class="is-active">
        <a>
          <span>Types</span>
        </a>
      </li>
      <li>
        <a>
          <span>Data</span>
        </a>
      </li>
      <li>
        <a>
          <span>Privacy</span>
        </a>
      </li>
    </ul>
  </div>
  {#if tab == "types"}
  <TypesTab />
  {:else if tab == "data"}
  <DataTab />
  {:else if tab == "privacy"}
  {/if}
</main>

<style>
  main {
    padding: 15px;
    min-width: 85%;
  }
  a:hover {
    text-decoration: none;
  }
  .tabs.is-boxed li.is-active a {
      border-color: #dbdbdb;
      border-bottom-color: transparent!important;
      color: #1098f7;
  }
</style>