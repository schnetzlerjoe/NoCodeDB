<script>
  import { goto, layout } from '@roxi/routify';
  import { onMount } from 'svelte';

  async function logoutHandler() {
    await logout()
    $goto("/")
  }

  let protectedPaths = ["/data", "api", "script", "settings"];
  let nonprotectedPaths = ["/", "/login", "signup"];
  let currentuser;
</script>

{#if currentuser}
  <div class="div-block-6">
    <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfdd193869173d29d421b2_NoCodeDB%20Logo%20(2).png" loading="lazy" width="200" alt="NoCodeDB Logo" class="image-6">
    <div id="logged-out-menu" class="loggedoutmenu">
        <div class="container-5 w-container">
          <a href="/data" aria-current="page" class="link-block-menu w-inline-block w--current">
              <div id="home-group" class="menu-select-group">
                <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfa97a8a98d5136962a1c9_home-button.svg" loading="lazy" width="40" alt="" class="image-2">
                <h1 class="heading-4">
                    <strong>Database</strong>
                </h1>
              </div>
          </a>
          <a href="/auth" class="link-block-menu w-inline-block">
              <div id="pricing-group" class="menu-select-group">
                <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfaa970bb6ad5bfa8ab278_credit-card.svg" loading="lazy" width="40" alt="" class="image-2">
                  <h1 class="heading-4">
                    <strong>Auth</strong>
                  </h1>
              </div>
          </a>
          <a href="/api" class="link-block-menu w-inline-block">
              <div id="pricing-group" class="menu-select-group">
                <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfaa970bb6ad5bfa8ab278_credit-card.svg" loading="lazy" width="40" alt="" class="image-2">
                  <h1 class="heading-4">
                    <strong>Api</strong>
                  </h1>
              </div>
          </a>
          <a href="/script" class="link-block-menu w-inline-block">
              <div id="docs-group" class="menu-select-group">
                <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfaa941e8c086acac80131_document.svg" loading="lazy" width="40" alt="" class="image-2">
                <h1 class="heading-4">
                  <strong>Scripts</strong></h1>
              </div>
          </a>
          <a href="/settings" class="link-block-menu w-inline-block">
              <div id="login-group" class="menu-select-group">
                <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfaa90d9e96f82b3044257_user.svg" loading="lazy" width="40" alt="" class="image-2">
                  <h1 class="heading-4">
                    <strong>Settings</strong>
                  </h1>
              </div>
          </a>
        </div>
        <div align="center">
          <button on:click={logoutHandler} class="signup-button">Logout</button>
        </div>
    </div>
  </div>
{:else}
  <div class="div-block-6">
    <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfdd193869173d29d421b2_NoCodeDB%20Logo%20(2).png" loading="lazy" width="200" alt="NoCodeDB Logo" class="image-6">
    <div id="logged-out-menu" class="loggedoutmenu">
        <div class="container-5 w-container">
          <a href="/" aria-current="page" class="link-block-menu w-inline-block w--current">
              <div id="home-group" class="menu-select-group">
                <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfa97a8a98d5136962a1c9_home-button.svg" loading="lazy" width="40" alt="" class="image-2">
                <h1 class="heading-4">
                    <strong>Home</strong>
                </h1>
              </div>
          </a>
          <a href="/pricing" class="link-block-menu w-inline-block">
              <div id="pricing-group" class="menu-select-group">
                <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfaa970bb6ad5bfa8ab278_credit-card.svg" loading="lazy" width="40" alt="" class="image-2">
                  <h1 class="heading-4">
                    <strong>Pricing</strong>
                  </h1>
              </div>
          </a>
          <a href="/docs" class="link-block-menu w-inline-block">
              <div id="docs-group" class="menu-select-group">
                <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfaa941e8c086acac80131_document.svg" loading="lazy" width="40" alt="" class="image-2">
                <h1 class="heading-4"><strong>Docs</strong></h1>
              </div>
          </a>
          <a href="/login" class="link-block-menu w-inline-block">
              <div id="login-group" class="menu-select-group">
                <img src="https://uploads-ssl.webflow.com/60dfa3f4fa638f28f6fea099/60dfaa90d9e96f82b3044257_user.svg" loading="lazy" width="40" alt="" class="image-2">
                  <h1 class="heading-4">
                    <strong>Login</strong>
                  </h1>
              </div>
          </a>
        </div>
        <div align="center">
          <a href="/signup" class="signup-button">Sign Up</a>
        </div>
    </div>
  </div>
{/if}

<style>
.div-block-6 {
    position: fixed;
    display: flex;
    width: 275px;
    min-height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: #fff;
}
.menu-select-group {
    display: flex;
    width: 225px;
    height: 50px;
    margin-bottom: 20px;
    padding-top: 0;
    padding-bottom: 8px;
    padding-left: 10px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    border-radius: 17px;
    cursor: pointer;
}
.link-block-menu {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none;
}
.menu-select-group:hover {
    background-color: #ebf6fe;
}
.image-2 {
    height: 30px;
    margin-top: 10px;
    margin-right: 15px;
}
.container-5 {
    display: block;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.heading-4 {
    font-family: 'PT Serif',serif;
    color: #022f4f;
    font-size: 18px;
    font-weight: 400;
    line-height: 44px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.signup-button {
    width: 150px;
    height: 44px;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    background-color: #1098f7;
    font-family: 'PT Serif',serif;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    display: inline-block;
    padding: 9px 15px;
    color: #fff;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
}
</style>