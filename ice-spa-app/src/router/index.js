import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
// import LoginCallback and navigationGuard
import { LoginCallback, navigationGuard } from "@okta/okta-vue";
// import the Profile view
import ProfileComponent from "@/views/Profile";
// import Apps view
import PromosView from "@/views/Promos";
// import Login view
import LoginView from "@/views/Login";
import { setOriginalUri } from "../main";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // new route for the callback
  {
    path: "/login/callback",
    component: LoginCallback,
  },
  // add Profile route
  {
    path: "/profile",
    component: ProfileComponent,
    // meta: { requiresAuth: true },
  },
  {
    path: "/promos",
    component: PromosView,
    // meta: { requiresAuth: true },
  },
  {
    path: "/login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// use navigation guard logic to circumvent navigational guard mixin issues in vue-router-next
// provided by the Okta Vue SDK
router.beforeEach(navigationGuard);
router.afterEach(setOriginalUri);
export default router;
