import { createPortal } from 'react-dom';

export default function Teleport({ children, target }) {

    return createPortal(children, target)
}