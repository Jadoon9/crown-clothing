import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './routes/home/Home';
import Navigation from './components/navigation/Navigation';
import './categories.scss';
import SignIn from './routes/authentication/Authentication';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
