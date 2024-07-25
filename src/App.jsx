import React, { useState } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import StudentRegistration from './pages/StudentRegistration';
import Home from './pages/Home';
import StudentList from './pages/StudentList';




import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      {/* Navbar */}
      <Header />

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
    
        {/* Std-Register */}
        <Route path="/register" element={<StudentRegistration />} />

        {/* Std-List */}
        <Route path="/lists" element={<StudentList />} />
      </Routes>
    </div>
  );
}

export default App;
