import React from 'react';
import './App.css';
import TranslationRequestForm from './components/TranslationRequestForm';
import TranslationRequestList from './components/TranslationRequestList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Translation Request Management</h1>

      <TranslationRequestForm />
      <TranslationRequestList />
      
    </div>
  );
};

export default App;
