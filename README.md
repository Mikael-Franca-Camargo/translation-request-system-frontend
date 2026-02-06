# Translation Request Management System – Frontend (React + TypeScript)

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-4.5-blue) ![Axios](https://img.shields.io/badge/Axios-0.21-green)

Frontend for the **Translation Request Management System** built with **React** and **TypeScript**. This application provides a user interface for managing translation requests, including submitting new requests, viewing existing requests, and interacting with the backend API.

> ⚠ This repository is dedicated to the **frontend** part of the Translation Request System, and it communicates with the [backend](https://github.com/Mikael-Franca-Camargo/translation-request-system) via RESTful APIs.

---

## 🛠 Key Technologies

- **React 18**  
- **TypeScript 4.5**  
- **Axios** (for API requests)  
- **CSS Modules**  
- **React Router DOM** (for page navigation)

---

## ✨ Main Features

- **Form for submitting translation requests** (Requester Name, Word Count).  
- **List of translation requests**: Shows existing requests fetched from the backend.    
- **Error handling**: Displays user-friendly error messages for API calls.  
- **Internationalization**: Supports UI messages in multiple languages (English/Portuguese).

---

## 📂 Folder Structure

```text
frontend
├─ public
│  ├─ index.html
│  └─ favicon.ico
├─ src
│  ├─ components
│  │  ├─ TranslationRequestForm.tsx
│  │  └─ TranslationRequestList.tsx
│  ├─ api
│  │  └─ api.ts
│  ├─ App.tsx
│  └─ index.tsx
└─ package.json
```

---

## ⚡ Usage Examples

### Fetching Translation Requests

In **App.tsx**, you can fetch all translation requests:

```tsx
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
```

---

### Submitting a Translation Request

In **TranslationRequestForm.tsx**, you can submit a new translation request:

```tsx
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
```

---

## 🚀 Running Locally

To run the frontend locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone <https://github.com/Mikael-Franca-Camargo/translation-request-system-frontend>
    cd frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the React development server**:

    ```bash
    npm start
    ```

Your React app should now be running at `http://localhost:3000`.

---

## 🛠 Next Steps

- Implement routing: Add more pages for details, approval, etc., using React Router.
- Improve error handling: Show better error messages for failed API requests or form validation errors.
- Add authentication/authorization: Integrate authentication (e.g., JWT) if needed.
- Deploy both frontend and backend: Deploy the frontend (React app) and backend (Spring Boot) to a cloud platform like Heroku, AWS, or Vercel.

---

## 📘 What I Learned

- Building a **React + TypeScript frontend** with functional components and hooks  
- **State management** using `useState` and `useEffect` for asynchronous API calls  
- Connecting **frontend to backend APIs** with **Axios** for creating, fetching, and updating data  
- **Form handling and validation**, including user-friendly error messages  
- Basic routing using **React Router DOM** for multiple pages  
- **Implementing internationalization (i18n)** for UI messages in English and Portuguese  
- **Iterative development**: improving components and documentation as I learned new concepts

---

## 🔧 Development Tools

- **VSCode**: Recommended IDE for frontend development.
- **Postman/Insomnia**: To test API requests.
- **React Developer Tools**: For debugging React components.
