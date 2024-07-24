import React from 'react';

const DeleteConfirmationModal = ({ show, onClose, onConfirm }) => {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Are you sure you want to delete this contact?</h2>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onClose}>No</button>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
