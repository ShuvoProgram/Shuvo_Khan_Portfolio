import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { BsArrowUp } from "react-icons/bs";


const Footer = () => {
    return (
        <div>
            <ScrollToTop smooth top={350} style={{ borderRadius: "30px" }} component={<BsArrowUp color='#BF43A6'/>}/>
        </div>
    );
};

export default Footer;