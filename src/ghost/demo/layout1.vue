<template>
  <Layout v-bind:items=items :innerHgap="innerHgap" :innerVgap="innerVgap" :top="top" :scrollx=true></Layout>
</template>

<script lang="ts">
import HTape from '@/ghost/components/layout/HTape.vue'
import { ElButton } from 'element-plus'
import { h } from 'vue'
import Layout from '@/ghost/components/layout/Layout.vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'

export default {
  name: 'layout1',
  data () {
    return {
      items: [{
        type: 'div',
        props: {
          style: {
            background:'red',
            width:'100px',
            height:'100px'
          }
        }
      }, {
        type: ElButton,
        props: {
          type: 'success',
          icon:Delete,
          class:"custom-delete"
        }
      }],
      innerHgap: 10,
      innerVgap: 10,
      top: 10
    }
  },
  components: {
    Layout,
    HTape
  },
}
</script>

<style scoped>

</style>
