import Layout from './components/layout/Layout';
import About from './components/pages/about/About';
import Homepage from './components/pages/homepage/Homepage';
import NotFound from './components/pages/notfound/NotFound';
import Store from './components/pages/store/Store';
import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Forms from './components/pages/forms/Forms';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="store" element={<Store />} />
            <Route path="forms" element={<Forms />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </div>
    );
  }
}
