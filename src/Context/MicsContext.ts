import { VenueFace, User } from "../Models/VenueModel";
import { createContext } from "react";

export interface MicsContextModel {
  venues: VenueFace[];
  users: User[];
  loggedusersarr: User[];
  addVenue: (venue: VenueFace) => void;
  addUser: (user: User) => void;
  logUser: (user: User) => void;
}

const defaultValue: MicsContextModel = {
  venues: [],
  users: [],
  loggedusersarr: [],
  addVenue: () => {},
  addUser: () => {},
  logUser: () => {},
};

export const MicsContext = createContext<MicsContextModel>(defaultValue);
