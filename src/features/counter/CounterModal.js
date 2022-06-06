import { Modal } from '@sproutsocial/racine';
// Phase 2 lazy load these
import Counter from './Counter';

export const CounterModal = ({isOpen, onClose}) => {
    return <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content>
            <Counter />
        </Modal.Content>    
    </Modal>
}

export default CounterModal;