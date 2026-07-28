import useWindowResize from "../Hooks/UseWindowResize";

function ResizeExample() {
  const {
    width,
    height
  } = useWindowResize();

  return (
    <>
      <h2>Window Size</h2>

      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </>
  );
}

export default ResizeExample;