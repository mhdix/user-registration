import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Registration from "./components/Registration";
import UsersList from "./components/UsersList";
import Home from "./components/Home";
import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<User />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
