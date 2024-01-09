import React from "react";
import "./styles.scss";

import Details from "./Details";
import Residents from "./Residents";
import Films from "./Films";

const Modal = () => {
  return (
    <div className="modal">
      <Details />
      <Residents />
      <Films />
    </div>
  );
};

export default Modal;
