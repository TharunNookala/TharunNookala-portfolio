import { useEffect } from 'react';
import '../App.css';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Navbar from '../components/NavBar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css'

function AppLayout() {
    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 0,
        })
    }, [])

    return (
        <div className='border-[15px] border-white'>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default AppLayout;
