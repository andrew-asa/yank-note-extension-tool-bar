<template>
  <div class="setting-root">
    <div class="setting-title">
      <el-button type="plain" class="setting-cancel" @click="cancel" link>取消</el-button>
      <el-button type="primary" class="setting-save" @click="save" link>保存</el-button>
    </div>
    <div class="setting-content">

    </div>
  </div>
</template>
<script lang="ts">

import { ElMessageBox } from 'element-plus'

export default {
  components: {},
  setup () {
    return {}
  },
  methods: {
    save () {
      console.log('DashBoardSetting save')
      let setting = this.getSetting()
      let self = this
      ElMessageBox.confirm(`是否保存本次修改 ?`)
        .then(() => {
          self.$emit('save', setting)
        })
        .catch(() => {
          // catch error
        })

    },
    cancel () {
      console.log('DashBoardSetting cancel')
      this.$emit('cancel', {})
    },
    getSetting () {
      return {}
    }
  },
  data () {

  },
}
</script>
<style>
.setting-title {
  position: relative;
}

.setting-cancel {
  position: absolute;
  right: 80px;
  width: 60px;
  height: 30px;
}

.setting-save {
  position: absolute;
  right: 10px;
  width: 60px;
  height: 30px;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
