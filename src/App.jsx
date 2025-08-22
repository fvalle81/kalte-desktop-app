import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 

import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Inspections from './components/pages/Inspections.jsx';
import Completed from './components/pages/Completed.jsx';
import Invoices from './components/pages/Invoices.jsx';
import Cashflow from './components/pages/Cashflow.jsx';
import Reports from './components/pages/Reports.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inspections />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/cashflow" element={<Cashflow />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Layout>
  );
}

