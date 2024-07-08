import { IconContext } from "react-icons";
import Container from "./Layout/Container";
import Header from "./Layout/Header";
import Main from "./Layout/Main";

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ color: "black", size: "6em" }}>
        <Container>
          <Header />
          <Main />
        </Container>
      </IconContext.Provider>
    </div>
  );
}

export default App;
