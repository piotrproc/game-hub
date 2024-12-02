import genres from "../data/genres"
import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client";

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => {
        return apiClient
            .get<FetchResponse<Genre>>("/genres")
            .then(res => res.data)
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 h,
    initialData: { count: genres.length, results: genres}
});

export default useGenres;