<template>
  <el-row>
    <el-button link @click="$event=>searchIcon(url)"> {{url}}</el-button>
  </el-row>
  <el-button link @click="$event=>searchIcon(furl)"> {{furl}}</el-button>
</template>
<script lang="ts">

export default {
  components: {
  },
  setup() {
     const url = "https://element-plus.gitee.io/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88"
     const furl = "https://fontawesome.com/"
     return {
      url,furl
     }
  },
  methods: {
   searchIcon(url){
      window.open(url)
   }
  }
}

</script>


<style></style>
