<script setup lang='ts'>
import {ref,onMounted,watch} from 'vue'
import axios from 'axios';
const props = defineProps<{
    msg:string
}>()
console.log(props.msg,243)
</script>
<template>
    <div>
        {{msg}}
    </div>
</template>
