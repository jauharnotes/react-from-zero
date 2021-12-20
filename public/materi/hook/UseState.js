import React from "react";
import { useState } from "react";
export const UseState = () => {
  const [count, setCount] = useState();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Anda menekan sebanyak ", count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "Klik Aing"));
};