// lib/anidb.js
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const API_URL = process.env.ANIDB_API_URL;
const CLIENT = process.env.ANIDB_CLIENT;
const CLIENTVER = process.env.ANIDB_CLIENTVER;

export async function getAnimeById(aid) {
  try {
    const response = await axios.get(`${API_URL}?request=anime&client=${CLIENT}&clientver=${CLIENTVER}&aid=${aid}`);
    const parsed = await parseStringPromise(response.data);
    return parsed.anime || null;
  } catch (error) {
    console.error('AniDB Error:', error.message);
    return null;
  }
}
