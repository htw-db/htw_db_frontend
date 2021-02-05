import React from 'react';
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AddInstanceInterface } from '../../types';

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
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Please enter a name')
      .test('test', 'The name is already taken.', (name) => {
        if (name && forbiddenNames.find((forbiddenName) => forbiddenName === `${prefix}${name}`)) {
          return false;
        }
        if (name === undefined) {
          return false;
        }
        return true;
      }),
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
