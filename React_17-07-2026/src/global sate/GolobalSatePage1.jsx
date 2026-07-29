
import Header4 from "./Header4";
import Home2 from "./Home2";
import ThemeProvider from "./ThemeContext";

function GlobalSatetPage1() {
  return (
    <ThemeProvider>
      <Header4 />
      <Home2 />
    </ThemeProvider>
  );
}

export default GlobalSatetPage1;