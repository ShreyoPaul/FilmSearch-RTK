import {  Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Foter from './components/Foter';
import MovieDetils from './components/MovieDetils';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:imdbID" element={<MovieDetils />} />

        {/* <Route path="*" element={<Error404/>} /> */}
      </Routes>
      <Foter/>
    </>
  );
}

export default App;
