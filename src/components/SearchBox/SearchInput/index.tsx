import search from "../../../assets/search.svg";
import "./styles.scss";

type SearchInputProps = {
  value: string;
  onChange: void;
};

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="search-box">
      <input
        value={value}
        onChange={undefined}
        type="text"
        placeholder="Enter the name in the planet"
      />
      <button>
        <img src={search} alt="" />
        Search
      </button>
    </div>
  );
};

export default SearchInput;
