import './styles/app.scss';
import { BrowserRouter } from "react-router-dom";
import { Tech } from "./components";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Tech/>
      </div>
    </BrowserRouter>
  );
}

export default App;
