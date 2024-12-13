import {Box, Heading, SimpleGrid, Spinner, Text} from '@chakra-ui/react';
import React from 'react';
import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import PlatformGrid from "../components/PlatformGrid";
import CriticScore from "../components/CriticScore";
import GenreGrid from "../components/GenreGrid";
import PublishersGrid from "../components/PublishersGrid";

function GameDetailPage() {
    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if (isLoading) return <Spinner/>;

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText>
                {game.description_raw}
            </ExpandableText>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6} padding="10px">
                <>
                    <PlatformGrid platforms={game.parent_platforms.map(({platform}) => platform)}/>
                    <Box>
                        <Text color="grey">Metascore</Text>
                        <CriticScore score={game.metacritic}/>
                    </Box>
                    <GenreGrid genres={game.genres}/>
                    <PublishersGrid publishers={game.publishers}/>
                </>
            </SimpleGrid>
        </>
    );
}

export default GameDetailPage;