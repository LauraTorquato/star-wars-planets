import planet from "../../../assets/planet.png";
import thermometer from "../../../assets/thermometer.svg";
import triangles from "../../../assets/triangles.svg";
import group from "../../../assets/group.svg";

import "./styles.scss";

const Details = () => {
  return (
    <div className="planet-details">
      <div className="planets">
        <img src={planet} alt="" />

        <div className="planets-name">
          <span className="planet-title">Planet:</span>
          <span className="planet-name">Tatooine</span>
        </div>
      </div>

      <div className="planet-information">
        <div className="info-icons">
          <img src={thermometer} alt="" />
          <img src={triangles} alt="" />
          <img src={group} alt="" />
        </div>

        <div className="info-described">
          <span>
            <b>Climate:</b> Arid
          </span>

          <span>
            <b>Terrain:</b> Desert
          </span>

          <span>
            <b>Population:</b> 20000000
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
