import React, { Children, createContext, useContext, useState } from "react";

const WizardContext = createContext();

function Wizard({ children, steps }) {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const goNextPage = () => {
    setActivePageIndex((index) => index + 1);
  };

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1);
  };

  const context = {
    activePageIndex,
    goNextPage,
    goPrevPage,
    steps,
  };

  return (
    <WizardContext.Provider value={context} className="wizard">
      <div className="wizard__content">{children}</div>
    </WizardContext.Provider>
  );
}
export const WizardPages = (props) => {
  const { activePageIndex } = useContext(WizardContext);

  const pages = Children.toArray(props.children);
  const currentPage = pages[activePageIndex];
  return <div>{currentPage}</div>;
};
export const WizardButtonNext = (props) => {
  const { activePageIndex, goNextPage, steps } = useContext(WizardContext);
  return activePageIndex < steps - 1 ? (
    <button
      type="button"
      {...props}
      onClick={goNextPage}
      className="wizard__buttons-right"
    >
      Siguiente
    </button>
  ) : null;
};
export const WizardButtonPrev = (props) => {
  const { activePageIndex, goPrevPage } = useContext(WizardContext);
  return activePageIndex > 0 ? (
    <button
      type="button"
      {...props}
      onClick={goPrevPage}
      className="wizard__buttons-left"
    >
      Atras
    </button>
  ) : null;
};
Wizard.ButtonNext = WizardButtonNext;
Wizard.ButtonPrev = WizardButtonPrev;
Wizard.Pages = WizardPages;
export default Wizard;
