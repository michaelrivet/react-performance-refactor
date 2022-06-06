import { lazy, Suspense } from 'react'

// Phase 3 inject reducer
const loadPeopleList = () => import('./PeopleList')
const LazyPeopleList = lazy(loadPeopleList)

export const LoadablePeopleList = (props) => {
    return <Suspense fallback={<div />}>
        <LazyPeopleList {...props} />
    </Suspense>
}

// Phase 4 export preload