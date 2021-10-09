import Autocomplete from "@mui/material/Autocomplete";
import { IMessages } from "../../../interfaces/types";
import * as api from "../../../api/wsApi";
import { useEffect } from "react";
import { StyledField } from "./Searchbox";
import { TextField } from "@mui/material";

interface props {
  values: { search: string };
  handleChange: any;
  searchboxRef: any;
  isSearchbox: boolean;
}

function SearchAutoSuggestions({
  values,
  handleChange,
  searchboxRef,
  isSearchbox,
}: props) {
  const { data: messages } = api.useMessages();

  useEffect(() => {
    console.log("searchboxref: ->", searchboxRef.current);
  }, [isSearchbox]);

  if (typeof messages === "undefined") {
    return null;
  }

  return (
    <Autocomplete
      freeSolo
      options={messages.map((option: IMessages) => option.message)}
      renderInput={(params) => (
        <StyledField
          name="search"
          value={values.search}
          onChange={handleChange}
          placeholder="Search..."
          ref={searchboxRef}
          {...params}
        />
      )}
    />
  );
}

export default SearchAutoSuggestions;
