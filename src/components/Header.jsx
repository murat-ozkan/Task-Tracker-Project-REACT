import "./Header.css";
import img from "../assets/cogwhee.svg";

const Header = () => {
  return (
    <>
      <div className="header d-flex justify-content-evenly">
        <img src={img} alt="task.png" className="img-fluid " />
        <h1>TASK TRACKER</h1>
      </div>
    </>
  );
};

export default Header;
