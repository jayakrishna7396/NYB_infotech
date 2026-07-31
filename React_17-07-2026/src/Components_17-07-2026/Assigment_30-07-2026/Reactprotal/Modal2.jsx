import ReactDOM from "react-dom";

function Modal2({ closeModal }) {
return ReactDOM.createPortal( 
<div className="modal-overlay"> 
    <div className="modal-box">
     <h2>React Portal Modal</h2>


    <p>
      This modal is rendered using ReactDOM.createPortal().
    </p>

    <button onClick={closeModal}>
      Close Modal
    </button>
  </div>
</div>,
document.getElementById("portal-root")


);
}

export default Modal2;
