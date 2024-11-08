import { updateDisplay, addHistoryEntry } from '../client/redux/actions/calculatorActions'
import { UPDATE_DISPLAY, ADD_HISTORY_ENTRY } from '../client/redux/actions/calculatorActions'

describe('Calculator Actions', () => {
  it('creates an action to update display', () => {
    const newDisplay = '123'
    const expectedAction = {
      type: UPDATE_DISPLAY,
      payload: newDisplay
    }
    expect(updateDisplay(newDisplay)).toEqual(expectedAction)
  })

  it('creates an action to add history entry', () => {
    const entry = '2 + 2 = 4'
    const expectedAction = {
      type: ADD_HISTORY_ENTRY,
      payload: entry
    }
    expect(addHistoryEntry(entry)).toEqual(expectedAction)
  })
})
