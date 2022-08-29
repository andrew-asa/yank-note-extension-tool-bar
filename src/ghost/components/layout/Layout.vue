<script lang="ts">
import { h } from 'vue'
import Widget from '@/ghost/components/core/Widget.vue'
import { ElButton } from 'element-plus'

import { pixRatio, pixUnit } from '@/ghost/utils/base_uint'
import { extend, isNumber } from 'lodash-es'
import { layoutProps } from '@/ghost/components/layout/layout'

export default {
  name: 'Layout',
  extends: Widget,
  props: layoutProps,
  data () {
    return {}
  },
  methods: {
    /**
     * 优化间隔
     * @param gap
     */

    _init4Margin (root) {
      if (this.$props.top) {
        this.css(root, 'top', isNumber(this.$props.top) ? this.$props.top / pixRatio + pixUnit : this.$props.top)
      }
      if (this.$props.bottom) {
        this.css(root, 'bottom', isNumber(this.$props.bottom) ? this.$props.bottom / pixRatio + pixUnit : this.$props.bottom)
      }
      if (this.$props.left) {
        this.css(root, 'left', isNumber(this.$props.left) ? this.$props.left / pixRatio + pixUnit : this.$props.left)
      }
      if (this.$props.right) {
        this.css(root, 'right', isNumber(this.$props.right) ? this.$props.right / pixRatio + pixUnit : this.$props.right)
      }
    },
    _init4Scroll: function (element) {
      var options = this.$props
      switch (options.scrollable) {
        case true:
        case 'xy':
          this.css(element, 'overflow', 'auto')
          return
        case false:
          this.css(element, 'overflow', 'hidden')
          return
        case 'x':
          this.css(element, {
            'overflow-x': 'auto',
            'overflow-y': 'hidden'
          })
          return
        case 'y':
          this.css(element, {
            'overflow-x': 'hidden',
            'overflow-y': 'auto'
          })
          return
        default :
          break
      }
      if (options.scrollx) {
        this.css(element, {
          'overflow-x': 'auto',
          'overflow-y': 'hidden'
        })
        return
      }
      if (options.scrolly) {
        this.css(element, {
          'overflow-x': 'hidden',
          'overflow-y': 'auto'
        })
      }
    },
    getElement () {
      return this.__gost_element__
    },
    getChild (i) {
      return this.getElement()?.children[i]
    },
    hasChild (i) {

    }
  },
  render: function () {
    let element = this.createWidget({
      type: 'div',
      items: this.items || []
    })
    this.__gost_element__ = element
    this._init4Margin(element)
    this._init4Scroll(element)
    // return h(element)
    return element
  }
}
</script>

<style scoped>

</style>
