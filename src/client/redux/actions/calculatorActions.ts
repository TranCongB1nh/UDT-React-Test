export const UPDATE_DISPLAY = 'UPDATE_DISPLAY'
export const ADD_HISTORY_ENTRY = 'ADD_HISTORY_ENTRY'
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'
export const LOAD_HISTORY = 'LOAD_HISTORY'

export const updateDisplay = (newDisplay: string) => ({
  type: UPDATE_DISPLAY,
  payload: newDisplay
})

export const addHistoryEntry = (entry: string) => ({
  type: ADD_HISTORY_ENTRY,
  payload: entry
})

export const clearDisplay = () => ({
  type: CLEAR_DISPLAY
})

export const loadHistory = (historyEntries: string[]) => ({
  type: LOAD_HISTORY,
  payload: historyEntries,
})
