import ReactDOM from "react-dom";

function Modal({ closeModal }) {
return ReactDOM.createPortal( <div className="modal-overlay">

  <div className="modal-box">

    <button
      className="close-button"
      onClick={closeModal}>
    </button>

    <h2>Welcome to React Portal</h2>

    <p>
      This modal is created using ReactDOM.createPortal().
    </p>

    <p>
      The modal is rendered inside the portal-root
      element.
    </p>

    <button onClick={closeModal}>
      Close Modal
    </button>

  </div>

</div>,

document.getElementById("portal-root")


);
}

export default Modal;
