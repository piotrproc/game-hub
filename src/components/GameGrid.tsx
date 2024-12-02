import React from 'react';
import {Text, SimpleGrid, Button, Box} from '@chakra-ui/react'
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {GameQuery} from '../App';

interface Props {
    gameQuery: GameQuery
}

function GameGrid({gameQuery}: Props) {
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error)
        return <Text>{error.message}</Text>;

    return (
        <Box padding={10}>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>)}
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map(game =>
                            <GameCardContainer key={game.id}>
                                <GameCard game={game}/>
                            </GameCardContainer>)}
                    </React.Fragment>
                )}
            </SimpleGrid>
            {hasNextPage && <Button marginY = {5}
                                    onClick={() => fetchNextPage()}
                                    disabled={isFetchingNextPage}
            >
                {isFetchingNextPage ? "Loading" : "Fetch more"}
            </Button>}
        </Box>
    );
}

export default GameGrid;