import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { user } from "../data/data"; // Correct path

function App() {
  return (
    <div>
      <NavBar />
      <Home
        name={user.name}
        city={user.city}
      />
      <About
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </div>
  );
}

export default App;
