import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((store) => store.search);

  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
        placeholder="Search Photos, Videos or GIFs..."
        className="w-full max-w-2xl px-5 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;