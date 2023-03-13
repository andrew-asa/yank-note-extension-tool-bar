<template>
    开发中...
    <el-form :model="activeCard" label-width="80px" v-if="activeCard.id">
        <el-form-item label="文件名字">
            <el-input v-model="activeCard.descript" />
        </el-form-item>
        <el-form-item label="文件名字预览">
            <el-input v-model="activeCard.descript" />
        </el-form-item>
        <el-form-item label="文件内容">
            <el-input v-model="activeCard.template" type="textarea" rows="8" />
        </el-form-item>
        <el-form-item label="内容预览">
            <el-input v-model="formatterTemplate" type="textarea" rows="8" disabled="true" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="saveTemplate">保存</el-button>
            <el-button type="primary" @click="event => applyTemplate(activeCard)">应用</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
import { compile } from '@/utils/template'
import { getCurrentTimestamp } from '@/utils/ghost_base_date'


export default {
    props: {
        // 模板信息
        activeCard: {
            type: Object,
            default: {}
        }
    },
    components: {
    },

    setup() {

        return {
        }
    },
    computed: {

    },
    methods: {

    }
}

</script>
  
  
<style></style>
  