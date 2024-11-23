import React from 'react';
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, Image, HStack} from '@chakra-ui/react'
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    game: Game
}

function GameCard({game}: Props) {

    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <>
                    <Heading fontSize='2xl'>{game.name}</Heading>
                    <HStack justifyContent='space-between'>
                        <PlatformIconList platforms={game.parent_platforms.map(({platform}) => platform)}/>
                        <CriticScore score={game.metacritic}/>
                    </HStack>
                </>
            </CardBody>
        </Card>
    );
}

export default GameCard;