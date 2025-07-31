// pages/anime/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AnimeDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/animes?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setAnime(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching anime:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!anime) return <p>Anime not found.</p>;

  return (
    <div className="container">
      <h1>{anime.aniList?.title?.english || anime.aniList?.title?.romaji || 'No Title'}</h1>
      {anime.aniList?.coverImage?.large && (
        <img src={anime.aniList.coverImage.large} alt="Anime Cover" />
      )}
      <p>{anime.aniList?.description || 'No description available.'}</p>
      <h2>AniDB Details</h2>
      <pre>{JSON.stringify(anime.aniDB, null, 2)}</pre>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #333;
          margin-bottom: 20px;
        }
        img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        p {
          color: #666;
          line-height: 1.6;
        }
        h2 {
          color: #333;
          margin-top: 20px;
        }
        pre {
          background: #f4f4f4;
          padding: 10px;
          border-radius: 4px;
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
}
