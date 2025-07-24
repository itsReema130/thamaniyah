

export interface ItunesSearchResponse {
  resultCount: number;
  results: ItunesSearchResult[];
}

export class ItunesSearchResult {
    user_id: number | null;
    releaseDate: string;
    isTrending: boolean;
    artworkUrl100: string;
    trackName: string; 
  artistName: string; 
  image: string; 
  primaryGenreName: string;
  constructor(
    trackName: string,
    artistName: string,
    image: string,
    user_id: number | null,
    primaryGenreName  : string,
    artworkUrl100: string,
    releaseDate: string,
    isTrending: boolean
  ) {
    this.trackName = trackName;
    this.artistName = artistName;
    this.image = image;
    this.releaseDate = releaseDate;
    this.isTrending = isTrending;
    this.user_id = user_id;
    this.primaryGenreName = primaryGenreName;
    this.artworkUrl100 = artworkUrl100;
  }
}
