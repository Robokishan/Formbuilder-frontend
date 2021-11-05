/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Login from "./views/v1/Login";
import FormLists from "./views/v1/FormLists";
import CreateForm from "./views/v1/CreateForm";
import Responses  from "./views/v1/Responses";
import PublicForm from "./views/v1/PublicForm";

const routes = [
  {
    show: true,
    path: "/forms",
    name: "Forms",
    icon: "ni ni-bullet-list-67 text-red",
    component: FormLists,
    layout: "/admin",
  },
  {
    show: true,
    path: "/create",
    name: "Create Form",
    icon: "ni ni-bullet-list-67 text-red",
    component: CreateForm,
    layout: "/admin",
  },
  {
    show: true,
    path: "/responses",
    param: "/:responseId?",
    name: "Responses",
    icon: "ni ni-bullet-list-67 text-red",
    component: Responses,
    layout: "/admin",
  },
  {
    path: "/form/:formId",
    name: "PublicForm",
    icon: "ni ni-bullet-list-67 text-red",
    component: PublicForm,
    layout: "/public",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
