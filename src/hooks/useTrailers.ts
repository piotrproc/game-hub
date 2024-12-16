import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import {Trailer} from "../entities/Trailer";



const useTrailers = (gameId: string) => {
    const apiClient = new APIClient<Trailer>(`/games`);

    return useQuery({
        queryKey: ["trailers", gameId],
        queryFn: () => apiClient.get(gameId, "movies"),
    });
}

export default useTrailers;