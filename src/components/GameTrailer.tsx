import React from 'react';
import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number
}

function GameTrailer({gameId}: Props) {

    const {data: trailers, error, isLoading} = useTrailers(gameId);

    if (isLoading) return null;
    if (error) throw error;

    const first = trailers && trailers?.results[0];

    if (!first) return null;

    const trailerUrl = first.data[480];
    const poster = first.preview;

    console.log(trailers)

    return (
        <>
            <video
                src={trailerUrl}
                poster={poster}
                controls
            />
        </>
    );
}

export default GameTrailer;