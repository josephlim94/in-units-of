import * as React from 'react';
import Typography from '@mui/material/Button';
import ProductHeroLayout from './ProductHeroLayout';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

const normalizing_unit = "meter";
const conversion_map = {
  "meter": 1,
  "Ariana Grande": 1.6
}
let inputValue = 0;

export default function ProductHero() {
  const conversion_map_keys = Object.keys(conversion_map);
  const [objectOfInterest, setObjectOfInterest] = React.useState('');
  const [fromItem, setFromItem] = React.useState(conversion_map_keys[0]);
  const [toItem, setToItem] = React.useState(conversion_map_keys[0]);
  let inputError = false;
  const helperText = "Enter a number";
  const inputErrorHelperText = "Must be a number";

  const calculateResultValue = () => {
    const normalizing_unit_value = conversion_map[normalizing_unit];
    if (conversion_map.hasOwnProperty(fromItem) && conversion_map.hasOwnProperty(toItem)) {
      const from_unit_value = conversion_map[fromItem];
      const to_unit_value = conversion_map[toItem];

      return inputValue * from_unit_value * normalizing_unit_value / to_unit_value;
    }
    throw Error("Programming error.")
  }

  const [resultValue, setResultValue] = React.useState(calculateResultValue());

  const refreshResult = () => {
    // Do calculation
    let result_value;
    try {
      result_value = calculateResultValue();
    } catch (e) {
      console.log(e);
    }

    // Display result
    setResultValue(result_value);
  }

  const handleChangeObjectOfInterest = (event) => {
    setObjectOfInterest(event.target.value);
    if (Number(event.target.value)) {
      inputValue = Number(event.target.value);
    } else {
      return;
    }

    refreshResult();
  };

  const handleChangeFromItem = (event) => {
    setFromItem(String(event.target.value));

    refreshResult();
  };

  const handleChangeToItem = (event) => {
    setToItem(String(event.target.value));

    refreshResult();
  };

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Box>
        <TextField
          id="outlined-name"
          // label="Name"
          variant="outlined"
          value={objectOfInterest}
          onChange={handleChangeObjectOfInterest}
          error={inputError}
          helperText={inputError ? inputErrorHelperText : helperText}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fromItem}
          onChange={handleChangeFromItem}
          sx={{
            width: 250
          }}
        >
          {conversion_map_keys.map((conversion_map_key) => (
            <MenuItem
              key={conversion_map_key}
              value={conversion_map_key}
            >
              {conversion_map_key}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Typography color="inherit" align="center" variant="h1" marked="center">
        in units of
      </Typography>

      <Box>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={toItem}
          onChange={handleChangeToItem}
          sx={{
            width: 250
          }}
        >
          {conversion_map_keys.map((conversion_map_key) => (
            <MenuItem
              key={conversion_map_key}
              value={conversion_map_key}
            >
              {conversion_map_key}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="outlined-name"
          label="is"
          variant="outlined"
          disabled
          value={resultValue}
        />
      </Box>
    </ProductHeroLayout>
  );
}