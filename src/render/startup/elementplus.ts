import { App } from "@vue/runtime-core";
import ElementPlus  from "element-plus";
import  "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default function (app: App) {
    app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
};
