import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  const message = "React Training";

  return (
    <>
      <Child1 text={message} />
      <Child2 text={message} />
    </>
  );
}

export default Parent;