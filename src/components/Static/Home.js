import React, {useState} from 'react'
import InfoSection from '../InfoSection/InfoSection'
import LandingSection from '../LandingSection/LandingSection'
import Services from '../Services/Services'
import { homeObjOne, homeObjTwo, homeObjFour } from '../InfoSection/Data';
import Footer from '../../Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navigation/Navbar';



export default function Home({loggedIn, logOutUser, currentUser, handleGetProducts}) {
  // const [isOpen, setIsOpen] = useState(false)

  // function toggleSideBar(e){
  //   console.log('sam', isOpen)
  //   setIsOpen(!isOpen)
  // }

  return (
    <div>
        {/* <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar}/>
        <Navbar toggleSideBar={toggleSideBar} loggedIn ={loggedIn} logOutUser={logOutUser} currentUser={currentUser} handleGetProducts={handleGetProducts}/> */}
        <LandingSection/>
        <InfoSection {...homeObjOne }/>
        <InfoSection {...homeObjTwo }/>
        <Services/>
        <InfoSection {...homeObjFour }/>
        <Footer/>
    </div>
  )
}
