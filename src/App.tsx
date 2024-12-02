import {Grid, GridItem, Show, HStack, Box} from '@chakra-ui/react'
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import {Genre} from './hooks/useGenres';
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genreId?: number;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (<>
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"` // 1024px
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >
            <GridItem area='nav'>
                <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
            </GridItem>
            <Show above="lg">
                <GridItem area='aside' paddingX={5}>
                    <GenreList selectedGenreId={gameQuery.genreId}
                               onSelectedGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}/>
                </GridItem>
            </Show>
            <GridItem area='main'>
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery}/>
                    <HStack spacing={5} marginBottom={5}>
                        <PlatformSelector selectedPlatform={gameQuery.platform}
                                          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                        <SortSelector sortOrder={gameQuery.sortOrder}
                                      onSortSelected={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                    </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    </>);
}

export default App
