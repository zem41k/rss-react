import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="header-container container">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/">Home</Link>
            </li>
            <li className="header__item">
              <Link to="/about">About</Link>
            </li>
            <li className="header__item">
              <Link to="/store">Store</Link>
            </li>
            <li className="header__item">
              <Link to="/forms">Forms</Link>
            </li>
            <li className="header__item">
              <Link to="/404">404</Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="main-container container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="footer-container container"></div>
      </footer>
    </>
  );
}
