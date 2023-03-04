import { createRouter, createWebHashHistory } from 'vue-router'
import edit_index from '@/components/Edit.vue'
import edit_color_pick from '@/components/eidt/ColorPick.vue'
import edit_background_color_pick from '@/components/eidt/BackgroundPick.vue'
import edit_font_pick from '@/components/eidt/FontPick.vue'
import edit_table_pick from '@/components/eidt/TablePick.vue'
import demo_popup from '@/components/demo/popup.vue'
import demo_popup2 from '@/components/demo/popup2.vue'
import demo_show from '@/components/demo/show.vue'
import demo_condition from '@/components/demo/condition.vue'
import demo_echart from '@/components/demo/echart.vue'
import single_heading from '@/components/eidt/Heading.vue'

import ghost_demo_htape from '@/ghost/demo/htape.vue'
import ghost_t_function from '@/ghost/demo/t_function.vue'
import ghost_layout1 from '@/ghost/demo/layout1.vue'
import ghost_htape1 from '@/ghost/demo/htape1.vue'
import demo_home from '@/components/demo/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: demo_home,
    describe: '首页'
  }, {
    path: '/edit/index',
    name: 'edit_index',
    component: edit_index,
    describe: '工具栏'
  }, {
    path: '/edit/edit_color_pick',
    name: 'edit_color_pick',
    component: edit_color_pick,
    describe: '颜色选择器'
  }, {
    path: '/edit/edit_background_color_pick',
    name: 'edit_background_color_pick',
    component: edit_background_color_pick
  }, {
    path: '/edit/edit_font_pick',
    name: 'edit_font_pick',
    describe: '字体选择',
    component: edit_font_pick
  }, {
    path: '/edit/edit_table_pick',
    name: 'edit_table_pick',
    describe: '表格选择',
    component: edit_table_pick
  }, {
    path: '/demo/popup',
    name: 'demo_popup',
    component: demo_popup
  }, {
    path: '/demo/popup2',
    name: 'demo_popup2',
    component: demo_popup2
  }, {
    path: '/demo/show',
    name: 'demo_show',
    component: demo_show
  }, {
    path: '/demo/condition',
    name: 'demo_condition',
    component: demo_condition
  }, {
    path: '/demo/echart',
    name: 'demo_echart',
    component: demo_echart
  }, {
    path: '/ghost/demo/htape',
    name: 'ghost_demo_htape',
    component: ghost_demo_htape
  }, {
    path: '/ghost/demo/t_function',
    name: 'ghost_t_function',
    component: ghost_t_function
  }, {
    path: '/ghost/demo/ghost_layout1',
    name: 'ghost_layout1',
    component: ghost_layout1
  }, {
    path: '/ghost/demo/ghost_htape1',
    name: 'ghost_htape1',
    component: ghost_htape1
  }, {
    path: '/single/heading',
    name: 'single_heading',
    component: single_heading
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
export { routes }
