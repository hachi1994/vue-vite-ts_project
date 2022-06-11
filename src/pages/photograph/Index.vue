

<script lang="ts">
import { reactive, ref, toRef, defineComponent } from 'vue'
import { fetchCatImg } from "@/api";
export default defineComponent({
    name: 'photograph',
    methods: {
        onSuccess(res: any): any {
            this.data.fileList = []
            if (res.code === 0) {

                fetchCatImg().then(r => {
                    r.data.forEach((e:any, i:any) => {
                        this.data.fileList.push({
                            name: e.name,
                            url: e.url
                        })
                    })
                })

            }
        }
    },
    setup() {
        let data = reactive({
            fileList: [] as any[],
            msg: '123'
        })
        fetchCatImg().then(r => {
            r.data.forEach((e:any, i:any) => {
                data.fileList.push({
                    name: e.name,
                    url: e.url
                })
            })
        })
        return {
            data
        }
    }
})
</script>
<template>
    <div>
        {{ data }}
        <el-upload class="upload-demo" action="/api/uploadImg" :on-success="onSuccess" :file-list="data.fileList">
            <el-button size="small" type="primary">Click to upload</el-button>
            <template #tip>
                <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
            </template>

        </el-upload>
        <div>
            <img width="100" :src="item.url" alt="xxx" srcset="" v-for="(item, index) in data.fileList" :key="index" />
        </div>
    </div>
</template>