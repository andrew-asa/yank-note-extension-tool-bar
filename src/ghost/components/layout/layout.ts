import { extend } from 'lodash-es'
import { widgetProps } from '@/ghost/components/core/widget'

export const layoutProps = extend({
  scrollable: {
    type: [String, Boolean],
    default: null,
  },
  scrollx: {
    type: Boolean,
    default: false,
  },
  scrolly: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: [],
  },
  innerHgap: {
    type: [String, Number],
    default: 0,
  },
  innerVgap: {
    type: [String, Number],
    default: 0,
  },
  verticalAlign: {
    type: String,
    default: ''
  }
}, widgetProps)

export const VerticalAlign = {
  Top: 'top',
  Middle: 'middle',
  Bottom: 'bottom'
}
