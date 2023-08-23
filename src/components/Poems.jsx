import poemsData from "../data";

const Poems = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PoemCard poem={poemsData[0]} />
        <PoemCard poem={poemsData[0]} />
      </section>
    </div>
  );
};

const PoemCard = ({ poem }) => {
  return (
    <div className="aspect-a4 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">
        {poem.title}
      </h3>
      <p className="text-gray-600 mb-2 font-bn-lipishree text-right">
        {poem.writer}
      </p>
      <p className="text-gray-700">{poem.content}</p>
    </div>
  );
};

export default Poems;
