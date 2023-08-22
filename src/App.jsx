import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import FontsPreview from "./components/FontsPreview";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fonts-preview" element={<FontsPreview />} />
        <Route path="/*" element={<pre>404 - Page not found</pre>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
