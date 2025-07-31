// components/SearchBar.js
import { useState } from 'react';
import { searchAnime } from '../lib/anilist';

export default function SearchBar({ setAnimes }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const results = await searchAnime(query);
    setAnimes(results);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for anime..."
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
      <style jsx>{`
        .search-bar {
          display: flex;
          gap: 10px;
          margin: 20px 0;
        }
        input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        button {
          padding: 10px 20px;
          background: #0070f3;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background: #005bb5;
        }
      `}</style>
    </div>
  );
}
