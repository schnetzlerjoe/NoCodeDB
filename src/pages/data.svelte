<script>
  import { goto, layout } from '@roxi/routify';
  import DataTab from './../components/DataTab.svelte';
  import TypesTab from './../components/TypesTab.svelte';

  export let tab = "types";

  const changeTab = (newTab) => {
    tab = newTab;
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    document.getElementById(newTab + '-tab-button').classList.add('is-active');
  }
</script>

<main>
  <div class="tabs is-boxed is-normal">
    <ul>
      <li class="is-active" on:click={() => changeTab("types")} id="types-tab-button">
        <a>
          <span>Types</span>
        </a>
      </li>
      <li on:click={() => changeTab("data")}  id="data-tab-button">
        <a>
          <span>Data</span>
        </a>
      </li>
      <li on:click={() => changeTab("privacy")}  id="privacy-tab-button">
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
    width: 100%;
    min-height: 100vh;
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