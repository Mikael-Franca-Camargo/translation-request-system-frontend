import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllTranslationRequests } from './api/api';
import TranslationRequestForm from './TranslationRequestForm';

const App: React.FC = () => {
  const [translationRequests, setTranslationRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const requests = await getAllTranslationRequests();
        setTranslationRequests(requests);
      } catch (error) {
        console.error('Error fetching translation requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="App">
      <h1>Translation Request Management</h1>

      <TranslationRequestForm />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {translationRequests.map((request: { id: number, requesterName: string, wordCount: number }) => (
            <li key={request.id}>
              {request.requesterName} - {request.wordCount} words
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
