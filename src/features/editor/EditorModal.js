import { useEffect } from "react";
import { Modal } from '@sproutsocial/racine';
import Editor from './EditorFeature';
// Phase 2 lazy load these
// import {LoadableEditorFeature} from './LoadableEditorFeature'

console.log('loading EditorModal');
export const EditorModal = ({isOpen, onClose}) => {
    useEffect(() => {
        console.log('rendering EditorModal');
    }, []);

    return <Modal isOpen={isOpen} onClose={onClose} closeButtonLabel='Close'>
        <Modal.Header
            title="Editor Modal"
            subtitle="Some feature that has a draft-js editor."
        />
        <Modal.Content>
            <Editor />
        </Modal.Content>    
    </Modal>
}

export default EditorModal;