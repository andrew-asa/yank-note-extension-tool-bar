<template>
  <HTape :items="items"></HTape>
</template>

<script lang="ts">
import HTape from '@/ghost/components/layout/HTape.vue'

export default {
  name: 'demo-htape',
  components: { HTape },
  data () {
    return {
      items:[{
        type:'div',
        width:100,
        css:{

        }
      },{
        type:'div',
        width: 200,
      }]
    }
  }
}
</script>

<style scoped>

</style>
