export type SpotifyTimeRange = 'long_term' | 'medium_term' | 'short_term';

export interface SpotifyPayload  {
  limit: number;
  time_range: SpotifyTimeRange
}
