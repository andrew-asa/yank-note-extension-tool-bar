<script lang="ts">
import { h, mergeProps } from 'vue'
import { extend } from 'lodash-es'
import { widgetProps } from '@/ghost/components/core/widget'

export default {
  name: 'Widget',
  props: widgetProps,
  data () {
    return {
      __widgets__: []
    }
  },
  methods: {
    _optimiseGap: function (gap) {
      return (gap > 0 && gap < 1) ? (gap * 100).toFixed(1) + '%' : gap / 1 + 'px'
    },
    /**
     *
     * @param obj
     */
    createWidget (obj) {
      var self = this
      if (obj && obj.type) {
        var child = []
        if (obj.items && obj.items.length) {
          child = obj.items.map(function (item) {
            return self.createWidget(item)
          })
        }
        var props = obj.props ? obj.props : {}
        // props.style = extend({}, props.style ? props.style : {})
        // if (props.width) {
        //   props.style.width = self._optimiseGap(props.width)
        // }
        // if (props.height) {
        //   props.style.height = self._optimiseGap(props.height)
        // }
        return h(obj.type, props, child)
      }
    },
    mergerWidgetAndHeight () {

    },
    addWidget (i, widget) {
      this.__widgets__[i] = widget
    },
    getWidget (i) {
      return this.__widgets__[i]
    },
    getWidgets () {
      return this.__widgets__
    },
    hasWidget (i) {
      return !!this.getWidget(i)
    },
    /**
     *
     * @param vnode
     * @param css {key:value} or key,vaule
     */
    css (vnode, css) {
      const l = arguments.length
      if (!vnode) {
        return vnode.props.style
      }
      if (l == 2) {
        vnode.props.style = extend({}, vnode?.props?.style, css)
      } else if (l == 3) {
        var mc = {}
        mc[arguments[1]] = arguments[2]
        vnode.props.style = extend({}, vnode?.props?.style, mc)
      }
    }
  }
}
</script>

<style scoped>

</style>
