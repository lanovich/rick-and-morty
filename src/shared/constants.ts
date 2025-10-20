import charactersData from "@/shared/data/characters.json";
import locationsData from "@/shared/data/location.json";
import episodesData from "@/shared/data/episode.json";

import { Character, Episode, LocationType } from "@/shared/types";

export const ROUTES = {
  home: "/",
  locations: "/locations",
  episodes: "/episodes",
  characters: "/characters",
};

export const categoriesMap = {
  locations: {
    data: locationsData as LocationType[],
    title: "Локации",
    descrition: "персонажи из мультфильма Рик и Морти",
    portalImg: "/portal.png",
    route: ROUTES.locations,
  },
  episodes: {
    data: episodesData as Episode[],
    title: "Эпизоды",
    descrition: "эпизоды из мультфильма Рик и Морти",
    portalImg: "/portal.png",
    route: ROUTES.episodes,
  },
  characters: {
    data: charactersData as Character[],
    title: "Персонажи",
    descrition: "персонажи из мультфильма Рик и Морти",
    portalImg: "/portal.png",
    route: ROUTES.characters,
  },
};
