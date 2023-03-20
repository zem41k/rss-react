import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="img404-box">
      <img src="./images/404.png" alt="not-found" style={{ width: '100%' }} />
      <button className="btn-404">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
}
