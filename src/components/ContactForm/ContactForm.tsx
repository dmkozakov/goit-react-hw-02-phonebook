import { Component } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { ValidateError } from './ValidateError.styled';
import { StyledForm } from './StyledForm.styled';
import { IContact } from 'components/interfaces/IContact';
import { IFormValues } from 'components/interfaces/IFormValues';

interface Props {
  contacts: IContact[];
  onSubmit: (value: IFormValues) => void;
}

interface FormValues {
  name: string;
  number: string;
}

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export class ContactForm extends Component<Props> {
  handleSubmit = (
    { name, number }: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const isRepeat = this.props.contacts.find(contact => contact.name === name);

    if (isRepeat) {
      return alert(`${name} is already in your contacts`);
    } else {
      this.props.onSubmit({ name, number });
    }

    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <StyledForm>
          <label>
            <p>Name</p>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ValidateError name="name" component="div" />
          </label>
          <label>
            <p>Number</p>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ValidateError name="number" component="div" />
          </label>
          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    );
  }
}
