import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import {Image, List, ListItem, Spinner, Heading, HStack, Button} from '@chakra-ui/react'
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void,
    selectedGenre: Genre | null
}

function GenreList({onSelectedGenre, selectedGenre}: Props) {
    const {data, isLoading, error} = useGenres();

    if (error)
        return null;

    if (isLoading)
        return <Spinner/>;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            <List>
                {data?.results.map(genre =>
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8}/>
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                onClick={() => onSelectedGenre(genre)}
                                objectFit="cover"
                                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                                variant="link"
                            >{genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>
    );
}

export default GenreList;