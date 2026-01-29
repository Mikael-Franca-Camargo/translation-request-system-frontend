import axios from 'axios';

const API_URL = "http://localhost:8080/translation-requests";


export const createTranslationRequest = async (requesterName: string, wordCount: number) => {
  try {
    const response = await axios.post(API_URL, { requesterName, wordCount });
    return response.data;
  } catch (error) {
    console.error("There was an error creating the translation request:", error);
    throw error;
  }
};


export const getAllTranslationRequests = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching translation requests:", error);
    throw error;
  }
};


export const getTranslationRequestById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the translation request:", error);
    throw error;
  }
};


export const approveTranslationRequest = async (id: number) => {
  try {
    const response = await axios.post(`${API_URL}/${id}/approve`);
    return response.data;
  } catch (error) {
    console.error("There was an error approving the translation request:", error);
    throw error;
  }
};


