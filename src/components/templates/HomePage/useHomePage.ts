import React, { useState } from "react";

const useHomePage = () => {
  const [currentNav, setCurrentNav] = useState<number>(1);
  const handleOpenUrl = (url: string) => {
    window.open(url);
  };

  return { currentNav, setCurrentNav, handleOpenUrl };
};

export { useHomePage };
