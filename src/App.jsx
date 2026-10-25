
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import Students from './pages/Students'
import AddStudent from './pages/AddStudent'

import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Reports from './pages/Reports'

import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-3">
        <Breadcrumb />
      </div>

      <Routes>
        
<Route
  path="/"
  element={<Dashboard />}
/>


        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/courses"
          element={<Courses/>}
        />

        <Route
          path="/reports"
          element={<Reports/>}
        />
        
        <Route
          path="/add-student"
          element={<AddStudent />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
