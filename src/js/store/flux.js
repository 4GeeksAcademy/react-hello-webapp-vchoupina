const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            fetchContacts: async () => {
                const resp = await fetch('https://playground.4geeks.com/contact/docs');
                const data = await resp.json();
                setStore({ contacts: data });
            },
            addContact: async (contact) => {
                const resp = await fetch('https://playground.4geeks.com/contact/docs', {
                    method: 'POST',
                    body: JSON.stringify(contact),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                await resp.json();
                getActions().fetchContacts();
            },
            updateContact: async (id, contact) => {
                const resp = await fetch(`https://playground.4geeks.com/contact/docs/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(contact),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                await resp.json();
                getActions().fetchContacts();
            },
            deleteContact: async (id) => {
                const resp = await fetch(`https://playground.4geeks.com/contact/docs/${id}`, {
                    method: 'DELETE'
                });
                await resp.json();
                getActions().fetchContacts();
            }
        }
    };
};

export default getState;
