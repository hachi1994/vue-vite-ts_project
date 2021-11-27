<script setup lang="ts">
import { reactive, ref } from 'vue'
let fileList = reactive([])
function handlePreview(file: object): any {
    console.log(file)
}
function beforeRemove(file: object, list: any[]): any {
    console.log(file, list)
}
function handleRemove(file: object, list: any[]): any {
    console.log(file, list)
}
</script>
<template>
    <div>
        <el-upload
            class="upload-demo"
            action="/api/uploadImg"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :file-list="fileList"
        >
            <el-button size="small" type="primary">Click to upload</el-button>
            <template #tip>
                <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
            </template>
        </el-upload>
    </div>
</template>