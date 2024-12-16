import React from 'react';
import {AspectRatio, Image} from '@chakra-ui/react';
import {Trailer} from "../entities/Trailer";

interface Props {
    trailers?: Trailer
}

function GameTrailer({trailers}: Props) {

    const trailerUrl = trailers && trailers.results[0].data.max;

    console.log(trailers)

    return (
        <>
            <AspectRatio maxW='560px'>
                <iframe
                    title='naruto'
                    src={trailerUrl}
                    allowFullScreen
                />
            </AspectRatio>
        </>
    );
}

export default GameTrailer;