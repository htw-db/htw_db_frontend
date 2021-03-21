import React from 'react';
import { Button, FormText, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AddInstanceInterface } from '../../types';
import { onlyLettersAndNumbers, onlyLowercase } from '../../utils/validators';

export interface Props {
  isOpen: boolean;
  prefix: string;
  onClose: () => void;
  onSubmit: (instance: AddInstanceInterface) => void;
  forbiddenNames: string[];
}

const AddNewModal: React.FC<Props> = ({ isOpen, prefix, onClose, onSubmit, forbiddenNames }) => {
  const AddInstanceSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Please enter a name')
      .test('test_unique', 'The name is already taken.', (name) => {
        if (name && forbiddenNames.find((forbiddenName) => forbiddenName === `${prefix}${name}`)) {
          return false;
        }
        if (name === undefined) {
          return false;
        }
        return true;
      })
      .test('test_characters', 'Only letters and numbers', (name) =>
        name ? onlyLettersAndNumbers(name) : false,
      )
      .test('test_lowercase', 'Must be lowercase', (name) => (name ? onlyLowercase(name) : false)),
  });

  return (
    <Modal wrapClassName="modal-right" backdrop="static" isOpen={isOpen}>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={AddInstanceSchema}
        onSubmit={(instance) => onSubmit(instance)}
      >
        {({ errors, touched }) => (
          <Form>
            <ModalHeader toggle={onClose}>Add New Instance</ModalHeader>
            <ModalBody>
              <Label>Name</Label>
              <Field className="form-control" name="name" />
              {errors.name && touched.name ? (
                <div className="invalid-feedback d-block">{errors.name}</div>
              ) : null}
              <FormText color="muted">At least 4 letters or numbers.</FormText>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" outline onClick={onClose}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Create
              </Button>{' '}
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
export default AddNewModal;
