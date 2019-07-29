import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  makeStyles,
  MenuItem,
  Theme,
} from '@material-ui/core';
import { Field, Form, Formik, FormikActions, FormikProps } from 'formik';
import { Select, TextField } from 'formik-material-ui';
import React from 'react';
import { IContact } from '../../models/contacts/slice';

const useStyles = makeStyles((theme: Theme) => ({
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

interface IContactForm {
  initialValues: IContact;
  handleClose: () => void;
  handleSubmit: (values: IContact) => void;
}

const ContactForm: React.FC<IContactForm> = ({
  handleClose,
  handleSubmit,
  initialValues,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <DialogTitle id="add-form">Create new contact</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: IContact, actions: FormikActions<IContact>) => {
            handleSubmit(values);
          }}
          render={(formikBag: FormikProps<IContact>) => (
            <Form>
              <Field
                name="firstName"
                label="First name"
                type="text"
                margin="normal"
                fullWidth
                component={TextField}
              />
              <Field
                name="lastName"
                label="Last name"
                type="text"
                margin="normal"
                fullWidth
                component={TextField}
              />
              <Field
                name="email"
                label="Email"
                type="email"
                margin="normal"
                fullWidth
                component={TextField}
              />
              <Field
                name="phone"
                label="Phone"
                type="text"
                margin="normal"
                fullWidth
                component={TextField}
              />
              <Field
                name="status"
                label="Status"
                fullWidth
                component={Select}
                className={classes.select}
              >
                <MenuItem value={'active'}>Active</MenuItem>
                <MenuItem value={'inactive'}>Inactive</MenuItem>
              </Field>
              <Box m={2} display="flex" justifyContent="center">
                <Button onClick={handleClose} variant="outlined">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  className={classes.saveButton}
                  variant="contained"
                >
                  Save
                </Button>
              </Box>
            </Form>
          )}
        />
      </DialogContent>
    </React.Fragment>
  );
};

export default ContactForm;
