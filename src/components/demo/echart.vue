<template>
  <div class="deom-ichart">
    <IChart></IChart>
  </div>
</template>
<script lang="ts">

import IChart from '@/components/dashboard/IChart.vue'

export default {
  components: {
    IChart,
  },
  setup () {

  },
  data () {
    return {
    }
  },
}
</script>
<style>
.deom-ichart{
  width: 400px;
  background: beige;
}
</style>
