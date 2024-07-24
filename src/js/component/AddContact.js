import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useHistory } from 'react-router-dom';

const AddContact = () => {
    const { actions } = useContext(Context);
    const [contact, setContact] = useState({ name: '', email: '', phone: '', address: '' });
    const history = useHistory();

    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        actions.addContact(contact);
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add a new contact</h1>
            <input name="name" placeholder="Full Name" onChange={handleChange} value={contact.name} />
            <input name="email" placeholder="Email" onChange={handleChange} value={contact.email} />
            <input name="phone" placeholder="Phone" onChange={handleChange} value={contact.phone} />
            <input name="address" placeholder="Address" onChange={handleChange} value={contact.address} />
            <button type="submit">Save</button>
        </form>
    );
};

export default AddContact;
