import { Link } from "react-router-dom"
import { Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Wrapper from "./pages/Wrapper";

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="max-w-2xl text-center space-y-8">
        <Routes>
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/' element={<Landing />} />
          <Route path='/Landing' element={<Landing />} />
          <Route path='/Home' element={
            <Wrapper>
              <Home />
            </Wrapper>} />
        </Routes>
      </div>
    </div>
  )
}

export default App