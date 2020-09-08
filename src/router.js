import Vue from "vue";
import Router from "vue-router";
import MarkTable from "./components/MarkTable";
import TemplateTable from "./components/TemplateTable";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/marcas",
      name: "marks",
      component: MarkTable,
    },
    {
      path:`/marcas/:id/modelos`,
      name: "models",
      component: TemplateTable,
    },
  ],
});
