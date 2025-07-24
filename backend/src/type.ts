export interface ItunesSearchResponse {
  resultCount: number;
  results: ItunesSearchResult[];
}

export interface ItunesSearchResult {
  trackName: string;
  releaseDate: string;
  artistName: string;
  artworkUrl100: string;
  primaryGenreName: string;
  artistId: number | null;
  user_id: number | null;
}
