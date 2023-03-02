import "./Header.css";
import img from "../assets/cogwhee.svg";

const Header = () => {
  return (
    <>
      <div className="header bg-secondary d-flex justify-content-evenly">
        <img src={img} alt="task.png" className="img-fluid " />
        <h1>TASK LIST</h1>
      </div>
    </>
  );
};

export default Header;
