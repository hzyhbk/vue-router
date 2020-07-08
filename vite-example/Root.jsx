import { React } from "es-react";
import VueRouter from "./vue-router.esm.browser";
import App, { Main, About, User, Home } from "./App";
import RouterView from "./RouterView";
const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "main",
        component: Main,
      },
      {
        path: "about",
        component: About,
      },
      {
        path: "user",
        component: User,
      },
    ],
  },
];

const routerOptions = {
  mode: "hash",
  routes,
};

export const router = new VueRouter(routerOptions);

const Root = () => <RouterView router={router} />;

export default Root;
