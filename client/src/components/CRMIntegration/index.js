import React from 'react';
import axios from 'axios';

const CRMIntegration = ({ customerData }) => {
  const handlePushToCRM = () => {
    axios.post('/api/crm', customerData)
      .then(response => {
        console.log('Pushed to CRM:', response.data);
      })
      .catch(error => {
        console.error('Error pushing to CRM:', error);
      });
  };

  return (
    <button onClick={handlePushToCRM} className="crm-button">Push to CRM</button>
  );
};

export default CRMIntegration;
