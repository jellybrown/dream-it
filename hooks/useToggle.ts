import React, { useState } from "react";

const useToggle = (initialState = false) => {
  const [opened, setOpened] = useState(initialState);

  const toggle = () => {
    setOpened((prev) => !prev);
  };
  return [opened, toggle];
};

export default useToggle;
