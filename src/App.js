import "./App.css";
// import StyledComponents from './components/styled-comp/index'
import Buttons from './components/material-ui/buttons/Buttons';
import CheckBoxComp from './components/material-ui/checkbox/CheckBoxComp';
import TextFieldComp from './components/material-ui/text-field/TextFieldComp'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <TextFieldComp />
          <CheckBoxComp />
          <Buttons />
          {/* <StyledComponents /> */}
        
        </header>
      </div>
    </>
  );
}
export default App;
