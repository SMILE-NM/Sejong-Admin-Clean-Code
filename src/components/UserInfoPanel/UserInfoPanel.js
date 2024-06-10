import React, { useState } from 'react';

import { selectSelectedCardId } from '../CardList/Card/cardSlice';
import { useSelector } from 'react-redux';

import { useRef } from 'react';
import { Formik, Form as FormFormik } from 'formik';

import { useReactToPrint } from 'react-to-print';

import { CloseButton, Button } from 'react-bootstrap';
import { BsTrash3Fill } from 'react-icons/bs';

import LogoAndDocPanel from './LogoAndDocPanel/LogoAndDocPanel';
import MyTextInput from './Inputs/MyTextInput';
import MySelectInput from './Inputs/MySelectInput';
import SearchPanel from './SearchPanel/SearchPanel';

import { MyInitialValues, MyValidationSchema, placeholders } from './configs';

//IMAGES
import { US, KR, TJ, UserImage } from './images/index';

import './userInfoPanel.css';

const UserInfoPanel = () => {
  const studentId = useSelector(selectSelectedCardId);
  console.log(student);
  const [isReadOnly, setIsReadyOnly] = useState(true);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Formik
        initialValues={MyInitialValues}
        validationSchema={MyValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            console.log(JSON.stringify(values, null, 2));
          }, 400);
        }}
      >
        <FormFormik>
          <div className="printer-blank d-flex">
            <div className="exit-printer">
              <CloseButton />
            </div>
            <div
              className="info-printer"
              id="info-container"
              ref={componentRef}
              readOnly
            >
              <LogoAndDocPanel isReadOnly={isReadOnly} />

              <div className="d-flex align-items-center circle-img-main">
                <img src={UserImage} alt="" className="circle-img-printer" />
              </div>
              <div>
                <div className="d-flex align-items-center margin-div">
                  <MyTextInput
                    label="First Name"
                    name="first_name_en"
                    type="text"
                    placeholder={placeholders.name_en}
                    isReadOnly={isReadOnly}
                  />
                  <MyTextInput
                    label="Last Name"
                    name="last_name_en"
                    type="text"
                    placeholder={placeholders.name_en}
                    isReadOnly={isReadOnly}
                  />
                  <img src={US} alt="USA flag" className="printer-flag" />
                </div>
                <div className="d-flex align-items-center margin-div">
                  <MyTextInput
                    label="First Name :"
                    name="first_name_kr"
                    type="text"
                    placeholder={placeholders.name_kr}
                    isReadOnly={isReadOnly}
                  />
                  <MyTextInput
                    label="Last Name :"
                    name="last_name_kr"
                    type="text"
                    placeholder={placeholders.name_kr}
                    isReadOnly={isReadOnly}
                  />
                  <img src={KR} alt="USA flag" className="printer-flag" />
                </div>
                <div className="d-flex align-items-center margin-div">
                  <MyTextInput
                    label="First Name :"
                    name="first_name_tj"
                    type="text"
                    placeholder={placeholders.name_tj}
                    isReadOnly={isReadOnly}
                  />
                  <MyTextInput
                    label="Last Name :"
                    name="last_name_tj"
                    type="text"
                    placeholder={placeholders.name_tj}
                    isReadOnly={isReadOnly}
                  />
                  <img src={TJ} alt="USA flag" className="printer-flag" />
                </div>
                <div className="d-flex mb-3">
                  <MyTextInput
                    label="Date of birth :"
                    name="date_of_birth"
                    type="date"
                    inputWidth="170px"
                    isReadOnly={isReadOnly}
                  />
                  <MyTextInput
                    label="Address :"
                    name="address"
                    inputWidth="400px"
                    placeholder={placeholders.address}
                    isReadOnly={isReadOnly}
                  />
                </div>
                <div className="d-flex mb-3">
                  <MySelectInput
                    label="Gender :"
                    name="gender"
                    inputWidth={'110px'}
                    isReadOnly={isReadOnly}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Famale</option>
                  </MySelectInput>
                  <MySelectInput
                    label="Married :"
                    name="married"
                    inputWidth={'100px'}
                    isReadOnly={isReadOnly}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </MySelectInput>
                  <MyTextInput
                    label="Postal code :"
                    name="postal_code"
                    inputWidth={'130px'}
                    placeholder={placeholders.postal_code}
                    isReadOnly={isReadOnly}
                  />
                  <MyTextInput
                    label="Passport :"
                    name="passportID"
                    inputWidth={'150px'}
                    placeholder={placeholders.passportID}
                    isReadOnly={isReadOnly}
                  />
                </div>
                <div className="d-flex mb-3">
                  <MyTextInput
                    label="Email :"
                    name="email"
                    placeholder={placeholders.email}
                    isReadOnly={isReadOnly}
                  />
                  <MyTextInput
                    label="Phone number :"
                    name="phone"
                    placeholder={placeholders.phone}
                    isReadOnly={isReadOnly}
                  />
                </div>
                <div className="d-flex mb-3">
                  <MySelectInput
                    label="Topik level :"
                    name="topik:"
                    inputWidth={'120px'}
                    isReadOnly={isReadOnly}
                  >
                    <option value="1 lvl">1 lvl</option>
                    <option value="2 lvl">2 lvl</option>
                  </MySelectInput>
                  <MySelectInput
                    label="Group :"
                    name="student_group"
                    inputWidth={'120px'}
                    isReadOnly={isReadOnly}
                  >
                    <option value="1A">1A</option>
                    <option value="1B">1B</option>
                  </MySelectInput>
                  <MySelectInput
                    label="Time :"
                    name="time_lesson"
                    inputWidth={'120px'}
                    isReadOnly={isReadOnly}
                  >
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                  </MySelectInput>
                  <div className="no-print">
                    <MySelectInput
                      label="Money :"
                      name="money"
                      inputWidth={'120px'}
                      isReadOnly={isReadOnly}
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </MySelectInput>
                  </div>
                </div>
              </div>

              {!isReadOnly && (
                <div className="mb-3 list-buttons">
                  <Button type="submit" variant="success" className="my-button">
                    SAVE
                  </Button>
                  <Button
                    type="submit"
                    variant="secondary"
                    className="my-button"
                  >
                    CANCEL
                  </Button>
                  <BsTrash3Fill
                    size={40}
                    className="delete-icon-trash"
                    color="#e74c3c"
                  />
                </div>
              )}
            </div>

            <SearchPanel
              isReadOnly={isReadOnly}
              setIsReadyOnly={setIsReadyOnly}
              handlePrint={handlePrint}
            />
          </div>
        </FormFormik>
      </Formik>
    </>
  );
};

export default UserInfoPanel;
