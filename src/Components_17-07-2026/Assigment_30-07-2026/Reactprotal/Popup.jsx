import ReactDOM from "react-dom";

function Popup({ closePopup }) {
return ReactDOM.createPortal( 
<div className="popup-overlay">
     <div className="popup-box"> 
        <h2>Welcome!</h2>

    <p>
      This is a popup created using React Portal.
    </p>

    <button onClick={closePopup}>
      Close Popup
    </button>
  </div>
</div>,
document.getElementById("portal-root")


);
}

export default Popup;
