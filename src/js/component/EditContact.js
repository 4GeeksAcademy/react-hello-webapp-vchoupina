import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams, useHistory } from 'react-router-dom';

const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [contact, setContact] = useState({ name: '', email: '', phone: '', address: '' });
    const history = useHistory();

    useEffect(() => {
        const contactToEdit = store.contacts.find(contact => contact.id === parseInt(id));
        if (contactToEdit) {
            setContact(contactToEdit);
        }
    }, [id, store.contacts]);

    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        actions.updateContact(id, contact);
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit contact</h1>
            <input name="name" placeholder="Full Name" onChange={handleChange} value={contact.name} />
            <input name="email" placeholder="Email" onChange={handleChange} value={contact.email} />
            <input name="phone" placeholder="Phone" onChange={handleChange} value={contact.phone} />
            <input name="address" placeholder="Address" onChange={handleChange} value={contact.address} />
            <button type="submit">Save</button>
        </form>
    );
};

export default EditContact;
