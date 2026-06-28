import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MyJourney from './pages/case-studies/MyJourney'
import OverflowGenerator from './pages/case-studies/OverflowGenerator'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="case-study/my-journey" element={<MyJourney />} />
            <Route path="case-study/overflow-generator" element={<OverflowGenerator />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}
