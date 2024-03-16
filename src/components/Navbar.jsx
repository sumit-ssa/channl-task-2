import logo from "../assets/Logo.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <nav className="relative flex w-full px-4 pt-3 max-w-[1600px] mx-auto">
      <div className="flex w-full flex-wrap items-center justify-between  ">
        <Link to={""} className="w-20">
          <img src={logo} className="w-full cursor-pointer" />
        </Link>
        <div className="bg-white px-3 py-1 rounded border cursor-pointer hover:scale-95 transition-all duration-500">
          <div
            className="flex items-center justify-center gap-2 "
            onClick={goToFavorites}
          >
            <FaHeart className="fill-red-400 animate-pulse" />
            <span className="text-black font-medium">Favorites </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
