import useGenres from "./useGenres";

const useGenre = (id?: number) => {
    const {data: platforms} = useGenres();
    return id ? platforms?.results.find(g => id === g.id) : undefined;
};

export default useGenre;