import React, { useEffect, useState } from 'react';
import "./Home.css"
import { checkLogin } from '../../utils/auth';
import { useNavigate  } from 'react-router-dom'; // Assuming you are using React Router
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeatureSection from '../../components/FeatureSection/FeatureSection'
import FeatureElement from '../../components/FeatureElement/FeatureElement'
import PricingPlan from '../../components/PricingPlan/PricingPlan'
import Footer from '../../components/Footer/Footer'
import LogoGrid from '../../components/LogoGrid/LogoGrid'
import SubscribePage from '../../components/SubscribePage/SubscribePage'
import Steps from '../../components/Steps/Steps';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';



function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = checkLogin();
    setIsLoggedIn(loggedIn);
    if (!loggedIn) {
      setOpenDialog(true); // Open dialog if user is not logged in
    }
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <>
    <div className='animation-container'>

   
    <Navbar/>
    <HeroSection/>
    <br/>
    <hr/>
    <FeatureSection/>
    <hr style={{width:'20%', marginTop:'5rem'}}/>
    <PricingPlan/>
    <hr style={{width:'20%', marginTop:'5rem'}}/>
    <Steps/>
    {/* <LogoGrid/> */}
    {/* <SubscribePage/> */}
    <p style={{width:'0%', marginTop:'5rem'}}/>
    

    <Footer/>

    {/* Dialog for login prompt */}
    <Dialog className='dialog-container' open={openDialog} onClose={() => setOpenDialog(false)}>
  <DialogTitle className="dialog-title">Please Login</DialogTitle>
  <DialogContent className="dialog-content">
    <DialogContentText>
      You need to login to access this page.
    </DialogContentText>
  </DialogContent>
  <DialogActions className="dialog-actions">
    <Button className="dialog-button" onClick={handleLogin}>
      Login
    </Button>
  </DialogActions>
</Dialog>
</div>
    

    </>
  )
}

export default Home