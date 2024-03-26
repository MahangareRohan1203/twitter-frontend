import { Route, Routes } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </div>
  );
}

export default App;
