import { Outlet } from 'react-router'
import Footer from '../pages/Shared/Footer/Footer'
import Navbar from '../pages/Shared/Navbar/Navbar'

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Push content to fill available space */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Main