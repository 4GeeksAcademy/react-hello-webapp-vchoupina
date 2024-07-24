import React from 'react';
import { useHistory } from 'react-router-dom';

const ContactCard = ({ contact, onDelete }) => {
    const history = useHistory();
    
    const handleEdit = () => {
        history.push(`/edit/${contact.id}`);
    };

    return (
        <div className="contact-card">
            <img src={contact.avatar} alt={contact.name} />
            <div>
                <h2>{contact.name}</h2>
                <p>{contact.address}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            </div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    );
};

export default ContactCard;
