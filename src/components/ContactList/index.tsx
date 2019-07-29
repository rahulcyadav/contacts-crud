import { List, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { IContact } from '../../models/contacts/slice';
import ContactItem from '../ContactItem';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    margin: 'auto',
  },
}));

interface IContactList {
  contactList: IContact[];
}

const ContactList: React.FC<IContactList> = ({ contactList }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {contactList.map(contactItem => (
        <ContactItem key={contactItem.id} {...contactItem} />
      ))}
    </List>
  );
};

export default ContactList;
