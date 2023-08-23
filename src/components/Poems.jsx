import { useEffect, useRef, useState } from "react";
import poemsData from "../data";

const Poems = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PoemCard poem={poemsData[0]} />
        <PoemCard poem={poemsData[0]} />
        <PoemCard poem={poemsData[0]} />
        <PoemCard poem={poemsData[0]} />
      </section>
    </div>
  );
};

const PoemCard = ({ poem }) => {
  const poemCardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  useEffect(() => {
    const updateCardWidth = () => {
      if (poemCardRef.current) {
        setCardWidth(poemCardRef.current.clientWidth);
        console.log("Card width:", poemCardRef.current.clientWidth);
      }
    };
    updateCardWidth(); // Initial width update
    window.addEventListener("resize", updateCardWidth);
    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  const Writer = () => (
    <p
      className="poem-content mb-2 font-bn-lipishree text-right"
      style={{ textAlign: poem.writerAlign, fontSize: cardWidth * 0.04 }}
    >
      {poem.writer}
    </p>
  );

  return (
    <div
      ref={poemCardRef}
      className="aspect-a4 rounded-lg p-6 shadow-md hover:shadow-lg flex flex-col justify-center gap-৬ "
      style={{
        backgroundImage: "url('/old-paper.jpg')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {poem.writerVerAlign === "top" && <Writer />}
      <h3
        className="text-2xl font-semibold mb-2 text-gray-800"
        style={{ textAlign: poem.titleAlign, fontSize: cardWidth * 0.05 }}
      >
        {poem.title}
      </h3>
      {(poem.writerVerAlign === "middle" || !poem.writerVerAlign) && <Writer />}
      <pre
        className="font-bn-kalpurush  whitespace-pre-line"
        style={{ textAlign: poem.contentAlign, fontSize: cardWidth * 0.04 }}
        // style={{ textAlign: "justify", fontSize: cardWidth * 0.04 }}

      >
        {poem.content}
      </pre>
      {poem.writerVerAlign === "bottom" && <Writer />}
    </div>
  );
};

export { PoemCard };
export default Poems;
