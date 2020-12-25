<template>
  <div id="app">
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import store from "./store";

export default {
  name: "App",
  store,
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
  overflow-X: hidden;
  background-image: url("../public/bg.png");
}
</style>
