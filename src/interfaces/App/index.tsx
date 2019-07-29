import {
  AppBar,
  Box,
  CircularProgress,
  Dialog,
  Fab,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  Zoom,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { useCallback, useEffect, useState } from 'react';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import useContacts from '../../logichooks/useContacts';
import { IContact } from '../../models/contacts/slice';

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    position: 'fixed',
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  saveButton: {
    marginLeft: theme.spacing(2),
  },
  select: {
    marginTop: 16,
    marginBottom: 8,
  },
}));

const defaultContact: IContact = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  status: 'active',
};

const App: React.FC = () => {
  const {
    contacts,
    fetchContactsRequest,
    upsertContactRequest,
    deleteContactRequest,
  } = useContacts();

  const classes = useStyles();

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const [tempContact, setTempContact] = useState(defaultContact);

  const handleShowForm = useCallback(() => {
    setIsContactFormOpen(true);
    setTempContact(defaultContact);
  }, []);

  const handleCloseForm = useCallback(() => {
    setIsContactFormOpen(false);
  }, []);

  const handleEdit = useCallback((values: IContact) => {
    setIsContactFormOpen(true);
    setTempContact(values);
  }, []);

  const handleSubmit = useCallback((values: IContact) => {
    setIsContactFormOpen(false);
    upsertContactRequest(values);
  }, []);

  useEffect(() => {
    fetchContactsRequest();
  }, []);

  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Contacts</Typography>
        </Toolbar>
      </AppBar>
      <main>
        {contacts.data && contacts.data.length ? (
          <ContactList
            contactList={contacts.data}
            onEdit={handleEdit}
            onDelete={deleteContactRequest}
          />
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
        <Zoom in={true}>
          <Fab
            aria-label={'Add'}
            className={classes.fab}
            color="secondary"
            onClick={handleShowForm}
          >
            <Add />
          </Fab>
        </Zoom>
      </main>

      <Dialog
        open={isContactFormOpen}
        onClose={handleCloseForm}
        aria-labelledby="Create Contact"
      >
        <ContactForm
          handleClose={handleCloseForm}
          handleSubmit={handleSubmit}
          initialValues={tempContact}
        />
      </Dialog>
    </div>
  );
};

export default App;
