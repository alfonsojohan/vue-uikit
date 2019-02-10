<template>
  <div class="MainNav uk-remove-margin">
    <!-- Top navbar for screen > 640px wide -->
    <div class="uk-visible@s">
      <nav class="uk-navbar-container dark-bg" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Attendance</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li>
              <button
                class="uk-button uk-button-text uk-padding-small"
                type="button"
                style="color:white"
              >Profile</button>
              <div uk-dropdown="mode: click">
                <ul class="uk-list">
                  <li>
                    <router-link v-bind:to="logoutPath">Sign Out</router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- Hamburger menu for screen < 640px wide -->
    <div class="uk-hidden@s">
      <nav class="uk-navbar uk-navbar-container dark-bg" uk-sticky>
        <div class="uk-navbar-left">
          <a class="uk-navbar-toggle" uk-toggle href="#offcanvas-flip">
            <font-awesome-icon icon="bars" size="2x" style="color:white;"></font-awesome-icon>
          </a>
        </div>
      </nav>
      <div id="offcanvas-flip" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" type="button" uk-close></button>
          <ul class="uk-list uk-list-divider">
            <li>Courses</li>
            <li>Attendance</li>
            <li>Reports</li>
            <li>
              <router-link v-bind:to="logoutPath">Sign Out</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      logoutPath: "login"
    };
  }
};
</script>

<style scoped>
.dark-bg {
  background-color: #0b69f5;
}
.dark-bg li a {
  color: #eeeeee;
}
</style>

