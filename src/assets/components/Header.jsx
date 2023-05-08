import AudioButton from "./AudioButton";
import BackButton from "./BackButton";

const Header = ({ page }) => {
  return (
    <div className="header"
    > <div className="wrapper">
      <BackButton  />
      <h1 className="title">{page} </h1>
      <AudioButton />
      </div>
    </div>
  );
};

export default Header;
