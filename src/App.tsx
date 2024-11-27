import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import TransactionPage from './pages/TransactionPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/transaction-table" element={<TransactionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
