import React, { lazy } from "react";
import { Route, Routes as DOMRoutes, Location } from "react-router-dom";
const Loading = lazy(() => import("./screens/Loading"));
const Main = lazy(() => import("./screens/Main"));
const Welcome = lazy(() => import("./screens/Welcome"));

const Routes: React.FC<{
  location: Location;
}> = ({ location }) => {
  return (
    <DOMRoutes location={location}>
      <Route path='/' element={<Loading />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/home' element={<Main />} />
    </DOMRoutes>
  );
};

export default Routes;
