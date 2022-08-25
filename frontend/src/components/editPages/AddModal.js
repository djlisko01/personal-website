import { closeBtn } from "../../public/icons";

const AddModal = ({ setShowModal }) => {
  return (
    <div className="add-modal">
      <div className="modal-content p-3">
        <div className="modal-title pb-3">
          <h5>Modal</h5>
          <button className="x-close-btn" onClick={() => setShowModal(false)}>
            {closeBtn}
          </button>
        </div>
        <div className="add-modal-body pt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure
            veniam ut! Illo nesciunt aut ab, assumenda quisquam dolor
            recusandae, reiciendis fugit repellendus saepe expedita, nobis unde
            consequatur nam quod!
          </p>
        </div>
        <div className="add-modal-footer pt-3">
          <button className="save-btn">Save</button>
          <button className="close-btn" onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
