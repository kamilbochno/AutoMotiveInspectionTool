/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Repairs from "views/Repairs/Repairs.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import AddVehicle from "../src/pages/VehiclesPage/AddVehicle/AddVehicle";
import Vehicle from "../src/pages/VehiclesPage/Vehicle/Vehicle";
import EditVehicle from "../src/pages/VehiclesPage/EditVehicle/EditVehicle";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/user",
  },
  {
    path: "/vehicles/add",
    name: "Add Vehicle",
    invisible: true,
    component: AddVehicle,
    layout: "/user",
  },
  {
    path: "/vehicles/:id",
    name: "sd",
    invisible: true,
    component: Vehicle,
    layout: "/user",
  },
  {
    path: "/:id/edit",
    name: "Edit vehicle",
    invisible: true,
    component: EditVehicle,
    layout: "",
  },
  {
    path: "/userprofile",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/user",
  },
  {
    path: "/repairs",
    name: "Repairs",
    icon: LibraryBooks,
    component: Repairs,
    layout: "/user",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/user",
  },
];

export default dashboardRoutes;
