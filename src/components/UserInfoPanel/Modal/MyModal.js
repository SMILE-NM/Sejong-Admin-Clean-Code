import { useState, useEffect } from 'react';
import {
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} from '../../api/apiSlice';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import Spinner from '../../Messages/Spinner';
import { Error, Success } from './messages/Messages';

function StudentModal({
  show,
  setShow,
  studentId,
  studentData,
  isSubmitting,
  setSubmitting,
  actionType = 'UPDATE',
  navigate,
}) {
  const [
    updateStudent,
    {
      isLoading: isUpdating,
      isError: isUpdateError,
      isSuccess: isUpdateSuccess,
    },
  ] = useUpdateStudentMutation();
  const [
    deleteStudent,
    {
      isLoading: isDeleting,
      isError: isDeleteError,
      isSuccess: isDeleteSuccess,
    },
  ] = useDeleteStudentMutation();

  const [confirmationText, setConfirmationText] = useState('');
  const [isActionSuccessful, setIsActionSuccessful] = useState(false);
  const [autoCloseTimeoutId, setAutoCloseTimeoutId] = useState(null); // Состояние для хранения идентификатора таймера
  const [ErrorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (isUpdateSuccess || isDeleteSuccess) {
      setIsActionSuccessful(true);
      setSubmitting(false);

      const id = setTimeout(() => {
        handleClose();
      }, 10000);
      setAutoCloseTimeoutId(id);
    }

    return () => clearTimeout(autoCloseTimeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateSuccess, isDeleteSuccess, setSubmitting]);

  const performAction = async () => {
    if (actionType === 'UPDATE') {
      await handleUpdateStudent();
    } else if (actionType === 'DELETE') {
      await handleDeleteStudent();
    }
  };

  const handleUpdateStudent = async () => {
    if (confirmationText === 'YES') {
      await updateStudent({
        id: studentId,
        updatedStudent: studentData,
      }).unwrap();
    } else {
      setErrorMessage(
        'Incorrect confirm please enter YES for updating student',
      );
    }

    setSubmitting(false);
  };

  const handleDeleteStudent = async () => {
    if (confirmationText === 'YES') {
      await deleteStudent(studentId);
    } else {
      setErrorMessage(
        'Incorrect confirm please enter YES for deleting student',
      );
    }
    setSubmitting(false);
  };

  const handleChangeInput = (e) => {
    setConfirmationText(e.target.value);
  };

  const handleClose = () => {
    if (autoCloseTimeoutId) {
      clearTimeout(autoCloseTimeoutId);
      setAutoCloseTimeoutId(null);
    }

    if (actionType === 'DELETE') {
      navigate();
    }
    setShow(false);
    setIsActionSuccessful(false);
    setConfirmationText('');
    setErrorMessage('');
  };

  const renderModalHeaderText = () => {
    switch (actionType) {
      case 'UPDATE':
        return (
          <p>
            Please write <b>YES</b> to update the student
          </p>
        );
      case 'DELETE':
        return (
          <p>
            Please write <b>YES</b> to delete the student
          </p>
        );
      default:
        return null;
    }
  };

  const renderBodyElements = () => {
    if (isUpdating || isDeleting) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      );
    } else if (isUpdateError || isDeleteError) {
      return (
        <div className="d-flex justify-content-center">
          <Error />
        </div>
      );
    } else if (isActionSuccessful) {
      let successMessage = 'Student information has been updated successfully!';
      if (actionType === 'DELETE') {
        successMessage = 'Student has been deleted successfully!';
      }

      return (
        <div className="d-flex justify-content-center flex-column m-auto">
          <Success />

          <p className="m-2" style={{ color: '#00AD83' }}>
            {successMessage}
          </p>
        </div>
      );
    }

    return (
      <Modal.Body>
        <Form.Label htmlFor="confirmation">{modalHeaderText}</Form.Label>
        <Form.Control
          id="confirmation"
          value={confirmationText}
          onChange={handleChangeInput}
          type="text"
          autoFocus
        />
        <p className="mt-1">
          <b style={{ color: '#E74C3C' }}>{ErrorMessage}</b>
        </p>
      </Modal.Body>
    );
  };

  const modalHeaderText = renderModalHeaderText();
  const modalBodyElements = renderBodyElements();

  return (
    <div>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Student Action</Modal.Title>
        </Modal.Header>
        {modalBodyElements}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={performAction}
            disabled={isSubmitting}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StudentModal;
