import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <div className="p-4 py-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-4">Oops, Page Not Found!</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for might be in another dimension. Let&apos;s
          get back to reality.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-amber-300 hover:bg-amber-400 rounded-md"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
