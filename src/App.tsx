import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Gallary, Home, Error, Movie } from "./pages";
import { Footer, Navbar } from "./components";
import "./index.css";
import { MovieProvider } from "./api/api";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* nested loop for movie */}
          <Route path="/gallary">
            <Route index element={<Gallary />} />
            <Route path=":id" element={<Movie />} />
          </Route>

          {/* error page  */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
