import './App.css';
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';
import NotFound from './components/NotFound';


function App()
{
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route exact path='/update/:id' element={<Update />} />
          <Route exact path='/delete' element={<Delete />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
