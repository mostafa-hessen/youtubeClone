import logo from "./logo.svg";
import "./App.css";
import { Header ,Feed,VideoDetailes, ChannelDetailes} from "./componentes/allComponent";
// import {} from "./";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route   path={'/'} element={<Feed/>}/>
          <Route path={'/channelDetailes/:id'} element={<ChannelDetailes/>}/>
          <Route path={'/videoDetailes/:id'} element={<VideoDetailes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
