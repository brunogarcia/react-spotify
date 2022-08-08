export enum SpotifyTimeRange {
  LONG_TERM = 'long_term',
  MEDIUM_TERM = 'medium_term',
  SHORT_TERM = 'short_term',
}

export interface SpotifyPayload  {
  limit: number;
  time_range: SpotifyTimeRange
}
