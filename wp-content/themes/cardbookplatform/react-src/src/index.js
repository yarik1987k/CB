import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Profile from './profile/profile';
import Oververview from './overview'; 
import Search from './search';
import ProfileCardMarket from './profile/card-market/profileCardMarket';
import IndexEditProfile from './profile/edit/indexEditProfile';
import Registration from './registration/registration';
import LoginIndex from './login-helper';
import './index.scss';
const container = document.getElementById('root');
const root = createRoot(container);
 
const routes = (
 
  <Router>
     
    <Routes>
      <Route exact path="/" element={''} />
      <Route exact path="/new-login" element={<LoginIndex/>} /> 
      <Route exact path="/registration-page" element={<Registration/>} />
      <Route exact path="/overview" element={<Oververview/>} />
      <Route exact path="/search" element={<Search/>} />
      <Route exact path="/cardmarket" element={''} />
      <Route exact path="/chat" element={''} />
      <Route exact path="/infohub" element={''} />
      <Route exact path="/connector" element={''} />
      <Route exact path="/subscriptions" element={''} />
      <Route exact path="/support" element={''} />
      <Route exact path="/profile/:id" element={<Profile/>} />
      <Route exact path="/profile/:id/card-market" element={<ProfileCardMarket/>} />
      <Route exact path="/profile/:id/profile-info" element={<IndexEditProfile/>} />
      <Route exact path="/profile/:id/edit" element={<IndexEditProfile/>} />
      <Route exact path="/profile/:id/my-opportunities" element={<IndexEditProfile/>} />
      <Route exact path="/profile/:id/my-wallet-history" element={<IndexEditProfile/>} />
      <Route exact path="/profile/:id/referral" element={<IndexEditProfile/>} />
      <Route exact path="/profile/:id/notifications" element={<IndexEditProfile/>} /> 
      <Route exact path="/profile/:id/saved" element={<IndexEditProfile/>} />
      <Route exact path="/profile/:id/settings" element={<IndexEditProfile/>} />
    </Routes>
      
  </Router>  
);
root.render(routes);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
