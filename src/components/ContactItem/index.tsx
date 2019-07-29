import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
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
  button: {
    margin: theme.spacing(1),
  },
}));

interface IContactItem extends IContact {
  onEdit: () => void;
  onDelete: () => void;
}

const ContactItem: React.FC<IContactItem> = ({
  id,
  firstName,
  lastName,
  phone,
  email,
  status,
  onEdit,
  onDelete,
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
        <ListItemText>
          <Typography variant="h6">{`${firstName} ${lastName}`}</Typography>
          <Typography>{phone}</Typography>
          <Typography>{email}</Typography>
          <Typography>{status}</Typography>
        </ListItemText>
        <IconButton
          className={classes.button}
          aria-label="edit"
          onClick={onEdit}
        >
          <Edit />
        </IconButton>
        <IconButton
          className={classes.button}
          aria-label="delete"
          onClick={onDelete}
        >
          <Delete />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default ContactItem;
