// pages/api/animes.js
import { getAnimeById as getAnimeByIdAniDB } from '../../lib/anidb';
import { getAnimeById as getAnimeByIdAniList } from '../../lib/anilist';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const [aniDBData, aniListData] = await Promise.all([
      getAnimeByIdAniDB(id),
      getAnimeByIdAniList(id),
    ]);
    res.status(200).json({ aniDB: aniDBData, aniList: aniListData });
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch anime data' });
  }
}
