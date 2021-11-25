<script setup lang="ts">
import { ref } from 'vue'
import {fetchHello,fetchJSONData} from '@/api/index'
defineProps<{ msg: string }>()
fetchHello().then((r)=>{
  console.log(r.data)
})
function click(msg:string):void{
  alert(msg)
}
fetchJSONData().then((r)=>{
  console.log(r)
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-button @click="click('1234')">Default</el-button>
  </template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
