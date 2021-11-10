<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ref} from 'vue'
let routes = ref([
  { name: "home", path: "/" },
]);
</script>

<template>
  <div v-for="(item, index) in routes" :key="index">
    <router-link :to="item.path">{{ item.name }}</router-link>
  </div>
  <router-view />
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
