<script lang="ts">
import { defineComponent, ref } from "vue";
import { fetchHello } from "@/api";
export default defineComponent({
    name: 'ShowImg',
    data() {
        return {
            page: 'showImg'
        }
    },
    setup() {
        let res = fetchHello()
        const msg = ref("hello world")
        res.then(r => {
            msg.value = r.data
        })
        return {
            msg
        }
    }
})
</script>
<template>
    <div>
        <a-button type="primary">44444</a-button>
        <el-button>44554</el-button>
    </div>
</template>