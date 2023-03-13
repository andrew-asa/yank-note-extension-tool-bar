<template>
  <el-row style="height:30px"></el-row>
  <el-row>
    <!-- <el-col :span="5">
      <left ref="left" :templates="templates" @add=addTemplate @edit=editCard @delete=deleteCard></left>
    </el-col> -->
    <el-col :span="5">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="clickTab">
        <el-tab-pane label="模板" name="template">
          <left ref="left" @edit=editCard></left>
        </el-tab-pane>
        <el-tab-pane label="文件" name="file">
          <leftfile ref="leftfile" @edit=editCard></leftfile>
        </el-tab-pane>
        <el-tab-pane label="函数" name="function">Config</el-tab-pane>
      </el-tabs>
    </el-col>

    <el-col :span="16" :offset="1">
      <right :activeCard="activeTemplate" v-if="activeName == 'template'" @save="saveCard" @apply="applyCard"></right>
      <right-file v-if="activeName == 'file'"></right-file>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { onMounted, reactive, ref } from 'vue'
import Left from './left.vue'
import leftfile from './leftfile.vue'
import { getTemplates, saveTemplatesSetting } from './moretemplate'
import Right from './right.vue'
import RightFile from './rightfile.vue'
import { ElMessage } from 'element-plus'
import { Search, Plus } from '@element-plus/icons-vue'


export default {
  props: {

  },
  data() {
    return {
      // 编辑的模板
      activeTemplate: {},
      // 编辑的文件
      activeFile: {},
      // 编辑的函数
      activeFunction: {}
    }
  },
  components: {
    Left, Right, Plus, leftfile, RightFile
  },
  setup(props, context) {
    var self = this
    const activeName = ref('template')
    return {
      activeName
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
    editCard(c) {
      this.activeTemplate = c
    },
    saveCard(t) {
      this.$emit('save', this.activeTemplate)
      // updateTemplate(t, this.templates)
      // @ts-ignore
      this.$refs.left.saveTemplates()
      ElMessage({
        type: 'success',
        message: '保存成功',
      })
    },
    applyCard(t) {
      this.$emit('apply', this.activeTemplate)
    },
    clickTab(n) {

      console.log(n);
    }
  },
}

</script>


<style></style>
