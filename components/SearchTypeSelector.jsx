import { MenuItem, Select } from "@mui/material";

const selectItems = ["Title", "Ingredient"];

const SearchTypeSelector = ({ searchType, setSearchType }) => {
  return (
    <div className="mt-8 flex items-center text-xs font-medium tablet:mt-7 tablet:text-sm desktop:text-lg">
      <span className="mr-3.5">Search by: </span>
      <Select
        size="small"
        className="w-36 bg-inactive-color bg-opacity-10 text-xs font-medium tablet:text-sm"
        onChange={(e) => setSearchType(e.target.value)}
        value={searchType}
      >
        {selectItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SearchTypeSelector;
