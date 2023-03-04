<template>
    <div class="base_color" @mouseleave="mouseLeaveTable">
        <div>{{ row }}行 x {{ col }}列</div>
        <div class="base_color_select_root">
            <el-tag class="select_item" v-for="i in 81"
                :class='{ active: isSelect(Math.ceil(i / 9), i % 9 == 0 ? 9 : i % 9) }'
                @mouseenter="selectCell(Math.ceil(i / 9), i % 9 == 0 ? 9 : i % 9)"
                @click="cellClick(Math.ceil(i / 9), i % 9 == 0 ? 9 : i % 9)"></el-tag>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { run_no_exception } from '@/utils/ghost_base_utils'
import { insertTable } from '@/utils/ghost_base_toolbar'

export default {
    props: {

    },
    data() {
        return {
            // 行
            row: 0,
            // 列
            col: 0,
        }
    },
    methods: {
        indexToRow(index) {
            return Math.ceil(index / 9)
        },

        indexToCol(index) {
            return index % 9 == 0 ? 9 : index % 9
        },
        isSelect(row, col) {
            return row <= this.row && col <= this.col
        },
        selectCell: function (row, col) {
            this.row = row
            this.col = col
            // console.log(`select row ${this.row} col ${this.col}`)
        },
        mouseLeaveTable: function () {
            // console.log("mouseLeaveTable")
            this.row = 0
            this.col = 0
        },
        cellClick(row, col) {
            // console.log(`select row ${this.row} col ${this.col}`)
            // run_no_exception(insertTable, row, col)
            insertTable(row, col)
            this.$emit('selectCell', {
                row, col
            })
        }
    },
    setup() {
        const selectIndex = ref(0)
        return {
            selectIndex
        }
    },
}
</script>
  
<style scoped>
.base_color {
    width: 220px;
}

.base_color_select_root {
    width: 220px;
    height: 220px;
}

.base_color_select_root .select_item {
    float: left;
    width: 18px;
    height: 18px;
    margin: 0 4px 4px 0;
    cursor: pointer;

}

.select_item.active {
    background-color: aqua;
}
</style>
  