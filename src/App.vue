<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'
let routes = ref([
  { name: "home", path: "/" },
  { name: "testRoute", path: "/testRoute/30" },
  { name: "testProvide", path: "/testProvide" },
  { name: "testMixin", path: "/testMixin" },
  { name: "testDirectives", path: "/testDirectives" },
  { name: "testAsyncComponent", path: "/testAsyncComponent" },
]);
</script>

<template>
  <router-link v-for="(item, index) in routes" :key="index" class="link" :to="item.path">
    <el-button>{{ item.name }}</el-button>
  </router-link>
  <router-view />
</template>

<style>
.link {
  margin: 0 3px;
}
#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
