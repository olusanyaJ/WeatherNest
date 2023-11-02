import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchPage from "./components/SearchPage/SearchPage";
import HomePage from "./components/HomePage/HomePage";
import ComparePage from "./components/ComparePage/ComparePage";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Weather /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/compare" element={<ComparePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
