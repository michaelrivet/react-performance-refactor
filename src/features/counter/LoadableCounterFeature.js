import { lazy, Suspense } from 'react';
import store from '../../redux/store';

const loadCounterFeature = () => import(/* webpackChunkName: "CounterFeature" */ './CounterFeature');
// Phase 3 inject reducer and saga
const loadCounterFeatureAndInject = () => import(/* webpackChunkName: "CounterFeature" */ './modules').then(
    ({counterSlice, counterSaga}) => {
        // Remember to comment these out in root reducer/sagas
        store.injectSlices({counter: counterSlice.reducer});
        store.injectSaga('counter', counterSaga);
        
        return import(/* webpackChunkName: "CounterFeature" */ './CounterFeature');
    }
)

const LazyCounter = lazy(loadCounterFeature)

export const LoadableCounterFeature = (props) => {
    return <Suspense fallback={<div />}>
        <LazyCounter {...props} />
    </Suspense>
}

// Phase 4 export preload