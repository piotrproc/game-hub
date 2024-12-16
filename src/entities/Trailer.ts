export interface Video {
    max: string
}

export interface Movie {
    data: Video
}

export interface Trailer {
    id: number,
    name: string,
    preview: string,
    results: Movie[]
}