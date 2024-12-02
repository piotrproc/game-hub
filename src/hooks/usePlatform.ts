import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
    const {data: platforms} = usePlatforms();
    return id ? platforms?.results.find(g => id === g.id) : undefined;
};

export default usePlatform;