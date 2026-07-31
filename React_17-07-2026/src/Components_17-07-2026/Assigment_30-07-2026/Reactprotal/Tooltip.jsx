import ReactDOM from "react-dom";

function Tooltip({ message }) {
return ReactDOM.createPortal( 
<div className="tooltip">
{message}
 </div>,
document.getElementById("portal-root")
);
}

export default Tooltip;
