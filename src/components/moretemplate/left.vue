<template>
  <el-row>
    <el-col> <el-input v-model="searchInput" placeholder="搜索模板" :prefix-icon=Search @keyup.enter.native="searchTemplate"
        clearable="true" @clear="$event => doSearchTemplate('')" /></el-col>
  </el-row>
  <div>
    <el-row>
      <el-col :span="10">

      </el-col>
      <el-col :span="4">
        <div class="active-button" @click="addTemplate">
          <el-icon :size="24">
            <Plus />
          </el-icon>
        </div>
      </el-col>
      <el-col :span="10">

      </el-col>
    </el-row>
  </div>

  <el-scrollbar max-height="600px">
    <div :class='{ active: activeId == t.id }' class="card" shadow="hover" v-for="t in showTemplates"
      @click="activeTemplate($event, t)">

      <div style="padding: 14px">
        <span>{{ t.descript }}</span>
        <div class="bottom">
          <time class="time">{{ getTime(t.updateTime) }}</time>
          <!-- <el-button text class="button">Operating</el-button> -->
          <!-- <el-button circle class="svg-icon"> <font-awesome-icon :icon=faEllipsis></font-awesome-icon> </el-button> -->
          <el-popover placement="right-start" trigger="click">
            <el-button link class="svg-icon" :icon="Delete" @click="deleteTemplate($event, t)"> </el-button>

            <template #reference>
              <!-- <el-button circle class="svg-icon"> <font-awesome-icon :icon=faEllipsis></font-awesome-icon> </el-button> -->
              <el-button link class="card-op" :icon="More"> </el-button>
            </template>
          </el-popover>
        </div>

      </div>
      <!-- <el-divider /> -->
    </div>

  </el-scrollbar>
</template>
<script lang="ts">
import { formatDate, getCurrentTimestamp } from '@/utils/ghost_base_date';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import letfoperation from './letfoperation.vue'
import { Search, Plus, Delete, More } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, ref } from 'vue';
import { randomString } from '@/utils/StringUtils';
import { getTemplates, saveTemplatesSetting } from './moretemplate'
export default {
  props: {
    // 模板信息
    templates: {
      type: Array,
      default: []
    }
  },
  components: {
  },
  data() {
    return {
      active: 'active',
      activeId: ''
    }
  },
  setup(props) {
    const searchInput = ref('')
    const ts = []
    for (let i in props.templates) {
      //@ts-ignore
      ts.push(props.templates[i])
    }
    const showTemplates = ref(ts)
    return {
      faEllipsis, searchInput, Search, Plus, Delete, More, showTemplates
    }
  },
  methods: {

    /**
     * 点击模板
     */
    activeTemplate(event, t) {
      // console.log(t)
      this.doActiveTemplete(t)
    },
    doActiveTemplete(t) {
      this.activeId = t.id
      this.$emit("edit", t)
    },
    getTime(t) {
      return formatDate(t)
    },
    addTemplate() {
      var id = randomString(10)
      var updateTime = getCurrentTimestamp()
      var t = {
        id: id,
        descript: "添加模板",
        template: "模板",
        updateTime: updateTime
      }
      this.doAddTemplate(t)
      this.activeTemplate(null, t)
    },
    doAddTemplate(t) {
      var self = this
      self.templates.unshift(t);
      self.showTemplates.unshift(t);
      this.$emit('add', t)
      this.saveTemplates()
    },
    deleteTemplate(enent, t) {
      var self = this
      ElMessageBox.confirm('是否确定删除?')
        .then(() => {
          self.doDeleteTemplate(t)
          ElMessage({
            type: 'success',
            message: '删除成功',
          })
        })
        .catch(() => {
          // catch error
        })

    },
    searchByCondition(ts, fn) {
      var r = []
      for (let i in ts) {
        if (fn(ts[i])) {
          //@ts-ignore
          r.push(ts[i])
        }
      }
      return r
    },
    doSearchTemplate(s) {
      var st = this.searchByCondition(this.templates, (t) => {
        var ds = t.descript
        return ds && ds.indexOf(s) != -1
      })
      this.setTemplates(st)
    },
    searchTemplate() {
      this.doSearchTemplate(this.searchInput)
    },
    doDeleteTemplate(t) {
      var self = this
      self.templates.forEach(function (item, index, arr) {
        if (item.id == t.id) {
          self.templates.splice(index, 1);
        }
      });
      self.showTemplates.forEach(function (item, index, arr) {
        if (item.id == t.id) {
          self.showTemplates.splice(index, 1);
        }
      });
      this.$emit('delete', t)
      this.saveTemplates()
      if (self.showTemplates.length > 0) {
        self.doActiveTemplete(self.showTemplates[0])
      } else {
        self.doActiveTemplete({})
      }
    },
    setTemplates(ts) {
      this.showTemplates.splice(0, this.showTemplates.length)
      for (let t in ts) {
        this.showTemplates.push(ts[t])
        this.templates.push(ts[t])
      }
    },
    saveTemplates() {
      saveTemplatesSetting(this.templates)
    }
  }
}

</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.button {
  padding: 0;
  min-height: auto;
}

.card {
  border-bottom: 1px solid #dde1e3;
}

.card.active {
  background-color: #f4f6f7;
}

.svg-icon:hover {
  background-color: #dde1e3;
}

.active-button {
  transform: scale(1);
}

.active-button:active {
  transform: scale(0.9);
}

.active-button>i:hover {
  background-color: #dde1e3;
}
</style>
