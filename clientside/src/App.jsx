import Register from './Pages/Register'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import PassPhrase from './Pages/PassPhrase'
import ForgotPassword from './Pages/ForgotPassword'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from './Components/ScrollToTop'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './Pages/Login'

function App() {
  const isAuthenticated = useSelector(state => state?.user?.user?.id);
  return (
    <>
      <ToastContainer className='max-sm:flex max-sm:w-[70%] max-sm:justify-center max-sm:text-sm' />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to="/home" /> :<Login/>}/>
        <Route path='/reg' element={<Register/>}/>
        <Route path="/home" element={<Home />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/reset-password' element={<ForgotPassword/>}/>
        <Route path='/new-ps-sec' element={<PassPhrase />} />
      </Routes>
    </>
  )
}

export default App
