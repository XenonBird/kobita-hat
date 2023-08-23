import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import FontsPreview from "./components/FontsPreview";
import NotFound from "./components/NotFound";
import Poems from "./components/Poems";
import PoemInput from "./components/PoemInput";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen flex flex-col bg-amber-50 overflow-hidden"
        style={{ fontFamily: "en-montserrat, bn-kalpurush" }}
      >
        <Header />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poems" element={<Poems />} />
            <Route path="/write" element={<PoemInput />} />
            <Route path="/fonts-preview" element={<FontsPreview />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
