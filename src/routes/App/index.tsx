import {
  AppBar,
  Box,
  CircularProgress,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import ContactList from '../../components/ContactList';
import useContacts from '../../logichooks/useContacts';

const App: React.FC = () => {
  const { contacts, fetchContactsRequest } = useContacts();

  useEffect(() => {
    fetchContactsRequest();
  },        []);

  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Contacts</Typography>
        </Toolbar>
      </AppBar>
      <main>
        {contacts.data && contacts.data.length ? (
          <ContactList contactList={contacts.data} />
        ) : (
          undefined
        )}
        {contacts.error && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100vh - 64px)"
          >
            <Typography color="error">{contacts.error}</Typography>
          </Box>
        )}
        {contacts.data && !contacts.data.length && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100vh - 64px)"
          >
            <Typography color="textPrimary">No Contacts!</Typography>
          </Box>
        )}
        {contacts.isLoading && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100vh - 64px)"
          >
            <CircularProgress />
          </Box>
        )}
      </main>
    </div>
  );
};

export default App;
