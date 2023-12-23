import SearchInput from "./SearchInput";
import "./styles.scss";
import planet from "../../assets/planet.png";
import starship from "../../assets/spaceship.svg";
import Filters from "./Filters";

const SearchBox = () => {
  return (
    <div className="box">
      <img className="planet-img" src={planet} alt="" />
      <img className="startship-img" src={starship} alt="" />
      <div className="description-box">
        <div className="text-description">
          <p className="description">
            Discover all the information about Planets of the Star Wars
            Saga
          </p>
        </div>

        <SearchInput value={""} onChange={undefined} />

        <Filters />
      </div>
    </div>
  );
};

export default SearchBox;
