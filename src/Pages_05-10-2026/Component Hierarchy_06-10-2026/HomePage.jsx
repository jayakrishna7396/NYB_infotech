import Content from "../../Components_05-10-2026/Component Hierarchy_06-10-2026/Content";
import Footer from "../../Components_05-10-2026/Component Hierarchy_06-10-2026/Footer";
import Header from "../../Components_05-10-2026/Component Hierarchy_06-10-2026/Header";
import Navbar from "../../Components_05-10-2026/Component Hierarchy_06-10-2026/Navbar";


function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default HomePage;