import film from "../../../assets/film.svg";

import "./styles.scss";

const Films = () => {
  return (
    <div className="films-informations">
      <div className="films-number">
        <img src={film} alt="" />
        <span>Films (5):</span>
      </div>
      <hr />
      <div className="films-results">
        <span>Films 1, Films 3, Films 4, Films 5, Films 6.</span>
      </div>
    </div>
  );
};

export default Films;
