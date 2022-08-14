import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Button';
import ProductHeroLayout from './ProductHeroLayout';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

export default function ProductHero() {
  const [name, setName] = React.useState('Cat in the Hat');
  const [whatItem, setWhatItem] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChangeWhatItem = (event) => {
    setWhatItem(String(event.target.value));
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
      <TextField
        id="outlined-name"
        label="Name"
        variant="outlined"
        // InputProps={{
        //   sx: {
        //     color: "white"
        //   }
        // }}
        // sx={{
        //   "& .MuiInputLabel-root": { color: 'white' }, //styles the label
        //   "& .MuiOutlinedInput-root": {
        //     "& > fieldset": { borderColor: "white" },
        //   },
        //   "& .MuiOutlinedInput-root.Mui-focused": {
        //     "& > fieldset": {
        //       borderColor: "white"
        //     }
        //   },
        //   "& .MuiOutlinedInput-root:hover": {
        //     "& > fieldset": {
        //       borderColor: "white"
        //     }
        //   }
        // }}
        value={name}
        onChange={handleChange}
      />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={whatItem}
        onChange={handleChangeWhatItem}
        sx={{
          width: 250
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        in units of
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}