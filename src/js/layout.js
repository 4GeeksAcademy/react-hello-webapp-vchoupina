import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactList from './views/ContactList';
import AddContact from './views/AddContact';
import EditContact from './views/EditContact';
import DeleteConfirmationModal from './components/DeleteConfirmationModal';

const Layout = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ContactList} />
                <Route path="/add" component={AddContact} />
                <Route path="/edit/:id" component={EditContact} />
                <Route path="/delete" component={DeleteConfirmationModal} />
            </Switch>
        </Router>
    );
};

export default Layout;
