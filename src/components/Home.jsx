import { Link } from "react-router-dom";

const Home = () => {
  return (
      <div className="max-w-6xl mx-auto p-4">
        <section className="mb-8 py-20 text-center">
          <h1 className="text-4xl mb-16 font-bn-lipishree leading-[5rem]">
            বাংলার মুখ আমি দেখিয়াছি, <br />তাই আমি পৃথিবীর রূপ খুঁজিতে যাই না আর
          </h1>
          <Link
            to="/"
            className="px-6 py-3 font-semibold bg-amber-300 hover:bg-amber-400 rounded-md"
          >
            সেই বাংলার কবিতা
          </Link>
        </section>
      </div>
  );
};

export default Home;
