interface MovieOrTvCard {
  title?: string;
  name?: string;
  media_type: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  id: number;
}
