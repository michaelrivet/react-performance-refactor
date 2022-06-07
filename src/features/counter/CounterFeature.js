import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Text } from '@sproutsocial/racine';
import { decrement, increment, triggerIncrementAsync } from './counterSlice'
import {selectCounterValue} from './selectors';

console.log('loading CounterFeature');

export function CounterFeature() {
	useEffect(() => {
		console.log('Rendering CounterFeature');
	}, []);
  const count = useSelector(selectCounterValue)
  const dispatch = useDispatch()

  return (
		<Box p={600}>
      <Box>
        <Button appearance='primary'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Text as='span' mx={400}>{count}</Text>
        <Button appearance='primary'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </Box>
      <Button appearance='primary'
        aria-label="Increment async"
        onClick={() => dispatch(triggerIncrementAsync())}
        mt={300}
      >
        Increment Async
      </Button>
    </Box>
  )
}

export default CounterFeature;