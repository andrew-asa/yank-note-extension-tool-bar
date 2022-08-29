<!--<template>-->
<!--  <el-button type="primary"> 显示</el-button>-->
<!--</template>-->
<script lang="ts">
import { useStore } from 'vuex'
import { reactive, toRefs, h } from 'vue'

import { ElButton } from 'element-plus'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import Layout from '@/ghost/components/layout/Layout.vue'

export default {
  components: {},
  extends: Layout,
  setup () {

  },
  methods: {
    // createWidget (obj) {
    //   var self = this
    //   if (obj && obj.type) {
    //     var child = []
    //     if (obj.items && obj.items.length) {
    //       child = obj.items.map(function (item) {
    //         return self.createWidget(item)
    //       })
    //     }
    //     return h(obj.type, obj.props ? obj.props : {}, child)
    //   }
    // }
  },
  render () {
    let success = this.createWidget({
      type: 'div',
      items: [{
        type: ElButton,
        props: {
          type: 'success',
          icon:Delete,
          class:"custom-delete"
        }
      }],
      props:{
        custom:true
      }
    })
    return h('div',{},[success])
    // return h(ElButton, { type: 'success' }, '隐藏')

  }
}

</script>


<style>
</style>
