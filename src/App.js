import logo from './logopng.png';
import './App.css';

//importar componentes
import CompShowSales from './sale/ShowSale.js';
import CompCreateSale from './sale/CreateSale.js';
import CompEditSale from './sale/EditSale.js';
//impiortar router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowSales/>}></Route>
          <Route path='/create' element={<CompCreateSale/>}></Route>
          <Route path='/edit/:id' element={<CompEditSale/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
