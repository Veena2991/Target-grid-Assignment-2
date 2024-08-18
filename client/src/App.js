import React, { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import CRMIntegration from './components/CRMIntegration';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);

  const handleFormSubmit = (customerData) => {
    setCustomers([...customers, customerData]);
  };

  return (
    <div className="App">
      <h1>Customer Information Capture</h1>
      <CustomerForm onSubmit={handleFormSubmit} />
      <CustomerList customers={customers} />
      <CRMIntegration customerData={customers[customers.length - 1]} />
    </div>
  );
}

export default App;
