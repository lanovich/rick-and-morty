import { Character, Episode, LocationType } from "./types";

export function isCharacter(obj: any): obj is Character {
  return obj && typeof obj.id === "number" && "status" in obj;
}

export function isLocation(obj: any): obj is LocationType {
  return obj && typeof obj.id === "number" && "dimension" in obj;
}

export function isEpisode(obj: any): obj is Episode {
  return obj && typeof obj.id === "number" && "episode" in obj;
}
