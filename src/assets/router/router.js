import Vue from "vue";
import Router from "vue-router";
import catalog from "@/components/catalog";
import film from "@/components/film-item"

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "catalog",
            component: catalog
        },
        {
            path: "/film/:id",
            name: "film",
            component: film,
            props: true,
        }
    ]
});
export default router;