export const loadState = () => {
  try {
    const state = localStorage.getItem('state')
    if (state === null) return undefined
    return JSON.parse(state)
  } catch (e) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.error('[ERROR] Error while saving state to local storage\n' + e)
  }
}