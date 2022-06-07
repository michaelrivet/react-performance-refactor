import { lazy, Suspense } from 'react'
import store from '../../redux/store';

const loadEditorFeature = () => import('./EditorFeature')
// Phase 3 inject reducer
const loadEditorFeatureAndInject = () => import(/* webpackChunkName: "EditorFeature" */ './modules').then(
    ({editorSlice}) => {
        // Remember to comment these out in root reducer/sagas
        store.injectSlices({editor: editorSlice.reducer});
        
        return import(/* webpackChunkName: "EditorFeature" */ './EditorFeature');
    }
)

const LazyEditor = lazy(loadEditorFeature)

export const LoadableEditorFeature = (props) => {
    return <Suspense fallback={<div />}>
        <LazyEditor {...props} />
    </Suspense>
}

// Phase 4 export preload