
import NumberVerify from '../src/components/NumberVerify/NumberVerify'
import PasswordVerify from '../src/components/PasswordVerify/PasswordVerify'
import {Route, Routes} from 'react-router-dom'
import './App.css';

const App = () => (
        <>
        <Routes>
          <Route exact path="/" element={<NumberVerify/>} />
          <Route exact path="/passwordVerify" element={<PasswordVerify/>} />
        </Routes>
        </>
        ) 

export default App;
