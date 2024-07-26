import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailedPage from "./pages/DetailedPage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] bg-[#010536]/90">
        <div className="shadow-lg bg-[#010536]">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailed-page" element={<DetailedPage />} />
  
        </Routes>
        <div className=" shadow-lg bg-[#010536]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
