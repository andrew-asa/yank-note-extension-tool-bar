import * as base_toolbar from './ghost_base_toolbar'
import * as template from './template'
import * as date from './ghost_base_date'

const ghost_tool_bar = Object.freeze({
  base_toolbar,
  base: {
    template: template,
    date
  }
})

export type Ghost_tool_bar = typeof ghost_tool_bar
export default ghost_tool_bar
