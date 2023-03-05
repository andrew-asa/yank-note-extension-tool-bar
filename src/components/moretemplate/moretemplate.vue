<template>
  <el-row style="height:30px"></el-row>
  <el-row>
    <el-col :span="5">
      <left ref="left" :templates="templates" @add=addTemplate @edit=editCard @delete=deleteCard></left>
    </el-col>
    <el-col :span="16" :offset="1">
      <right :activeCard="activeCard" @save="saveCard" @apply="applyCard"></right>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { onMounted, reactive, ref } from 'vue'
import Left from './left.vue'
import { addTemplate, deleteTemplate, getTemplates, updateTemplate } from './moretemplate'
import Right from './right.vue'


export default {
  props: {

  },
  data() {
    return {
      activeCard: {}
    }
  },
  components: {
    Left, Right
  },
  setup(props, context) {
    var self = this
    const templates = reactive([])
    return {
      templates
    }
  },
  mounted() {
    var self = this
    getTemplates((ts) => {
      self.$refs.left.setTemplates(ts)
    }, () => {
      console.log("获取模板失败")
    })
  },
  methods: {
    addTemplate(t) {
      // console.log(JSON.stringify(this.templates))
      addTemplate(t, this.templates)
    },
    editCard(c) {
      this.activeCard = c
    },
    deleteCard(t) {
      // console.log(this.templates)
      deleteTemplate(t, this.templates)
    },
    saveCard(t) {
      this.$emit('save', this.activeCard)
      updateTemplate(t, this.templates)
    },
    applyCard(t) {
      this.$emit('apply', this.activeCard)
    }
  },
}

</script>


<style></style>
