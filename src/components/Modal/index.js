import React, { useState } from "react";

import "./styles.css";

import tickImg from "../../assets/images/tick.svg";
import crossImg from "../../assets/images/cross.svg";
function Modal({ type, visible }) {
  const [_visible, setVisible] = useState(visible);

  const modalStyle = {
    display: _visible ? "block" : "none",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgb(0,0,0)",
    backgroundColor: "rgba(0,0,0,0.4)",
  };

  return (
    <div style={modalStyle} class="modal">
      <div class="modal-content">
        {/* <span onClick={() => setVisible(false)} class="close">
          &times;
        </span> */}
        <img src={tickImg} />
        <p>Voce acertou!</p>
      </div>
    </div>
  );
}

export default Modal;
