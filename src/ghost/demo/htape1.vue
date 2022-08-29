<template>
  <HTape v-bind:items=items></HTape>
</template>

<script lang="ts">
import HTape from '@/ghost/components/layout/HTape.vue'
import { ElButton,ElInput } from 'element-plus'
import { h } from 'vue'
import { Delete } from '@element-plus/icons-vue'

export default {
  name: 'htape1',
  data () {
    return {
      items: [{
        type: ElInput,
        props: {
          placeholder:"输入内容"
        },
        width:100,
        height:30
      }, {
        type: ElButton,
        props: {
          type: 'success',
          icon: Delete,
          class: 'custom-delete'
        }
      }],
      props: {
        style: { backgroundColor: '#eee' }
      },
      columnSize: [100, "fill"],
    }
  },
  components: {
    HTape
  },
}
</script>

<style scoped>

</style>
