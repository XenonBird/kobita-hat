import poemsData from "../data";

const Poems = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <section>
        <PoemCard poem={poemsData[0]} />
      </section>
    </div>
  );
};

const PoemCard = ({ poem }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">
        {poem.title}
      </h3>
      <p className="text-gray-600 mb-2">By {poem.writer}</p>
      <p className="text-gray-700">{poem.content}</p>
    </div>
  );
};

export default Poems;
