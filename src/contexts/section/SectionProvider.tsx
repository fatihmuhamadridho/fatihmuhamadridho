import { useState } from "react";
import { SectionContext } from "./SectionContext";

export const SectionProvider = ({ children }: any) => {
  const [sections, setSections] = useState<any>();
  return (
    <SectionContext.Provider value={{ sections, setSections }}>{children}</SectionContext.Provider>
  );
};
