import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  return (
    <>
      <h1>Parent</h1>

      <Child1 />
      <Child2 />
    </>
  );
}

export default Parent;