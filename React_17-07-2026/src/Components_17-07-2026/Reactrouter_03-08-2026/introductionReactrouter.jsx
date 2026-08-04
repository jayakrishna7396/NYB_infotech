// React Router is a popular library used in React applications to handle routing and navigation.
// Routing means displaying different components or pages based on the URL without reloading the entire web page.


// React Router helps us:
// 1.Create multiple routes
// 2.Navigate between pages
// 3.Change the URL
// 4.Display different components for different URLs
// 5.Create nested routes
// 6.Create dynamic routes
// 7.Handle invalid URLs with a 404 page
// 8.Navigate programmatically

example
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;