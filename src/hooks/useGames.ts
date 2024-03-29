import { GameQuary } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuary: GameQuary) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuary.genre?.id,
        platforms: gameQuary.platform?.id,
        ordering: gameQuary.sortOrder,
        search: gameQuary.searchText,
      },
    },
    [gameQuary]
  );

export default useGames;
