import platforms from "../data/platforms";
import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms';
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24 * 60 * 60 * 1000, // 24 h,
    initialData: platforms
});

export default usePlatforms;
