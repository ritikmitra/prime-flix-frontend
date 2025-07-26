import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
           <Route path="/admin" element={<Admin />} /> {/* ✅ Admin Route */}
          <Route path="*" element={<div className="p-10 text-center">404 Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
