import Home1 from "../../Components_17-07-2026/global sate/Home1";
import ThemeProvider from "../../Components_17-07-2026/global sate/ThemeContext";
import Header from "../../Components_17-07-2026/Global State Management Concepts/components/Header";



function GlobalStatepage() {
  return (
      <ThemeProvider>
            <Header/>
            <Home1/>
          </ThemeProvider>
  )
}

export default GlobalStatepage;
