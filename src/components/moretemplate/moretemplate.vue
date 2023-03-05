<template>
  <el-row>
    <el-col :span="4">
      <left :templates="templates" @add=addTemplate @edit=editCard @delete=deleteCard></left>
    </el-col>
    <el-col :span="16" :offset="1">
      <right :activeCard="activeCard" @save="saveCard" @apply="applyCard"></right>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import Left from './left.vue'
import { addTemplate, deleteTemplate, getTemplates, updateTemplate } from './moretemplate'
import Right from './right.vue'


export default {
  props: {
    // 模板信息
    templates: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      activeCard: {}
    }
  },
  components: {
    Left, Right
  },
  stetup() {

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
    },
    setTemplates(ts) {
      this.templates.splice(0, this.showTemplates.length)
      for (let t in ts) {
        this.templates.push(ts[t])
      }
    }
  },
  created: function () {
    var self = this
    getTemplates((ts) => {
      self.setTemplates(ts)
    }, () => {
      console.log("获取模板失败")
    })
  }
}

</script>


<style></style>
