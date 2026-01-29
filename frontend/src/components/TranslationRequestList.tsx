import React, { useEffect, useState } from 'react';
import { getAllTranslationRequests } from '../api/api';

const TranslationRequestList: React.FC = () => {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const data = await getAllTranslationRequests();
      setRequests(data);
    };
    
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Translation Requests</h2>
      <ul>
        {requests.map((req: any) => (
          <li key={req.id}>
            {req.requesterName} - {req.wordCount} words
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TranslationRequestList;
