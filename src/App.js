import logo from './logo.svg';
import './App.css';
import EditUser from './Component/EditUser';
import NotFound from './Component/NotFound'; 
  import AddUser from './components/AddUser';
  import  AllUsers from './components/AllUsers';
  import NavBar from './components/Navbar';
   import CodeForInterview from './components/CodeForInterview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<CodeForInterview /> } />
      <Route path="all" element={<AllUsers /> } />
      <Route path="/add" element={<AddUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
