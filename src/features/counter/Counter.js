import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import {selectCounterValue} from './selectors';

console.log('loading Counter Modal Content')
export function Counter() {
	useEffect(() => {
		console.log('Rendering Counter Modal Content');
	}, []);
  const count = useSelector(selectCounterValue)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter;