import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
                <IconAlert />
                <Mensaje />
                <Botones />
                <span className="close absolute top-2 right-2 cursor-pointer" onClick={onClose}>&times;</span>
            </div>
        </div>
    );
}

const IconAlert = () => {
    return (
        <div className="flex flex-col items-center mb-4">
            <svg className="h-16 w-16 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5M11 7h2v6h-2m0 2h2v2h-2"/>
            </svg>
        </div>
    );
}

const Mensaje = () => {
    return <h2 className="font-bold text-2xl mt-4 text-center">Acceso restringido</h2>;
}

const Botones = () => {
    return (
        <div className="flex space-x-4 mt-6 justify-center">
            <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-500">Reenviar certificado</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">Salir de Fast Training</button>
        </div>
    );
}

export default function Info() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="my-12 bg-white p-12 rounded mt-48 w-11/12 h-11/12">
            <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Abrir Modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}