# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.


fetch('/api/pressure_test/get_word_report_stream',{
            method: "GET",
            headers: {
                'Content-Type': "application/octet-stream;charset=UTF-8",

            },
            responseType: 'blob', //blob获取二进制流
        }).then(response => {
            return response.blob()

        }).then(res => {
            const a = document.createElement('a');
            const body = document.querySelector('body');
            let bl = new Blob([res], {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"}); 
            a.download = '压力测试报告前端导出测试.doc';
            a.href = window.URL.createObjectURL(bl);
            a.style.display = 'none';
            body.appendChild(a)
            a.click()
            body.removeChild(a);
            window.URL.revokeObjectURL(a.href);
            that.dbclick = false
        })
