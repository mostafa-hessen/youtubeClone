import logo from "./logo.svg";
import "./App.css";
import { Header ,Feed,VideoDetailes} from "./componentes/allComponent";
// import {} from "./";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route   path={'/'} element={<Feed/>}/>
          <Route path={'/channelDetailes/:id'} element={<VideoDetailes/>}/>
          {/* <Route path={'/'} component={Feed}/>
          <Route path={'/'} component={Feed}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
