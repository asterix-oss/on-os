import React from "react";
import { Route, Routes as DOMRoutes, Location } from "react-router-dom";
import Loading from "./screens/Loading";
import Main from "./screens/Main";
import Welcome from "./screens/Welcome";

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
