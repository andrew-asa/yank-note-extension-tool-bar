<script lang="ts">

import Layout from '@/ghost/components/layout/Layout.vue'
import { compact, extend, forEach, isNull, isNumber } from 'lodash-es'
import { htapeProps } from '@/ghost/components/layout/htape'
import { VerticalAlign } from '@/ghost/components/layout/layout'
import { any, backAny, isEmptyObject } from '@/ghost/utils/base'

export default {
  name: 'HTape',
  extends: Layout,
  props: htapeProps,
  methods: {
    stroke (root, props) {
      var o = props
      var items = props?.items || []
      var self = this
      forEach(items, (item, i) => {
        var w = self.getChild(i)
        var columnSize = o.columnSize.length > 0 ? o.columnSize[i] : item.width
        self.css(w, {
          position: 'absolute',
          top: self._optimiseGap((item.vgap || 0) + (item.tgap || 0) + o.innerVgap + o.vgap + o.tgap),
          bottom: self._optimiseGap((item.bgap || 0) + (item.vgap || 0) + o.innerVgap + o.vgap + o.bgap),
          width: isNumber(columnSize) ? self._optimiseGap(columnSize) : ''
        })
        if (o.verticalAlign === VerticalAlign.Middle) {
          self.css(w, {
            marginTop: 'auto',
            marginBottom: 'auto'
          })
        } else if (o.verticalAlign === VerticalAlign.Bottom) {
          self.css(w, {
            marginTop: 'auto'
          })
        }
      })

      var left = {}, right = {}
      left[0] = o.innerHgap
      right[items.length - 1] = o.innerHgap

      any(items, function (i, item) {
        if (isEmptyObject(item)) {
          return true
        }
        var w = self.getChild(i)
        var columnSize = o.columnSize.length > 0 ? o.columnSize[i] : item.width
        if (o.columnSize.length > 0) {
          if (item.width >= 1 && o.columnSize[i] >= 1 && o.columnSize[i] !== item.width) {
            columnSize = item.width
          }
        }
        if (isNull(left[i])) {
          var preColumnSize = o.columnSize.length > 0 ? o.columnSize[i - 1] : items[i - 1].width
          left[i] = left[i - 1] + preColumnSize + (items[i - 1].lgap || 0) + (items[i - 1].rgap || 0) + 2 * (items[i - 1].hgap || 0) + o.hgap + o.lgap + o.rgap
        }
        self.css(w, {
          left: self._optimiseGap(left[i] + (item.lgap || 0) + (item.hgap || 0) + o.hgap + o.lgap)
        })

        if (columnSize === '' || columnSize === 'fill') {
          return true
        }
      })
      backAny(items, function (i, item) {
        if (isEmptyObject(item)) {
          return true
        }
        var w = self.getChild(i)
        var columnSize = o.columnSize.length > 0 ? o.columnSize[i] : item.width
        if (isNull(right[i])) {
          var nextColumnSize = o.columnSize.length > 0 ? o.columnSize[i + 1] : items[i + 1].width
          right[i] = right[i + 1] + nextColumnSize + (items[i + 1].lgap || 0) + (items[i + 1].rgap || 0) + 2 * (items[i + 1].hgap || 0) + o.hgap + o.lgap + o.rgap
        }
        self.css(w, {
          right: self._optimiseGap(right[i] + (item.rgap || 0) + (item.hgap || 0) + o.hgap + o.rgap)
        })

        if (columnSize === '' || columnSize === 'fill') {
          return true
        }
      })
    }
  },
  render () {
    Layout.render.apply(this, arguments)
    var el = this.getElement()
    this.stroke(el, this.$props)
    return el
  }
}
</script>

<style scoped>

</style>
