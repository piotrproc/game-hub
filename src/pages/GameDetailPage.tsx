import {Heading, Spinner} from '@chakra-ui/react';
import React from 'react';
import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useTrailers from "../hooks/useTrailers";
import GameTrailer from '../components/GameTrailer';

function GameDetailPage() {
    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);
    const {data: trailers} = useTrailers(slug!);

    if (isLoading) return <Spinner/>;

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText>
                {game.description_raw}
            </ExpandableText>
            <GameAttributes game={game}/>
            <GameTrailer trailers={trailers}/>
        </>
    );
}

export default GameDetailPage;