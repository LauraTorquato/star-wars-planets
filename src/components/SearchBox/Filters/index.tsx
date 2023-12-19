import filter from "../../../assets/filter.svg";
import arrow from "../../../assets/arrow.svg";

const Filter = () => {
  return (
    <div className="filers-box">
      <img src={filter} alt="" />
      <span>Filter:</span>

      <img src={arrow} alt="" />
      <span>Name</span>

      <img src={arrow} alt="" />
      <span>Population</span>
    </div>
  );
};

export default Filter;
