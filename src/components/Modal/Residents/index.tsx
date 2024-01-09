import person from "../../../assets/person.svg";

import "./styles.scss";

const Residents = () => {
  return (
    <div className="residents-informations">
      <div className="residents-number">
        <img src={person} alt="" />
        <span>Residents:</span>
      </div>
      <hr />
      <div className="residents-results">
        <span>
          People 01 , People 02 , People 04 , People 06 , People 07 ,
          People 08 , People 09 , People 11, People 43, People 62 .
        </span>
      </div>
    </div>
  );
};

export default Residents;
