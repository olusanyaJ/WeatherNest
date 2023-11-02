import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Weather />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
