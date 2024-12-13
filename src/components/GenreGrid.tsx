import {List, ListItem} from '@chakra-ui/react';
import {Genre} from "../entities/Genre";

interface Props {
    genres: Genre[]
}

function GenreGrid({genres}: Props) {

    return (
        <>
            <List>
                <ListItem color="grey">Genres</ListItem>
                {genres.map((genre, index) => <ListItem key={index}>{genre.name}</ListItem>)}
            </List>
        </>
    );
}

export default GenreGrid;