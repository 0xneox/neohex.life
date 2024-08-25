// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-5 text-center bg-gray-800">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </header>
      <main className="p-10">{children}</main>
      <footer className="p-5 text-center bg-gray-800">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
