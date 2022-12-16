import './App.css';
import List from './components/List';
import Header from "./components/Header"
import "./css/layout.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SearchResult from './components/SearchResult';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header></Header>
        <Routes>
          <Route path="/" element={<List></List>}/>
          <Route path="/search" element = {<SearchResult></SearchResult>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
