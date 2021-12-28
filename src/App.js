import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import GamePage from './components/page/GamePage';
import EnhancePage from './components/page/EnhancePage';
import InventoryPage from './components/page/InventoryPage';
import StorePage from "./components/page/StorePage";
import MainPage from './components/page/MainPage';
import { Provider } from 'react-redux';
import UserData from './provider/UserData';
import { UserDataObject } from './components/object/UserDataObject';

import styled from 'styled-components';

const MainStyle = styled.div`
  @font-face {
      font-family: 'BMEuljiro10yearslater';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/BMEuljiro10yearslater.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  font-family: 'BMEuljiro10yearslater';
`

function App() {
  return (
    <MainStyle>
      <UserData.Provider value={UserDataObject}>
        <Router>
          <Routes>
            <Route exact path='/Game' element={ <GamePage />} />
            <Route exact path='/Enhance' element={ <EnhancePage/> } />
            <Route exact path='/Inventory' element={ <InventoryPage/> } />
            <Route exact path='/Store' element={ <StorePage/> } />
            <Route exact path='/' element={ <MainPage />} />
          </Routes>
        </Router>
      </UserData.Provider>
    </MainStyle>
  );
}

export default App;
