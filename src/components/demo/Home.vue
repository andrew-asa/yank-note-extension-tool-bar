<template>
  <div style="width:400px">
    <el-row>
      <el-col>
        <el-input v-model="searchInput" placeholder="搜索" :prefix-icon=Search @keydown.enter="searchTemplate" clearable="true" @clear="$event=>doSearchTemplate('')"/>
      </el-col>
    </el-row>
  </div>

  
  <el-button link v-for="link in showLinks" type="success" @click="more(link)">{{ link.name }}</el-button>
</template>
<script lang="ts">
import { routes } from '@/render/router';
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { containIngoreCase } from '@/utils/StringUtils';

export default {
  components: {
  },
  setup() {
    const searchInput = ref('')
    const links = []
    const ls = []
    for (let i = 0; i < routes.length; ++i) {
      var r = routes[i]
      var item = {
        // @ts-ignore
        name: r.name || "",
        // @ts-ignore
        path: r.path || ""
      }
      // @ts-ignore
      links.push(item)
      // @ts-ignore
      ls.push(item)
    }
    const showLinks = ref(ls)
    return {
      links, searchInput, Search, showLinks
    }
  },
  methods: {
    more(link) {
      console.log(link.name)
      this.$router.push(link.path)
    },
    searchTemplate() {
      this.doSearchTemplate(this.searchInput)
    },
    testTemplate(search, template) {
      return containIngoreCase(template.name, search) || containIngoreCase(template.path, search)
    },
    doSearchTemplate(s) {
      var links = this.links
      var self = this
      this.showLinks.splice(0, this.showLinks.length)
      for (let i in links) {
        if (this.testTemplate(s, links[i])) {
          self.showLinks.push(links[i])
        }
      }
      console.log(this.showLinks)
    }
  }
}

</script>


<style></style>
