import React, { useEffect, useRef } from "react";

const Hooks = () => {
  const countValue = useRef(0);
  const divElementRef = useRef();
  const inputRefElement = useRef();

  function handleClick() {
    countValue.current++;
    console.log(countValue.current);
  }
  useEffect(() => {
    const getDivReference = divElementRef.current;
    inputRefElement.current.focus();
    getDivReference.style.color = "red";
    setTimeout(() => {
      getDivReference.style.color = "green";
    }, 2000);
  }, []);

  return (
    <div>
      <h1>useRef, useCallback and useMemo hooks</h1>
      <button onClick={handleClick}>Click ME</button>
      <div ref={divElementRef}>Some Random Text</div>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        ref={inputRefElement}
      />
    </div>
  );
};

export default Hooks;
