import { createStore } from 'redux'
import { calculatorReducer } from './reducers/calculatorReducer'

const store = createStore(calculatorReducer)

export type RootState = ReturnType<typeof store.getState>

export default store
