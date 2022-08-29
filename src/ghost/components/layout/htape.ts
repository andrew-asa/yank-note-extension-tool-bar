import { extend } from 'lodash-es'
import { layoutProps } from '@/ghost/components/layout/layout'

export const htapeProps = extend({
  hgap: {
    type: [String, Number],
    default: 0,
  },
  vgap: {
    type: [String, Number],
    default: 0,
  },
  lgap: {
    type: [String, Number],
    default: 0,
  },
  rgap: {
    type: [String, Number],
    default: 0,
  },
  tgap: {
    type: [String, Number],
    default: 0,
  },
  bgap: {
    type: [String, Number],
    default: 0,
  },
  columnSize:{
    type: Array,
    default: [],
  },
}, layoutProps)
