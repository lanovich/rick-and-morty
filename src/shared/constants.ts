export const ROUTES = {
  home: "/",
  login: "/login",
  locations: "/locations",
  episodes: "/episodes",
  characters: "/characters",
};

export const categoriesMap = {
  locations: {
    title: "Локации",
    description: "локации из мультфильма Рик и Морти",
    portalImg: "/portal.png",
    route: ROUTES.locations,
  },
  episodes: {
    title: "Эпизоды",
    description: "эпизоды из мультфильма Рик и Морти",
    portalImg: "/portal.png",
    route: ROUTES.episodes,
  },
  characters: {
    title: "Персонажи",
    description: "персонажи из мультфильма Рик и Морти",
    portalImg: "/portal.png",
    route: ROUTES.characters,
  },
};
