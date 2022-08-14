import ProductHero from './ProductHero';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "dark",
    // text: {
    //   primary: "#fff",
    //   secondary: "rgba(255, 255, 255, 0.7)",
    //   disabled: "rgba(255, 255, 255, 0.5)",
    //   icon: "rgba(255, 255, 255, 0.5)"
    // },
    // primary: {
    //   main: '#f48fb1',
    //   light: "#ffc1e3",
    //   dark: "#bf5f82",
    //   contrastText: "rgba(0, 0, 0, 0.87)"
    // },
    // secondary: {
    //   main: '#64b5f6',
    //   light: "#9be7ff",
    //   dark: "#2286c3",
    //   contrastText: "rgba(0, 0, 0, 0.87)"
    // },
    // background: {
    //   paper: "#121212",
    //   default: "#121212"
    // },
    // divider: "rgba(255, 255, 255, 0.12)",
    // action: {
    //   active: "#fff"
    // }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductHero />
    </ThemeProvider>
  );
}

export default App;
