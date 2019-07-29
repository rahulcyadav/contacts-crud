import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { IContact } from '../../models/contacts/slice';

const useStyles = makeStyles((theme: Theme) => ({
  avatarEven: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  avatarOdd: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

interface IContactItem extends IContact {}

const ContactItem: React.FC<IContactItem> = ({
  id,
  firstName,
  lastName,
  phone,
  email,
  status,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            className={id % 2 === 0 ? classes.avatarEven : classes.avatarOdd}
          >
            {firstName.charAt(0)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`${firstName} ${lastName}`}
          secondary={
            <React.Fragment>
              <Typography color="textPrimary">{phone}</Typography>
              <Typography color="textPrimary">{email}</Typography>
              <Typography>{status}</Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default ContactItem;
