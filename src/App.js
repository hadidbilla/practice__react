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
    <div className="App">
      <Wizard>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </Wizard>
    </div>
  );
}

export default App;
