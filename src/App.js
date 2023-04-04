import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
      <Link to="/Contact" className="nav-item">Contact</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
};

export default App;

























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
