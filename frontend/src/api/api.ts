import axios from 'axios';

const API_URL = "http://localhost:8080/translation-requests";

export interface TranslationRequest {
  id: number;
  requesterName: string;
  wordCount: number;
  status: 'CREATED' | 'APPROVED';
}

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

export const updateTranslationRequest = async (id: number, requesterName: string, wordCount: number): Promise<TranslationRequest> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, {
      requesterName,
      wordCount,
    });
    return response.data;
  } catch (error) {
    console.error("There was an error updating the translation request:", error);
    throw error;
  }
};

export const deleteTranslationRequest = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("There was an error deleting the translation request:", error);
    throw error;
  }
};
