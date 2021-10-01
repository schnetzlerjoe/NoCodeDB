<!-- routify:options preload="proximity" -->
<script>
  import { goto, layout } from '@roxi/routify';
  import Menu from './../components/Menu.svelte';

  let protectedPaths = ["/data", "api", "script", "settings"];
  let nonprotectedPaths = ["/", "/login", "signup"];
  let currentuser;
</script>

<main>
  <div class="columns main-col">
    <div class="menu">
      <Menu currentuser={currentuser}/>
    </div>
    <div class="main-div">
      <slot />
    </div>
  </div>
</main>

<style>
  main {
    background-color: #fafafa;
    min-height: 100vh;
  }
  .column {
    padding: 0px
  }
  .columns {
    margin: 0px
  }
  .main-col {
    min-height: 100vh;
  }
  .main-div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>