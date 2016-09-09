import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout.jsx';
import Main from './components/main.jsx';
import LoginForm from './components/login_form.jsx';
import RegisterForm from './components/register_form.jsx';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Main} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/login" component={LoginForm} />
  </Route>
)
