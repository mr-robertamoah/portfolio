import { useState } from "react";

export default function useModal() {
    const [modalData, setModalData] = useState({show: false, type: ''})

    function closeModal() {
        setModalData(() => ({show: false, type: ''}))
    }

    function showModal(type) {
        setModalData(() => ({show: true, type}))
    }

    return {
        modalData,
        closeModal,
        showModal
    }
}