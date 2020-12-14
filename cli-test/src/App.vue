<template>
  <div id="app">
    <router-view name="homepage"></router-view>
    <router-view></router-view>
    <router-view name="regist_login"></router-view>
  </div>
</template>

<script>
import regist_login from "./components/Login/regist-login";
import homepage from "./components/Homepage/homepage";
import store from './store'

export default {
  name: "App",
  store,
  components: {
    "regist-login": regist_login,
    homepage: homepage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  width: 100vw;
  background-image: url("../public/bg.png");
}
</style>
