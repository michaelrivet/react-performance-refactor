
import {lazy, Suspense, useState} from 'react';
import { Box, Button } from '@sproutsocial/racine';
import CounterModal from '../features/counter/CounterModal';
import EditorModal from '../features/editor/EditorModal';
// Phase 1 lazy load modals
// const CounterModal = lazy(() => import(/* webpackChunkName: 'CounterModal' */ '../features/counter/CounterModal'));
// const EditorModal = lazy(() => import(/* webpackChunkName: 'EditorModal' */ '../features/editor/EditorModal'));

export const Layout = ({children}) => {
    const [modalState, setModalState] = useState(null);

    return (
        <Box bg='app.background.base' width='100%' height='100vh'>
            <Suspense fallback={<div />}>
                <Box width={1200} margin='auto' pt={400}>
                    <Box>
                        <Button 
                            appearance='primary'
                            onClick={() => setModalState('counter')}
                            onMouseOver={() => {
                                // Phase 4 call preload
                            }}
                        >
                            Open Counter
                        </Button>
                        <Button
                            ml={300}
                            appearance='secondary'
                            onClick={() => setModalState('editor')}
                            onMouseOver={() => {
                                // Phase 4 call preload
                            }}
                        >
                            Open Editor
                        </Button>
                    </Box>
                    {children}
                    <CounterModal isOpen={modalState === 'counter'} onClose={() => setModalState(null)} />
                    <EditorModal isOpen={modalState === 'editor'} onClose={() => setModalState(null)} />
                </Box>
            </Suspense>
        </Box>
    )
}