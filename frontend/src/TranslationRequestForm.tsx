import React, { useState } from 'react';
import { createTranslationRequest } from './api/api';

const TranslationRequestForm: React.FC = () => {
  const [requesterName, setRequesterName] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (wordCount <= 0) {
      setErrorMessage('Word count must be a positive number.');
      return;
    }

    try {
      await createTranslationRequest(requesterName, wordCount);
      setSuccessMessage('Translation request created successfully!');
      setErrorMessage('');
      setRequesterName('');
      setWordCount(0);
    } catch (error) {
      setErrorMessage('There was an error creating the translation request.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Create Translation Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="requesterName">Requester Name: </label>
          <input
            type="text"
            id="requesterName"
            value={requesterName}
            onChange={(e) => setRequesterName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="wordCount">Word Count: </label>
          <input
            type="number"
            id="wordCount"
            value={wordCount}
            onChange={(e) => setWordCount(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default TranslationRequestForm;
