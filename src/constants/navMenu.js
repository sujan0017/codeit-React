import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PRODUCTS_ROUTE,
} from "./routes";

const navMenu = [
  {
    id: 1,
    label: "Home",
    route: HOME_ROUTE,
  },
  {
    id: 2,
    label: "About",
    route: ABOUT_ROUTE,
  },

  {
    id: 3,
    label: "Products",
    route: PRODUCTS_ROUTE,
  },
  {
    id: 4,
    label: "Contact",
    route: CONTACT_ROUTE,
  },
];

export default navMenu;
