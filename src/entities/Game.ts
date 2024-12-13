import {Platform} from "./Platform";
import {Genre} from "./Genre";

export interface Publisher {
    name: string
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    publishers: Publisher[],
    genres: Genre[],
    slug: string,
    metacritic: number,
    rating_top: number,
    description_raw: string
}