import React from 'react';
import { FormGroup, Label, Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { LdapCredentialsInterface } from '../../types';
import { isLowerCase, onlyLettersAndNumbers } from '../../utils/validators';

export interface Props {
  loading: boolean;
  error?: string;
  onSubmit: (ldapCredentials: LdapCredentialsInterface) => void;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your username')
    .test('test_characters', 'Only letters and numbers', (name) =>
      name ? onlyLettersAndNumbers(name) : false,
    )
    .test('test_lowercase', 'Only lowercase', (name) => (name ? isLowerCase(name) : false)),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter password'),
});

const LoginForm: React.FC<Props> = ({ loading, error, onSubmit }) => {
  const handleOnSubmit = (ldapCredentials: LdapCredentialsInterface) => {
    onSubmit(ldapCredentials);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={handleOnSubmit}
    >
      {({ errors, touched }) => (
        <Form className="av-tooltip tooltip-label-bottom">
          <FormGroup className="form-group has-float-label">
            <Label>Username</Label>
            <Field className="form-control" name="username" placeholder="s000.." />
            {errors.username && touched.username ? (
              <div className="invalid-feedback d-block">{errors.username}</div>
            ) : null}
          </FormGroup>
          <FormGroup className="form-group has-float-label">
            <Label>Password</Label>
            <Field
              className="form-control"
              type="password"
              name="password"
              suggested="current-password"
            />
            {errors.password && touched.password && (
              <div className="invalid-feedback d-block">{errors.password}</div>
            )}
          </FormGroup>
          <div className="d-flex justify-content-between align-items-center">
            <a href="https://www.htw-berlin.de/impressum/">Impressum</a>
            <a href="https://www.htw-berlin.de/datenschutz/">Datenschutz</a>

            <Button
              type="submit"
              color={error ? 'warning' : 'primary'}
              className={`btn-shadow btn-multiple-state ${loading ? 'show-spinner' : ''}`}
              size="lg"
            >
              <span className="spinner d-inline-block">
                <span className="bounce1" />
                <span className="bounce2" />
                <span className="bounce3" />
              </span>
              <span className="label">{error ? 'Try again' : 'Login'}</span>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
