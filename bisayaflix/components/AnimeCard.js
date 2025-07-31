// components/AnimeCard.js
export default function AnimeCard({ anime }) {
  return (
    <div className="anime-card">
      <img
        src={anime.cover_image?.original_url || '/placeholder.jpg'}
        alt={anime.titles?.en || anime.titles?.rjm || 'Anime'}
      />
      <h3>{anime.titles?.en || anime.titles?.rjm || 'No Title'}</h3>
      <p>{anime.genres?.join(', ') || 'No Genres'}</p>
      <style jsx>{`
        .anime-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 10px;
          text-align: center;
          background: #fff;
          transition: transform 0.2s;
        }
        .anime-card:hover {
          transform: scale(1.05);
        }
        img {
          max-width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }
        h3 {
          font-size: 1.2rem;
          margin: 10px 0;
          color: #333;
        }
        p {
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
    </div>
  );
}
