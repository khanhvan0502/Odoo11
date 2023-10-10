import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  Chip,
  MenuItem,
  TextField,
  InputAdornment,
  IconButton,
  Grow,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const names = [
  { name: "Oliver Hansen" },
  { name: "Van Henry" },
  { name: "April Tucker" },
  { name: "Ralph Hubbard" },
  { name: "Omar Alexander" },
  { name: "Carlos Abbott" },
  { name: "Miriam Wagner" },
  { name: "Bradley Wilkerson" },
  { name: "Virginia Andrews" },
  { name: "Kelly Snyder" },
];

function App() {
  const [personName, setPersonName] = useState([]);

  return (
    <ChipSelect
      label="Names"
      value={personName}
      onChange={setPersonName}
      options={names}
      renderLabel={(option) => option.name}
    />
  );
}

const ChipSelect = ({ label, value, onChange, options, renderLabel }) => {
  return (
    <TextField
      select
      value={value}
      fullWidth
      variant="outlined"
      label={label}
      multiline
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        endAdornment: (
          <Grow in={Boolean(value.length)}>
            <InputAdornment onClick={() => onChange([])}>
              <IconButton style={{ marginRight: "8px" }}>
                <Close />
              </IconButton>
            </InputAdornment>
          </Grow>
        ),
      }}
      SelectProps={{
        multiple: true,
        renderValue: (selected) =>
          selected.map((value) => (
            <Chip
              key={`${renderLabel ? renderLabel(value) : value}-chip`}
              label={renderLabel ? renderLabel(value) : value}
              style={{ marginRight: "4px" }}
              onDelete={() => {
                const newValue = [...selected];
                const index = selected.findIndex((v) => v === value);
                newValue.splice(index, 1);
                console.log({ newValue });
                onChange(newValue);
              }}
            />
          )),
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={`${renderLabel ? renderLabel(option) : option}-option`}
          value={option}
          disabled={Boolean(
            value.find((o) =>
              renderLabel
                ? renderLabel(o) === renderLabel(option)
                : o === option
            )
          )}
        >
          {renderLabel ? renderLabel(option) : option}
        </MenuItem>
      ))}
    </TextField>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
