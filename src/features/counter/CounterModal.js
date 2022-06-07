import { useEffect } from "react";
import { Modal } from '@sproutsocial/racine';
// Phase 2 lazy load features
import CounterFeature from './CounterFeature';
// import {LoadableCounterFeature} from './LoadableCounterFeature'

console.log('loading CounterModal');
export const CounterModal = ({isOpen, onClose}) => {
    useEffect(() => {
        console.log('rendering CounterModal');
    }, []);
    return <Modal isOpen={isOpen} onClose={onClose} closeButtonLabel='Close'>
        <Modal.Header
            title="Counter Modal"
            subtitle="A simple counter app."
        />
        <Modal.Content>
            <CounterFeature />
        </Modal.Content>    
    </Modal>
}

export default CounterModal;