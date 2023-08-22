import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-amber-300">
      <nav className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/icon.png"
              alt="kobita-hat-logo"
              className="h-10"
            />
            <h1
              className="text-md font-semibold"
              // style={{ fontFamily: "bn-kalpurush, en-montserrat" }}
            >
              কবিতা হাট <br />
              Kobita Hat
            </h1>
          </Link>
          <div className="flex items-center gap-4 ">
            <Link
              to="/poems"
              className="p-2 px-4  border-b-2 border-b-transparent hover:border-b-gray-800 transition-all"
              data-tw-content=" "
            >
              Explore
            </Link>
            <Link
              to="/profile"
              className="p-2 px-4 border-b-2 border-b-transparent hover:border-b-gray-800 transition-all"
              data-tw-content=" "
            >
              Profile
            </Link>
            <Link
              to="/fonts-preview"
              className="p-2 px-4 border-b-2 border-b-transparent hover:border-b-gray-800 transition-all"
              data-tw-content=" "
            >
              Fonts
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
