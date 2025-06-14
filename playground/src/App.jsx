import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home'
import XSSDemo from './routes/XSSDemo'

export default function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/xss">XSS Demo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/xss" element={<XSSDemo />} />
      </Routes>
    </div>
  )
}
