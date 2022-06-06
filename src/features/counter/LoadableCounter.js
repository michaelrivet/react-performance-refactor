import { Suspense } from 'react'
import { lazy } from 'react'

// Phase 3 inject reducer
const loadCounter = () => import('./Counter')
const LazyCounter = lazy(loadCounter)

export const LoadableCounter = (props) => {
    return <Suspense fallback={<div />}>
        <LazyCounter {...props} />
    </Suspense>
}

// Phase 4 export preload