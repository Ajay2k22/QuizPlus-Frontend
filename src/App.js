
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import MainPage from './views/MainPage';

function App() {
  return (
    <div>
      <Routes>

        <Route exact path='/' Component={Home} ></Route>
        <Route path='/login' Component={Login}></Route>

        <Route path='/register' Component={Register}></Route>
        <Route path='/mainpage' Component={MainPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
