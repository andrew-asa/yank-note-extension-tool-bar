export function get<T> (key: string): T | undefined
export function get<T> (key: string, defaultValue: T): T
export function get<T> (key: string, defaultValue?: T) {
  try {
    return typeof window.localStorage[key] === 'undefined' ? defaultValue : JSON.parse(window.localStorage[key])
  } catch (error) {
    return defaultValue
  }
}

export function set (key: string, value: any) {
  window.localStorage[key] = JSON.stringify(value)
}

export function remove (key: string) {
  window.localStorage.removeItem(key)
}

export function getAll () {
  return window.localStorage
}

export function clear () {
  window.localStorage.clear()
}
