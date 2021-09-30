import { useState, useEffect, useCallback } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  return { count, setCount, increment };
}

export default useCounter;
