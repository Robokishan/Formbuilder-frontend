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
import Forms from "./views/v1/Forms";
import CreateForm from "./views/v1/CreateForm";


const routes = [
  {
    show: true,
    path: "/forms",
    name: "Forms",
    icon: "ni ni-bullet-list-67 text-red",
    component: Forms,
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
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
