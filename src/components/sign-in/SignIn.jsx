import React, { useState } from 'react';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import { UserContext } from '../../contexts/userContext';
import './sign-in.scss';
import { signInWithGooglePopup, signInWithEmail } from '../../utils/firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // * Sign in with Google Popup
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const nameChangeHandler = (e) => setEmail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);

  const resetFields = () => {
    setEmail('');
    setPassword('');
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmail(email, password);

      resetFields();
    } catch (error) {
      resetFields();
      console.log(error.message);
    }
  };
  return (
    <div className='sign-in-container'>
      <h2>I already have an account </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          onChange={nameChangeHandler}
          type='email'
          label='Email'
          value={email}
        />
        <FormInput
          onChange={passwordChangeHandler}
          type='password'
          label='Password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
