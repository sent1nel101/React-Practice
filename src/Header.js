const Header = ({ name }) => {
  return (
    <div id="headerDiv" className="navbar nav fixed-top">
      <h1>{name}</h1>
      <ul id="ulMenu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
