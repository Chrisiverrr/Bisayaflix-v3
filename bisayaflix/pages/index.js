// pages/index.js
import { useEffect, useState } from 'react';
import { getAnimeList } from '../lib/aniapi';
import AnimeCard from '../components/AnimeCard';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnimes() {
      const data = await getAnimeList();
      setAnimes(data);
      setLoading(false);
    }
    fetchAnimes();
  }, []);

  return (
    <div className="container">
      <h1>Bisayaflix</h1>
      <SearchBar setAnimes={setAnimes} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="anime-grid">
          {animes.length > 0 ? (
            animes.map((anime) => <AnimeCard key={anime.id} anime={anime} />)
          ) : (
            <p>No anime found.</p>
          )}
        </div>
      )}
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }
        .anime-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }
        p {
          text-align: center;
          color: #666;
        }
      `}</style>
    </div>
  );
}
