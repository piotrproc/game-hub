import {Heading} from '@chakra-ui/react'
import {GameQuery} from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery
}

function GameHeading({gameQuery}: Props) {
    const {data: genres} = useGenres();
    const {data: platforms} = usePlatforms();
    const genre = genres?.results.find(g => gameQuery.genreId === g.id);
    const platform = platforms?.results.find(g => gameQuery.platformId === g.id);
    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
        </Heading>
    );
}

export default GameHeading;