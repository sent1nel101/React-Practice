import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Body() {
  return (
    <>
      <p id="home"></p>
      <div id="containers">
        <img
          id="bodyImage"
          alt="decorative"
          src="http://source.unsplash.com/random/1440x1080/?landscape"
        />
        <h1 id="bodyTitle">The Future is Now</h1>
        <br />
        <h3 id="bodySubTitle">Let's get there together</h3>
        <Button id="btnClick" variant="outline-warning">
          Click
        </Button>
      </div>

      <p id="about"></p>
    </>
  );
}

export default Body;
