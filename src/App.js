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

function App() {

  return (
    <div>
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
    </div>
  );
}

export default App;
