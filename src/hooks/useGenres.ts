import useData from "./useData";

interface Genre {
    id: number,
    name: string
}

const useGenres = () => {
    return useData<Genre>({endpoint: "/genres"});
};

export default useGenres;