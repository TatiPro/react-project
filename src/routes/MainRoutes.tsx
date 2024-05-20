import { Form, RouteObject, useRoutes } from "react-router-dom";
import { CATALOG_ROUTE, FORM_ROUTE, MAIN_ROUTE, PROFILE_ROUTE } from "./config";
import React, { useState } from "react";
import Catalog from "../pages/Catalog/Catalog";
import Main from "../pages/Main/Main";
import Profile from "../pages/Profile/Profile";
import MyForm from "../pages/Form/Form";
// Маршрутизация (модуль 3)
interface IMainRoutes {
  isAuth: boolean;
  setIsAuth: (val: boolean) => void;
}
const MainRoutes: React.FC<IMainRoutes> = ({ isAuth, setIsAuth }) => {
  const basedPath: RouteObject[] = [
    { path: MAIN_ROUTE, element: <Main /> },
    { path: CATALOG_ROUTE, element: <Catalog /> },
    { path: FORM_ROUTE, element: <MyForm /> },
  ];
  const authPath: RouteObject[] = [
    { path: PROFILE_ROUTE, element: <Profile /> },
  ];

  const resultPath: RouteObject[] = basedPath;

  isAuth ? resultPath.push(...authPath) : "";

  return useRoutes(basedPath);
};

export default MainRoutes;
