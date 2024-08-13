import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <div>Sidebar</div>
        <div><Outlet /></div>
    </div>
  )
}

export default Layout