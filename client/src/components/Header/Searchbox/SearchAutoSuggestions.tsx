import { Stack } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Field } from "formik";
import { IMessages } from "../../../interfaces/types";
import * as api from "../../../api/wsApi";

function SearchAutoSuggestions() {
  const { data: messages } = api.useMessages();

  if (typeof messages === "undefined") {
    return null;
  }

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={messages.map((option: IMessages) => option.message)}
        renderInput={(params) => <Field {...params} label="freeSolo" />}
      />
    </Stack>
  );
}

export default SearchAutoSuggestions;
