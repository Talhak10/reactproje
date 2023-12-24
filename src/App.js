import  LoginForm from './Components/Assets/LoginForm/LoginForm';
import  Home from './pages/home';
import { BrowserRouter ,Route , Routes , Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
     <BrowserRouter>
      <div>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
