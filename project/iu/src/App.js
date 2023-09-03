import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Hello from "./pages/Hello";
import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />;
          <Route path="/hello" element={<Hello />} />;
        </Routes>
        <Footer />
      </BrowserRouter>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
