<template>
  <div v-if=existChart class="auto-chart">
    <div class="chart-toolbar">
      <font-awesome-icon class="svg-icon" :icon=faGear @click="setting"></font-awesome-icon>
    </div>
    <div class="chart-show">
      <ECharts :option=option class="chart-root">
      </ECharts>
    </div>
  </div>
  <div v-else class="auto-chart-no-setting">
    <div class="chart-not-setting">
      <div>
        <font-awesome-icon class="empty-chart-setting-icon color_pink" :icon=faChartBar></font-awesome-icon>
      </div>
      <div class="color_pink" @dblclick="setting">双击进入配置界面</div>
    </div>
  </div>
  <div class="dashboard-settings-root">
    <el-drawer v-model="dashboard_setting" :direction="direction" class="dashboard-setting" size="100%"
               :with-header=false>
      <DashBoardSetting @cancel="cancelClick" @save="saveSetting">
      </DashBoardSetting>
    </el-drawer>
  </div>
</template>
<script lang="ts">

import 'echarts'
import ECharts from 'vue-echarts'
import { ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import {
  faGear,
  faChartBar
} from '@fortawesome/free-solid-svg-icons'
import DashBoardSetting from '@/components/dashboard/DashBoardSetting.vue'

export default {
  components: {
    DashBoardSetting,
    ECharts,
    faGear,
    faChartBar,
    ElMessageBox
  },
  setup () {
    let existChart = ref(true)
    let option = ref({
      title: { text: 'Column Chart' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    })
    const dashboard_setting = ref(false)
    const direction = ref('btt')
    const radio1 = ref('Option 1')
    return {
      existChart,
      option,
      faGear,
      faChartBar,
      dashboard_setting,
      direction,
      radio1
    }
  },
  methods: {
    setting () {
      console.log('settings')
      this.dashboard_setting = true
    },
    saveSetting (setting) {
      console.log(setting)
      this.cancelClick()
    },
    cancelClick () {
      this.dashboard_setting = false
      console.log('IChart cancel')
    },
    confirmClick () {

    }
  },
  data () {
    return {}
  },
}
</script>
<style>
.auto-chart {
  position: relative;
  /*width: 400px;*/
}

.chart-toolbar {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
  text-align: right;
  /*opacity: 0;*/
  transition: opacity .2s;
}

.auto-chart:hover .chart-toolbar {
  opacity: 1;
}

.chart-root {
  width: 100%;
  height: 350px;
}

.svg-icon:hover {
  background-color: #e4ebf5
}

.auto-chart-no-setting {
  width: 100%;
  height: 350px;
  text-align: center;
}

.auto-chart-no-setting .chart-not-setting {
  padding: 120px 0;
}

.empty-chart-setting-icon {

  width: 60px;
  height: 60px;
}

.color_pink {
  color: #9ea6b2;
}

.dashboard-setting {
}
</style>
