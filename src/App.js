import "./styles.css";
import Header from "./Header";
import Body from "./Body";
import Content from "./Content";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="App">
      <Header name="React" />
      <Body />
      <Content />
      <hr />
      <Contact style={{ backgroundColor: "#4d4d4d", color: "white" }} />
    </div>
  );
}
