<template>
    <el-form :model="repositorie" label-width="80px">
        <el-form-item label="仓库">
            <el-select v-model="repositorie" @change="selectRepositories($event)" clearable placeholder="选择仓库" filterable>
                <el-option v-for="item in repositories" :label="item" :key="item" :value="item"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="路径">
            <el-input v-model="path" />
        </el-form-item>
        <el-form-item label="内容">
            <el-input v-model="fileContent" type="textarea" rows="8" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="getContent">获取</el-button>
            <el-button type="primary" @click="saveContent">保存</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
import { reactive, ref } from 'vue'
import { readFile, readFileContent, writeFile } from '@/utils/yank_note_api'
export default {
    props: {


    },
    components: {

    },
    setup(props) {
        const path = ref("/new.md")
        const fileContent = ref("")
        const repositories = ["blog", "weixin"]
        const repositorie = ref("blog")
        return {
            path, fileContent, repositories, repositorie
        }
    },
    methods: {
        getContent: function () {

            readFileContent(this.repositorie, this.path).then((res) => {
                if (res) {
                    this.fileContent = res
                }
            }).catch((err) => {
                console.log(err)
                alert('请求出错！')
            })
        },
        saveContent: function () {
            if (this.path) {
                writeFile(this.repositorie, this.path, this.fileContent)
            }
        },
        selectRepositories: function () {
        }
    }
}
</script>
<style></style>
