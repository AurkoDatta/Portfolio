import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}