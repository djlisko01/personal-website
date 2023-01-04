import { MY_INFO } from "../../data/personal_info";
import Modal from "../Modal/Modal";

const HomeView = () => {
  return (
    <div className="homepage" id="home-page">
      <div className="bgColor">
        <div className="row justify-content-center">
          <div className="col-6" id="mainBox">
            <h1 className="text-center fs-1 text fw-bolder">{MY_INFO.name}</h1>
            <h2> {MY_INFO.myTitle} </h2>
            <p>{MY_INFO.myDescription}</p>
          </div>
        </div>
        <Modal />
      </div>
    </div>
  );
};

export default HomeView;
