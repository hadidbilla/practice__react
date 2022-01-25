import "./App.css";
import Wizard from "./Wizard";

const Page1 = () => (
  <div className="">
    <h1>i am page one</h1>
  </div>
);
const Page2 = () => (
  <div className="">
    <h1>i am page two</h1>
  </div>
);
const Page3 = () => (
  <div className="">
    <h1>i am page three</h1>
  </div>
);
const Page4 = () => (
  <div className="">
    <h1>i am page five</h1>
  </div>
);
function App() {
  return (
    <Wizard steps={4}>
      <Wizard.Pages className="wizard__content">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </Wizard.Pages>
      <div className="wizard__buttons">
        <Wizard.ButtonPrev />
        <Wizard.ButtonNext />
      </div>
    </Wizard>
  );
}

export default App;
