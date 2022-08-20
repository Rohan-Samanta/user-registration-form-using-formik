import "./App.css";
import Container from "@mui/material/Container";
import Registration from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <br />
      <Container maxWidth="lg">
        <Registration />
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
