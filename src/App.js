import "./styles.css";
import Header from "./Header";
import Body from "./Body";
import Content from "./Content";
import Contact from "./Contact";
import Footer from './Footer'

export default function App() {
  return (
    <div className="App">
      <Header name="D|M" />
      <Body />
      <Content />
      <Contact style={{ backgroundColor: "#4d4d4d", color: "white" }} />
      <Footer />
    </div>
  );
}
