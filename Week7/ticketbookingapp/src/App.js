import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import UserPage from './components/UserPage';
import GuestPage from './components/GuestPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="App">
      {
        isLoggedIn? 
          <>
            <Logout onLogout={setIsLoggedIn} />
            <UserPage />
          </>
          : 
          <>
             <Login onLogin={setIsLoggedIn} />
            <GuestPage />
          </>
      }
    </div>
  );
}

export default App;
