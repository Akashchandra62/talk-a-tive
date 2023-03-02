import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chatpage from "./pages/Chatpage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/chats" element={<Chatpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
