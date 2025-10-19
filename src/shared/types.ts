export type CategoryName = "locations" | "episodes" | "characters";

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export interface LocationType {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: "Human" | "Alien";
  type: "";
  gender: "Male" | "Female" | "unknown";
  image: string;
  created: string;
}

export type CategoryItem<T extends CategoryName> = T extends "characters"
  ? Character
  : T extends "locations"
  ? LocationType
  : Episode;
