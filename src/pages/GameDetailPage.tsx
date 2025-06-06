import {Heading, Spinner, SimpleGrid, Box} from '@chakra-ui/react';
import React from 'react';
import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

function GameDetailPage() {
    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if (isLoading) return <Spinner/>;

    if (error || !game) throw error;

    return (
        <>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
                <Box>
                    <Heading>{game.name}</Heading>
                    <ExpandableText>
                        {game.description_raw}
                    </ExpandableText>
                    <GameAttributes game={game}/>
                </Box>
                <Box>
                    <GameTrailer gameId={game.id}/>
                    <GameScreenshots gameId={game.id}/>
                </Box>
            </SimpleGrid>
        </>
    );
}

export default GameDetailPage;