import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import Routers from './Router/Router';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routers/>
      <ToastContainer/>
    </div>
  );
}

export default App;
