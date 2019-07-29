import { List, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useCallback } from 'react';
import { IContact } from '../../models/contacts/slice';
import ContactItem from '../ContactItem';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    margin: 'auto',
  },
}));

interface IContactList {
  contactList: IContact[];
  onEdit: (values: IContact) => void;
  onDelete: (id: number) => void;
}

const ContactList: React.FC<IContactList> = ({
  contactList,
  onEdit,
  onDelete,
}) => {
  const classes = useStyles();
  const handleEdit = useCallback(
    (values: IContact) => () => {
      onEdit(values);
    },
    []
  );

  const handleDelete = useCallback(
    (id: number) => () => {
      onDelete(id);
    },
    []
  );

  return (
    <List className={classes.root}>
      {contactList.map(contactItem => (
        <ContactItem
          key={contactItem.id}
          {...contactItem}
          onEdit={handleEdit(contactItem)}
          onDelete={handleDelete(contactItem.id)}
        />
      ))}
    </List>
  );
};

export default ContactList;
