import { createContext, useContext } from "react";

export type SectionContextProps = {
  sections: any;
  setSections: (e: any) => void;
};

/* istanbul ignore next */
const noop = () => {};

export const SectionContext = createContext<SectionContextProps>({
  sections: null,
  setSections: noop,
});

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error(
      "FeedListContent.* Component must be rendered as child of FeedListContent Component"
    );
  }
  return context;
};
