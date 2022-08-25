import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TabNav from "./TabNav";

const EditProfileView = () => {
  useEffect(() => {
    console.log("LOADED>>>");
    fetch("https://api.github.com/users/djlisko01/repos")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div id="edit-profile" className="container pt-5">
      <div className="row">
        <div className="col-2">Menu</div>
        <div className="col-10">
          <TabNav mb-5 />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EditProfileView;
