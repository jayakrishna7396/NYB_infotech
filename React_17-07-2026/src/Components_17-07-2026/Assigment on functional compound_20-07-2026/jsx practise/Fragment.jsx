//without fragment
<div>
  <h1>Hello</h1>
  <p>React</p>
</div>


//with fragment
// {/* <>
//   <h1>Hello</h1>
//   <p>React</p>
// </> */}


function FragmentComponent() {
  return (
    <>
      <h2>React Fragment</h2>
      <p>First Paragraph</p>
      <p>Second Paragraph</p>
    </>
  );
}

export default FragmentComponent;