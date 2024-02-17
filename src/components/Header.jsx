import { Navbar } from "./Navbar"

import logo from "../assets/images/logo.svg"


export const Header = () => {
    return (

        <header className='flex items-center place-content-between mb-14'>

            <img src={logo} alt="logo" />

            <Navbar/>

           
        </header>




    )
}