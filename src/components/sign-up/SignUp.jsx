import React, { useState,  } from 'react';
import {
  createUserDocumentFromAuth,
  signUpWithEmail,
} from '../../utils/firebase';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import './sign-up.scss';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const displayNameChangeHandler = (e) => setDisplayName(e.target.value);
  const emailChangeHandler = (e) => setEmail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);
  const confirmPasswordChangeHandler = (e) =>
    setConfirmPassword(e.target.value);

  const resetFields = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    try {
      const user = await signUpWithEmail(email, password);
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFields();
    } catch (error) {
      console.log(error.message);
      resetFields();
    }
  };
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your Email and Password</span>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label='Display Name'
          type='text'
          id='displayName'
          onChange={displayNameChangeHandler}
          value={displayName}
          required
        />
        <FormInput
          label='Email'
          type='email'
          id='email'
          onChange={emailChangeHandler}
          value={email}
          required
        />
        <FormInput
          label='Password'
          type='password'
          id='password'
          onChange={passwordChangeHandler}
          value={password}
          required
        />
        <FormInput
          label='Confirm Password'
          type='password'
          id='confirmPassword'
          onChange={confirmPasswordChangeHandler}
          value={confirmPassword}
          required
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default SignUp;
