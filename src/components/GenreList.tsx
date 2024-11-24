import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import {Image, List, ListItem, Spinner, Text, HStack, Button} from '@chakra-ui/react'
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void
}

function GenreList({onSelectedGenre}: Props) {
    const {data, isLoading, error} = useGenres();

    if (error)
        return null;

    if (isLoading)
        return <Spinner/>;

    return (
        <>
            <List>
                {data.map(genre =>
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8}/>
                            <Button onClick={() => onSelectedGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>
    );
}

export default GenreList;