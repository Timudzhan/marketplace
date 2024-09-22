import MenuImg from "../assets/images/menu.svg";
import HomeImg from "../assets/images/home.svg";
import { Link } from "react-router-dom"

function Header() {
    return(
        <header className="header">
            <div className="container header-row">
                <Link to="/categories" className="btn-category">
                    <img src={MenuImg} alt="menu image" />
                </Link>
                <Link to="/" className="btn-home">
                    <img src={HomeImg} alt="home" />
                </Link>   
            </div>
        </header>
    );
}

export default Header;