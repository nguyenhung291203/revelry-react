type StorageKey = string

export const localStorageUtil = {
  set<T>(key: StorageKey, value: T): void {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error(`Error setting key "${key}" in localStorage:`, error)
    }
  },

  get<T>(key: StorageKey): T | null {
    try {
      const serializedValue = localStorage.getItem(key)
      if (!serializedValue) return null
      return JSON.parse(serializedValue) as T
    } catch (error) {
      console.error(`Error getting key "${key}" from localStorage:`, error)
      return null
    }
  },

  remove(key: StorageKey): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing key "${key}" from localStorage:`, error)
    }
  },

  hasKey(key: StorageKey): boolean {
    try {
      return localStorage.getItem(key) !== null
    } catch (error) {
      console.error(`Error checking existence of key "${key}" in localStorage:`, error)
      return false
    }
  },

  clear(): void {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  }
}
