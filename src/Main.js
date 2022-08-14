import * as React from 'react';
import Typography from '@mui/material/Button';
import MainLayout from './MainLayout';
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

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.conversion_map_keys = Object.keys(conversion_map);
    this.inputErrorHelperText = "Must be a number";
    this.helperText = "Enter a number";
    // Don't call this.setState() here!
    this.state = {
      objectOfInterest: '',
      fromItem: this.conversion_map_keys[0],
      toItem: this.conversion_map_keys[0],
      inputError: false,
      inputValue: 0,
      resultValue: 0,
    };
  }

  calculateResultValue = () => {
    const normalizing_unit_value = conversion_map[normalizing_unit];
    if (conversion_map.hasOwnProperty(this.state.fromItem) && conversion_map.hasOwnProperty(this.state.toItem)) {
      const from_unit_value = conversion_map[this.state.fromItem];
      const to_unit_value = conversion_map[this.state.toItem];

      return this.state.inputValue * from_unit_value * normalizing_unit_value / to_unit_value;
    }
    throw Error("Programming error.")
  }

  refreshResult = () => {
    // Do calculation
    try {
      const resultValue = this.calculateResultValue();
      // Display result
      this.setState({
        resultValue,
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleChangeObjectOfInterest = (event) => {
    this.setState({
      objectOfInterest: event.target.value,
    });
    if (Number(event.target.value)) {
      this.setState({
        inputValue: Number(event.target.value)
      }, this.refreshResult);
    } else {
      return;
    }
  };

  handleChangeFromItem = (event) => {
    this.setState({
      fromItem: String(event.target.value)
    }, this.refreshResult);
  };

  handleChangeToItem = (event) => {
    this.setState({
      toItem: String(event.target.value)
    }, this.refreshResult);
  };

  componentDidMount() {
    this.refreshResult();
  }

  render() {
    return (
      <MainLayout
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
            value={this.state.objectOfInterest}
            onChange={this.handleChangeObjectOfInterest}
            error={this.state.inputError}
            helperText={this.state.inputError ? this.inputErrorHelperText : this.helperText}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.fromItem}
            onChange={this.handleChangeFromItem}
            sx={{
              width: 250
            }}
          >
            {this.conversion_map_keys.map((conversion_map_key) => (
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
            value={this.state.toItem}
            onChange={this.handleChangeToItem}
            sx={{
              width: 250
            }}
          >
            {this.conversion_map_keys.map((conversion_map_key) => (
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
            value={this.state.resultValue}
          />
        </Box>
      </MainLayout>
    );
  }
}

export default Main;