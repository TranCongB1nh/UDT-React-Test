import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { loadHistory } from '../redux/actions/calculatorActions'

const History = () => {
  const dispatch = useDispatch()
  const history = useSelector((state: RootState) => state.history)

  useEffect(() => {
    if (history.length === 0) {
      const savedHistory = JSON.parse(localStorage.getItem('calcHistory') || '[]')
      dispatch(loadHistory(savedHistory))
    }
  }, [dispatch, history.length])

  return (
    <div className='history'>
      <h3>History</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  )
}

export default History
