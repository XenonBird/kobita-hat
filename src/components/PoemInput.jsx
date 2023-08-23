import { useState } from "react";
import { PoemCard } from "./Poems";

const PoemInput = () => {
  const [poem, setPoem] = useState({
    title: "",
    writer: "",
    content: "",
    titleAlign: "left",
    writerAlign: "right",
    writerVerAlign: "middle",
    contentAlign: "left",
    createdAt: new Date().getTime(),
  });

  const handleInput = (field, value) => {
    setPoem({ ...poem, [field]: value });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl text-center font-semibold py-4 border-b mb-4">
        আপনার কবিতা, আমাদের উপহার
      </h2>
      <AllInputs poem={poem} handleInput={handleInput} />

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2 py-3">➤ Preview:</h3>
        <PoemCard poem={poem} />
      </div>

      <button className="block w-full mt-8 mb-2 p-2 bg-amber-300 hover:bg-amber-400 rounded flex justify-center shadow-lg">
        Submit
      </button>
    </div>
  );
};

const AllInputs = ({ poem, handleInput }) => {
  return (
    <>
      <label className="block mb-2">
        <span className="py-2 text-lg">➤ কবিতার নাম </span>
        <input
          type="text"
          value={poem.title}
          onChange={(e) => handleInput("title", e.target.value)}
          placeholder="Type the name of your poem..."
          className="w-full border p-2 px-3"
        />
        <div className="mt-2 grid grid-cols-3">
          <button
            onClick={() => handleInput("titleAlign", "left")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.titleAlign === "left" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/left.svg" className="h-6" />
          </button>
          <button
            onClick={() => handleInput("titleAlign", "center")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.titleAlign === "center" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/center.svg" className="h-6" />
          </button>
          <button
            onClick={() => handleInput("titleAlign", "right")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.titleAlign === "right" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/right.svg" className="h-6" />
          </button>
        </div>
      </label>

      <label className="block mb-2">
        <span className="py-2 text-lg">➤ কবি</span>
        <input
          type="text"
          value={poem.writer}
          onChange={(e) => handleInput("writer", e.target.value)}
          placeholder="Type your name..."
          className="w-full border p-2 px-3"
        />
        <div className="mt-2 grid grid-cols-3">
          <button
            onClick={() => handleInput("writerAlign", "left")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.writerAlign === "left" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/left.svg" className="h-6" />
          </button>
          <button
            onClick={() => handleInput("writerAlign", "center")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.writerAlign === "center" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/center.svg" className="h-6" />
          </button>
          <button
            onClick={() => handleInput("writerAlign", "right")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.writerAlign === "right" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/right.svg" className="h-6" />
          </button>
        </div>
        <div className="mt-2 grid grid-cols-3">
          <button
            onClick={() => handleInput("writerVerAlign", "top")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.writerVerAlign === "top" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/top.svg" className="h-6" />
          </button>
          <button
            onClick={() => handleInput("writerVerAlign", "middle")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.writerVerAlign === "middle" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/middle.svg" className="h-6" />
          </button>
          <button
            onClick={() => handleInput("writerVerAlign", "bottom")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.writerVerAlign === "bottom" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/bottom.svg" className="h-6" />
          </button>
        </div>
      </label>

      <label className="block mb-2">
        <span className="py-2 text-lg">➤ কবিতা</span>
        <textarea
          value={poem.content}
          onChange={(e) => handleInput("content", e.target.value)}
          // onChange={handleQuillChange}
          placeholder="Type your poem here..."
          className="w-full border p-2 px-3"
          rows={"8"}
          style={{ textAlign: "textAlignment" }}
        />
        <div className="mt-2 grid grid-cols-4">
          <button
            onClick={() => handleInput("contentAlign", "left")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.contentAlign === "left" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/left.svg" className="h-6" />
          </button>
          <button
            onClick={() => handleInput("contentAlign", "center")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.contentAlign === "center" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/center.svg" className="h-6" />
          </button>
          <button
            onClick={() => handleInput("contentAlign", "right")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.contentAlign === "right" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/right.svg" className="h-6" />
          </button>
          <button
            onClick={() => handleInput("contentAlign", "justify")}
            className={
              "p-2 bg-white border flex justify-center hover:bg-gray-200" +
              (poem.titleAlign === "justify" ? " bg-gray-200" : "")
            }
          >
            <img src="icons/justify.svg" className="h-6" />
          </button>
        </div>
      </label>
    </>
  );
};

export default PoemInput;
