import "./App.css";
import { TopSection } from "./components/topSection/index";
import curve from "./curve.svg";
function App() {
  return (
    <div className="App">
      <TopSection />
      <div>
        <img src={curve} alt="curve" className="curve" />
      </div>
    </div>
  );
}

export default App;
