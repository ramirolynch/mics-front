import { VenueFace, User } from "../Models/VenueModel";
import { createContext } from "react";

export interface MicsContextModel {
  venues: VenueFace[];
  users: User[];
  loggedusers: boolean;
  addVenue: (venue: VenueFace) => void;
  addUser: (user: User) => void;
  loginUser: () => void;
}

const defaultValue: MicsContextModel = {
  venues: [],
  users: [],
  loggedusers: false,
  addVenue: () => {},
  addUser: () => {},
  loginUser: () => {},
};

export const MicsContext = createContext<MicsContextModel>(defaultValue);
