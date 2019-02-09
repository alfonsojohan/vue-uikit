<template>
  <div class="MainNav uk-remove-margin">
    <!-- Top navbar for screen > 640px wide -->
    <div class="uk-visible@s">
      <nav class="uk-navbar-container dark-bg" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
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
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNav"
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

