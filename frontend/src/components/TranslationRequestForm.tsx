import React, { useState } from 'react';
import { createTranslationRequest } from '../api/api';

const TranslationRequestForm: React.FC = () => {
  const [name, setName] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (name.trim() === '' || wordCount <= 0) {
      setError('Please provide a valid name and word count.');
      return;
    }

    const result = await createTranslationRequest(name, wordCount);
    if (result) {
      alert('Translation request created successfully');
      setName('');
      setWordCount(0);
      setError('');
    } else {
      setError('Failed to create translation request.');
    }
  };

  return (
    <div>
      <h2>Create a Translation Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Word Count:</label>
          <input
            type="number"
            value={wordCount}
            onChange={(e) => setWordCount(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Create Request</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TranslationRequestForm;
