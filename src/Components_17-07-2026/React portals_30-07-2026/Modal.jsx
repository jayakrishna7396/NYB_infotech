import React from "react";

import { createPortal } from "react-dom";

function Modal({ children, closeModal }) {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-box">

        <button>
          className="close-button"
          onClick={closeModal}
        </button>

        {children}

      </div>
    </div>,

    document.getElementById("portal-root")
  );
}

export default Modal;