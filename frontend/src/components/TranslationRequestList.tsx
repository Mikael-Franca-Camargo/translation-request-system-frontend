import React, { useEffect, useState } from 'react';
import { getAllTranslationRequests, TranslationRequest } from '../api/api';

const TranslationRequestList: React.FC = () => {
  const [requests, setRequests] = useState<TranslationRequest[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getAllTranslationRequests();
        setRequests(data);
      } catch (error) {
        setErrorMessage('Failed to load translation requests.');
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Translation Requests</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <ul>
        {requests.map(req => (
          <li key={req.id} style={{ marginBottom: '8px' }}>
            <strong>{req.requesterName}</strong> – {req.wordCount} words ({req.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TranslationRequestList;
