import { Box, Button } from '@sproutsocial/racine';
import {useState} from 'react';
// Phase 1 lazy load modals
import CounterModal from '../features/counter/CounterModal';
import EditorModal from '../features/editor/EditorModal';

export const Layout = ({children}) => {
    const [modalState, setModalState] = useState(null);

    return <Box bg='app.background.base' width='100%' height='100vh'>
        <Box width={1200} margin='auto' pt={400}>
            <Box>
                <Button appearance='primary' onClick={() => setModalState('counter')}>Open Counter</Button>
                <Button appearance='secondary'  onClick={() => setModalState('editor')}>Open Editor</Button>
            </Box>
            {children}
            <CounterModal isOpen={modalState === 'counter'} onClose={() => setModalState(null)} />
            <EditorModal isOpen={modalState === 'editor'} onClose={() => setModalState(null)} />
        </Box>
    </Box>
}