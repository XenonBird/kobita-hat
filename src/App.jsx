import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<pre>404 - Page not found</pre>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
