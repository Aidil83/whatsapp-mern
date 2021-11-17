import { IMaskInput } from "react-imask";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEvent, forwardRef, useState } from "react";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

interface State {
  phone: string;
}

export default function FormattedInputs() {
  const [values, setValues] = useState<State>({
    phone: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <TextField
        label="phone number"
        value={values.phone}
        onChange={handleChange}
        name="phone"
        id="phone"
        InputProps={{
          inputComponent: TextMaskCustom as any,
        }}
        variant="outlined"
      />
    </Box>
  );
}
