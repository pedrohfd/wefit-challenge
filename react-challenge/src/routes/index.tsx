import { Header } from '@/components/header'
import { Home } from '@/pages/home'
import { Routes, Route, Outlet } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route
        element={
          <>
            <Header />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
      </Route>
    </Routes>
  )
}
