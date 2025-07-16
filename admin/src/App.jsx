/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="App">
      {!isAdminRoute} {/* Hide Header on Admin routes */}
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdminRoute}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
