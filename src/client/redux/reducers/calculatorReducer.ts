import { UPDATE_DISPLAY, ADD_HISTORY_ENTRY, CLEAR_DISPLAY, LOAD_HISTORY } from '../actions/calculatorActions'

interface CalculatorState {
  displayValue: string
  history: string[]
}

const initialState: CalculatorState = {
  displayValue: '0',
  history: []
}

export const calculatorReducer = (state = initialState, action: any): CalculatorState => {
  switch (action.type) {
    case UPDATE_DISPLAY:
      return { ...state, displayValue: action.payload }
    case ADD_HISTORY_ENTRY:
      return { ...state, history: [action.payload, ...state.history] }
    case CLEAR_DISPLAY:
      return { ...state, displayValue: '0' }
    case LOAD_HISTORY:
      return { ...state, history: action.payload }
    default:
      return state
  }
}
