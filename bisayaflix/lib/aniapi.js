// lib/aniapi.js
import axios from 'axios';

const API_URL = process.env.ANIAPI_URL;
const API_KEY = process.env.ANIAPI_KEY;

export async function getAnimeList(page = 1, perPage = 20) {
  try {
    const response = await axios.get(`${API_URL}/anime?page=${page}&per_page=${perPage}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    return response.data.data.documents;
  } catch (error) {
    console.error('AniAPI Error:', error.message);
    return [];
  }
}

export async function getAnimeById(id) {
  try {
    const response = await axios.get(`${API_URL}/anime/${id}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    return response.data.data;
  } catch (error) {
    console.error('AniAPI Error:', error.message);
    return null;
  }
}

export async function searchAnime(query) {
  try {
    const response = await axios.get(`${API_URL}/anime?title=${encodeURIComponent(query)}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    return response.data.data.documents;
  } catch (error) {
    console.error('AniAPI Error:', error.message);
    return [];
  }
}
