import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import BookingForm from './pages/BookingForm.jsx'
import Rooms from './pages/Rooms.jsx'
import RoomDetails from './pages/RoomDetails.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:roomId" element={<RoomDetails />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
