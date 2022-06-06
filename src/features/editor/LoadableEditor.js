import { lazy, Suspense } from 'react'

// Phase 3 inject reducer
const loadEditor = () => import('./Editor')
const LazyEditor = lazy(loadEditor)

export const LoadableEditor = (props) => {
    return <Suspense fallback={<div />}>
        <LazyEditor {...props} />
    </Suspense>
}

// Phase 4 export preload