import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';

import { loginSuccess } from './authSlice';
import { useNavigate } from 'react-router-dom';

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import SejongLogo from '../../assets/images/Sejong.png';
import './signInForm.css';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="login-main">
      <div className="mb-5" />
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log('Sending...');
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            dispatch(loginSuccess({ username: values.username }));
            setSubmitting(false);
            navigate('/admin');

            setSubmitting(false);
            resetForm();
          }, 3000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="Main-form">
            <div className="First">
              <div className="Welcome">
                <h3 id="wel">Welcome to Sejong</h3>
              </div>
              <div className="Sign">
                <img
                  id="sign_up"
                  className="sejongLogo"
                  src={SejongLogo}
                  alt=""
                />
              </div>
            </div>

            <div className="UserClass">
              <div className="username">
                <p htmlFor="username">Username</p>
                <Field
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                />
                <div className="error-message">
                  <ErrorMessage name="username" />
                </div>
              </div>
              <div className="password">
                <p htmlFor="password">Password</p>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                />

                {showPassword ? (
                  <BsEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="show-password-eye"
                    size={20}
                  />
                ) : (
                  <BsEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="show-password-eye"
                    size={20}
                  />
                )}

                <div className="error-message">
                  <ErrorMessage name="password" />
                </div>
              </div>
            </div>
            <div className="ButtonClass">
              <button id="SignButton" type="submit" disabled={isSubmitting}>
                Sign in
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
