<template>
  <div class="uc-login uk-container uk-height-viewport uk-width-1-1">
    <div class="uk-overlay-default uk-position-cover" style="opacity:0.6;"></div>
    <div
      class="uk-card uk-card-default uk-width-large@s uk-align-center uk-border-rounded uk-padding"
      style="opacity: 0.9 ;"
    >
      <p
        class="uk-text-center uk-text-uppercase uk-text-bold uk-text-large uk-margin-remove"
      >Unieccampus</p>
      <p
        class="uk-text-center uk-text-capitalize uk-text-muted uk-margin-remove"
      >Continue to Academic Portal</p>
      <form class="uk-text-center uk-margin">
        <div class="uk-margin">
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" type="text" placeholder="UNITAR Id..." autocapitalize="off">
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon uk-form-icon" uk-icon="icon: lock"></span>
            <input class="uk-input" type="password" placeholder="Your password...">
          </div>
        </div>
        <button class="uk-button uk-width-1-1 uk-button-primary" v-on:click="signIn()">Sign In</button>
        <p
          style="font-size:75%;"
        >Signing in means acceptance of the terms of use as set out by UNITAR IT Policy</p>
      </form>
    </div>
    <span
      style="font-size:80%; color: #666;"
      class="uk-position-bottom-center uk-padding-small"
    >&copy; 2019 UNITAR</span>
  </div>
</template>

<style type="text/css" scoped>
.uc-login {
  background: url("../assets/images/login-bg2.jpg") no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<script>
export default {
  methods: {
    signIn() {
      console.log("Redirect to home page");
      this.$router.push("/");
    }
  }
};
</script>
