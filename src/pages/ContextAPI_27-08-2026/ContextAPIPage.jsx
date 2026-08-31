import ThemeButton from "../../components_25-08-2026/ContextAPI_27-08-2026/ThemeButton";
import ThemeProvider from "../Components_25-08-2026/ContextAPI_27-08-2026/ThemeProvider"

const ContextAPIPage = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API</h1>
        <ThemeButton/>
      </div>
    </ThemeProvider>
  );
};

export default ContextAPIPage;