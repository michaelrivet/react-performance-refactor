import { useEffect } from "react";
import { Modal } from '@sproutsocial/racine';
// Phase 2 lazy load these
import Counter from './Counter';

console.log('loading CounterModal');
export const CounterModal = ({isOpen, onClose}) => {
    useEffect(() => {
        console.log('rendering CounterModal');
    }, []);
    return <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content>
            <Counter />
        </Modal.Content>    
    </Modal>
}

export default CounterModal;