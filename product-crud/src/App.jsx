import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProduct from './components/CreateProduct'
import ShowProduct from './components/ShowProduct'
import UpdateProduct from './components/UpdateProduct'

function App()
{
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<CreateProduct />} />
          <Route exact path='/showproduct' element={<ShowProduct />} />
          <Route exact path={`/updateproduct/:id`} element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
      {/* <CreateProduct /> */}
      {/* <ShowProduct /> */}
    </>
  )
}

export default App
