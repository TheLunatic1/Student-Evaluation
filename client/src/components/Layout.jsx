import { Outlet, useNavigate } from 'react-router-dom'
import Toast from './Toast'

export default function Layout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-primary text-primary-content shadow-lg">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">EduEval Platform</h1>
        </div>
        <div className="flex-none gap-4">
          <span className="text-lg">Hello, User</span>
          <button onClick={handleLogout} className="btn btn-sm btn-outline">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>

      {/* Toast */}
      <Toast />
    </div>
  )
}