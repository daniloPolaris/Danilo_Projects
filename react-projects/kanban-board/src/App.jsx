import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import BoardPage from "./pages/BoardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/board/:id" element={<BoardPage />} />
    </Routes>
  );
}

export default App;
