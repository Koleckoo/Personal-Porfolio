import "./Navbar.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiFillProject} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from "react"

export default function Navbar() {

    const [active, setActive] = useState('#')

    return <nav>
        <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#skills" onClick={() => setActive('#skills')} className={active === '#skills' ? 'active' : ''}><AiFillProject/></a>
        <a href="#projects" onClick={() => setActive('#projects')} className={active === '#projects' ? 'active' : ''}><BiBook/></a>
        <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
}