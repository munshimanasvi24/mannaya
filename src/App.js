import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import Feedback from "./pages/Feedback";
import Layout from "./components/Layout";
import LetterPage from "./pages/LetterPage";
import SongPage from "./pages/SongPage";
import GiftsPage from "./pages/GiftsPage";
import WishesPage from "./pages/WishesPage";

function App() {
  return (
    <Router>
      <Layout>
        <Container fluid className="main-container px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductView />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/letter" element={<LetterPage />} />
            <Route path="/song" element={<SongPage />} />
            <Route path="/gifts" element={<GiftsPage />} />
            <Route path="/wishes" element={<WishesPage />} />
          </Routes>
        </Container>
      </Layout>
    </Router>
  );
}

export default App;
