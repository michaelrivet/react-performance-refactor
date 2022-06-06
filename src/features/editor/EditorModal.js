import { useEffect } from "react";
import { Modal } from '@sproutsocial/racine';
// Phase 2 lazy load these
import Editor from './Editor';

console.log('loading EditorModal');
export const EditorModal = ({isOpen, onClose}) => {
    useEffect(() => {
        console.log('rendering EditorModal');
    }, []);

    return <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content>
            <Editor />
        </Modal.Content>    
    </Modal>
}

export default EditorModal;