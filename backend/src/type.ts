export interface ItunesSearchResponse {
  resultCount: number;
  results: ItunesSearchResult[];
}

export interface ItunesSearchResult {
  wrapperType?: string;
  kind?: string;
  collectionId?: number;
  trackId?: number;
  artistName?: string;
  collectionName?: string;
  trackName?: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  collectionArtistId?: number;
  collectionArtistViewUrl?: string;
  collectionViewUrl?: string;
  trackViewUrl?: string;
  previewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  trackRentalPrice?: number;
  collectionHdPrice?: number;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  releaseDate?: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis?: number;
  country?: string;
  currency?: string;
  primaryGenreName?: string;
  contentAdvisoryRating?: string;
  longDescription?: string;
  hasITunesExtras?: boolean;
  discCount?: number;
  discNumber?: number;
  shortDescription?: string;
  description?: string;
  isStreamable?: boolean;
  copyright?: string;
  artistId?: number;
}
