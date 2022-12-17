import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';


import './App.css';
import './scss/styles.js'


//components
import Home from './components/home/Home';
import { Login } from './components/account/Login';
import DataProvider from './context/DataProvider';
import Header from './components/header/Header';
import Personal from './components/account/Personal';
import BootHeader from './components/header/newHerdyeg';
import NAVLink from './components/header/NAVLink';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ?
    <>
      <Outlet />


    </> : <Navigate replace to='/account' />
};

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <>

      <DataProvider>
        <BootHeader userAuth={isAuthenticated}/>
        <BrowserRouter>
          <div style={{ marginTop: 4 }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
              <Route path='/personal' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path='/personal' element={<Personal/>}/>
              </Route>



            </Routes>
          </div>
        </BrowserRouter>
      </DataProvider>

    </>

  );
}

export default App;

{/* <DataProvider>
        <BrowserRouter>
          <div style={{ marginTop: 4 }}>
            <Routes>
              <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
              <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/' element={<Home />} />
              </Route>


            </Routes>
          </div>
        </BrowserRouter>
      </DataProvider> */}