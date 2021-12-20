import React from "react";
import { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState();

  return (
    <div>
      <p>Anda menekan sebanyak {count}</p>
      <button onClick={() => setCount(count + 1)}>Klik Aing</button>
    </div>
  );
};
