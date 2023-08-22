import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-amber-300">
      <div className="max-w-6xl mx-auto p-4">
        <Link to="/" className="flex items-center gap-0">
          <img src="/public/icon.png" alt="kobita-hat-logo" className="h-10" />
          <h1
            className="text-md font-semibold"
            style={{ fontFamily: "bn-lipishree, en-lugrasimo" }}
          >
            কবিতা হাট <br />
            Kobita hat{" "}
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
