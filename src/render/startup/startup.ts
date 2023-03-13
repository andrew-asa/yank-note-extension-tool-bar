import { App } from '@vue/runtime-core'
import elementplus from './elementplus'
import fortawesome from './fortawesome'
import ghost_tool_bar from '@/utils/ghost_utils'

export function start (app: App) {
  elementplus(app)
  fortawesome(app)
  install_ghost_tool_bar()
}



function install_ghost_tool_bar () {
  console.log('install ghost_tool_bar')
  try {
    Object.defineProperty(window, 'ghost_tool_bar', {
      configurable: false,
      writable: false,
      value: ghost_tool_bar,
    })
  } catch (e) {
    console.log('error ghost_tool_bar')
  }
  console.log('success ghost_tool_bar')
}

