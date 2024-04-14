import React, { useState, useEffect } from 'react';
import "./Newsletter.css";
import Navbar from '../../components/Navbar/Navbar';
import NewsApp from '../../components/NewsApp/NewsApp';
import Footer from '../../components/Footer/Footer';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Newsletter() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <div className='animation-container'>
            <Navbar />
            {isLoading ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50vh',
                    }}
                >
                    <CircularProgress /> &nbsp;&nbsp;Loading News....
                </Box>
            ) : (
                <div>
                    <div className="top-section">
                        <h1>Explore the about latest updates in the <span className="text sec-text">Tech World</span></h1>
                        <p>Stay at the forefront of innovation with our comprehensive coverage of the latest tech developments, programming breakthroughs, advancements in artificial intelligence, and exciting opportunities in the tech industry job market.</p>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <NewsApp />
                    
                    <Footer />
                </div>
                
            )}
            </div>
        </>
    );
}

export default Newsletter;