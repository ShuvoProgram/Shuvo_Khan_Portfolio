import React, { useEffect, useState } from 'react';
import './GoToTop.css';
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    
    const goToBtn = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }

    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll = 
        document.body.scrollTo || document.documentElement.scrollTop;

        if(winScroll > heightToHidden){
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll)
    }, [])

    return (
        <div className='section'>
            {
                isVisible && (
                    <div className='top-btn' onClick={goToBtn}>
                        <BsFillArrowUpCircleFill className='top-btn--icon' />
                    </div>
                )
            }
        </div>
    );
};

export default GoToTop;