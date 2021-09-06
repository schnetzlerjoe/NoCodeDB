<script>
  import { goto, layout, redirect } from '@roxi/routify';

  const login = (email, password) => {
      loginWithEmailPassword(email, password)
      .catch((error) => {
          if(error.message === "Firebase: Error (auth/wrong-password).") {
              alert("Wrong password. Please try again.");
          } else if (error.message === "Firebase: Error (auth/user-not-found).") {
              alert("This user does not exist.");
          } else {
              alert(error.message)
          }
      })
  }
  async function loginHandler(e) {
      var email = e.target[0].value
      var pass = e.target[1].value
      await login(email, pass)
      $goto("/")
  }
</script>

<div class="div-block-9">
  <div class="form-block-2 w-form">
    <form id="signinForm" name="email-form" data-name="Email Form" class="form-group" on:submit|preventDefault={e => loginHandler(e)}>
      <label for="email" class="field-label">Email</label>
      <input type="email" class="login-field w-input" maxlength="256" name="email" data-name="email" id="signinemail" required="">
      <label for="password" class="field-label">Password</label>
      <input type="password" class="login-field w-input" maxlength="256" name="password" data-name="password" placeholder="" id="signinpass" required="">
      <input type="submit" value="Login" class="login-button w-button">
      <a href="/signup" class="link-2">Don't Have An Account</a>
    </form>
  </div>
</div>

<style>
.form-group {
    display: flex;
    width: 100%;
    padding: 60px 80px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: stretch;
    align-items: stretch;
}
.w-form {
    margin: 0 0 15px;
}
.div-block-9 {
    width: 80%;
    margin-top: 0;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 4px 4px 13px 0 rgb(0 0 0 / 7%);
}
.header-call-action {
    margin-bottom: 20px;
    color: #fff;
    font-size: 60px;
    line-height: 60px;
    font-weight: 600;
    text-align: center;
}
.field-label {
    margin-bottom: 30px;
    font-family: 'PT Serif',serif;
    color: #022f4f;
    font-size: 36px;
    text-align: left;
    display: block;
    font-weight: 700;
}
.column {
    padding: .3rem;
}
.link-2 {
    margin-top: 30px;
    font-family: 'PT Serif',serif;
    color: #1098f7;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
}
.login-field {
    width: 100%;
    height: 60px;
    margin-bottom: 30px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 15px;
    font-family: 'PT Serif',serif;
    font-size: 18px;
}
.login-button {
    width: 200px;
    height: 60px;
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
.margin-top-fifteen {
    margin-top: 15px;
}
.input {
    height: 60px;
}
.signup-login-toggle-text {
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
}
</style>