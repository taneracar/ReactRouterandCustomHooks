import React, { useCallback, useState } from "react";
import Counter from "./Counter";

const UseCallbackExample = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const memorizedSetCountOneFunc = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memorizedSetCountTwoFunc = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );

  return (
    <div>
      <h1>UseCallbackExample</h1>
      <Counter countValue={countOne} onClick={memorizedSetCountOneFunc} />
      <Counter countValue={countTwo} onClick={memorizedSetCountTwoFunc} />
    </div>
  );
};

export default UseCallbackExample;
