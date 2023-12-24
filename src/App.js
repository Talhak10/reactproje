import  LoginForm from './Components/Assets/LoginForm/LoginForm';
import  Home from './pages/home';
import  Not from './pages/not';
import  OgrenciNot from './pages/ogrencinot';
import  Admin from './pages/admin';
import { BrowserRouter ,Route , Routes , Link} from 'react-router-dom';
import './App.css';

//rotalama ile sayfalar arası geçiş yaptığım yer 
function App() {
  return (
     <BrowserRouter>
      <div>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/ogrencinot'  element={<OgrenciNot/>}/>
        <Route path='/not' element={<Not/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
