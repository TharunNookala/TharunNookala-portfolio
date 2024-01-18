import { useEffect } from 'react';
import '../App.css';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css'
import StickyHeader from '../components/StickyHeader';

function AppLayout() {
    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 0,
        })
    }, [])

    return (
        <div className='w-screen flex items-center flex-col gap-10'>
            <StickyHeader />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default AppLayout;
