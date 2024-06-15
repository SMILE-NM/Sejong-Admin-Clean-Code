import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { Formik, Form as FormFormik } from 'formik';

import { selectStudentById } from '../Navbar/SearchPanel/SearchPanelSlice';
import { selectSelectedCardId } from '../CardList/Card/cardSlice';

import MyModal from './Modal/MyModal';
import SearchPanel from './SearchPanel/SearchPanel';

import { CloseButton } from 'react-bootstrap';

import { MyInitialValues, MyValidationSchema } from './configs';

//IMAGES
import './styles/userInfoPanel.css';
import './styles/borderAnimation.css';

import MyForm from './Form/Form';

const UserInfoPanel = () => {
  const navigate = useNavigate();

  const studentId = useSelector(selectSelectedCardId);
  const student = useSelector((state) => selectStudentById(state, studentId));
  const [initialValues, setInitialValues] = useState(MyInitialValues);

  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState('UPDATE');
  const [isReadOnly, setIsReadyOnly] = useState(true);

  useEffect(() => {
    if (student) {
      setInitialValues(student);
      document.title = `${student.name_en}_${student.last_name_en}_${student.id}`;
    }
  }, [student, isReadOnly]);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleSubmit = async (values, actions) => {
    actions.setSubmitting(true);
    const errors = await actions.validateForm();
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      setShowModal(true);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={MyValidationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ setValues, values, isSubmitting, setSubmitting }) => (
          <FormFormik>
            <div className="printer-blank d-flex">
              <div className="exit-printer">
                <CloseButton onClick={() => navigate('/admin')} />
              </div>
              <MyForm
                isReadOnly={isReadOnly}
                componentRef={componentRef}
                showModal={showModal}
                setShowModal={setShowModal}
                setActionType={setActionType}
                setValues={setValues}
                setIsReadyOnly={setIsReadyOnly}
              />
              <SearchPanel
                resetValues={() => {
                  setValues(initialValues);
                }}
                isReadOnly={isReadOnly}
                setIsReadyOnly={setIsReadyOnly}
                handlePrint={handlePrint}
              />
              <MyModal
                studentId={studentId}
                studentData={values}
                setSubmitting={setSubmitting}
                isSubmitting={isSubmitting}
                show={showModal}
                setShow={setShowModal}
                actionType={actionType}
                navigate={() => navigate('/admin')}
              />
            </div>
          </FormFormik>
        )}
      </Formik>
    </>
  );
};

export default UserInfoPanel;
