import SearchInput from "./SearchInput";
import "./styles.scss";
import planet from "../../assets/planet.png";
import Filters from "./Filters";

const SearchBox = () => {
  return (
    <div className="box">
      <img src={planet} alt="" />
      <div className="description-box">
        <p className="description">
          Discover all the information about Planets of the Star Wars Saga
        </p>

        <SearchInput value={""} onChange={undefined} />

        <Filters />
      </div>
    </div>
  );
};

export default SearchBox;
