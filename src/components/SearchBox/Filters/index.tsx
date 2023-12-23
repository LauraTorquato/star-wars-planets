import "./styles.scss";

import filter from "../../../assets/filter.svg";
import arrow from "../../../assets/arrow.svg";

const Filter = () => {
  return (
    <div className="filters-box">
      <div className="filters">
        <img src={filter} alt="" />
        <span>
          <b>Filter:</b>
        </span>

        <img src={arrow} alt="" />
        <span>Name</span>

        <img src={arrow} alt="" />
        <span>Population</span>
      </div>
    </div>
  );
};

export default Filter;
