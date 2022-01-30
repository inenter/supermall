<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
  import MainTarBar from "components/content/mainTabbar/MainTarBar";

  export default {
    name: 'app',
    components: {
      MainTarBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
