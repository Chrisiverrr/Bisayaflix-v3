// lib/anilist.js
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const API_URL = process.env.ANILIST_API_URL;

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export async function getAnimeById(id) {
  try {
    const { data } = await client.query({
      query: gql`
        query ($id: Int) {
          Media(id: $id, type: ANIME) {
            id
            title {
              romaji
              english
              native
            }
            description
            episodes
            genres
            coverImage {
              large
            }
          }
        }
      `,
      variables: { id: parseInt(id) },
    });
    return data.Media;
  } catch (error) {
    console.error('AniList Error:', error.message);
    return null;
  }
}

export async function searchAnime(query) {
  try {
    const { data } = await client.query({
      query: gql`
        query ($search: String) {
          Page {
            media(search: $search, type: ANIME) {
              id
              title {
                romaji
                english
              }
              coverImage {
                large
              }
            }
          }
        }
      `,
      variables: { search: query },
    });
    return data.Page.media;
  } catch (error) {
    console.error('AniList Error:', error.message);
    return [];
  }
}
