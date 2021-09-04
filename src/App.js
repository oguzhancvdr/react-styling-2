import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import TextFieldComp from "./components/material-ui/text-field/TextFieldComp";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import TypographyComp from "./components/material-ui/typography/TypographyComp";
import Wrapper from "./components/material-ui/wrapper/Wrapper";
import Cards from "./components/material-ui/cards/Cards";
import AppBarComp from "./components/material-ui/app-bar/AppBarComp";
import StyledButton from "./components/material-ui/styled-button/StyledButton";

// import StyledComponents from "./components/styled-comp";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[300],
    },
  },

  typography: {
    h2: {
      fontSize: 38,
      padding: 2,
    },
    subtitle1: {
      marginBottom: 5,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AppBarComp />
        <div className="App">
          <header className="App-header">
            {/* <StyledComponents /> */}
            <StyledButton />
            <TypographyComp />
            <Cards />
            <TextFieldComp />
            <CheckBoxComp />
            <Buttons />
          </header>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}
export default App;
