import useScreenshots from "../hooks/useScreenshots";
import {Image, SimpleGrid} from '@chakra-ui/react';
import React from "react";

interface Props {
    gameId: number;
}

function GameScreenshots({gameId}: Props) {
    const {data: screenshots, error, isLoading} = useScreenshots(gameId);

    if (!screenshots) return null;

    if (isLoading) return null;
    if (error) throw error;

    return (
        <>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
                {screenshots.results.map(s => <Image src={s.image} key={s.id}/>)}
            </SimpleGrid>
        </>
    );
}

export default GameScreenshots;