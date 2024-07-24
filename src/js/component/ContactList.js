import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import ContactCard from '../component/ContactCard';
import { useHistory } from 'react-router-dom';

const ContactList = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        actions.fetchContacts();
    }, []);

    const handleAdd = () => {
        history.push('/add');
    };

    return (
        <div>
            <h1>Contact List</h1>
            <button onClick={handleAdd}>Add New Contact</button>
            {store.contacts.map(contact => (
                <ContactCard 
                    key={contact.id} 
                    contact={contact} 
                    onDelete={actions.deleteContact} 
                />
            ))}
        </div>
    );
};

export default ContactList;
