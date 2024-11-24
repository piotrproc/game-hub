import useData from "./useData";
import {Platform} from "./usePlatforms";
import {GameQuery} from "../App";

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number
}

const useGames = (gameQuery: GameQuery) => {
    return useData<Game>(
        {endpoint: "/games"},
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id
            }
        },
        [gameQuery]
    );
};

export default useGames;