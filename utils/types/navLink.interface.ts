import { Pages } from "./pages.enum";

export interface NavLink {
  localeName: string;
  path: string;
  visibleIn: Pages | Pages[];
}