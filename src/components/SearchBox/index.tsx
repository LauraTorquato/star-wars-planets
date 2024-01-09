import SearchInput from "./SearchInput";
import "./styles.scss";
import desert from "../../assets/desert.png";
import starship from "../../assets/spaceship.svg";
import Filters from "./Filters";

const SearchBox = () => {
  return (
    <div className="box">
      <img className="desert-img" src={desert} alt="" />
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
