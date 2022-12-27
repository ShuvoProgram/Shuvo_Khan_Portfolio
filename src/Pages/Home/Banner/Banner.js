import React from 'react';
import { Grid, Text, Button, Spacer } from "@nextui-org/react";
import { useMediaQuery } from '../../../hooks/useMediaQueries';
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../../assets/shuvo.pdf';
import { Link } from "react-scroll";
import './Banner.css';
import { ButtonLink, SocialLink } from '../../../Component/Style/Style';
import boy from "../../../assets/IMG_20220605_151318-removebg-preview.png";
import glassesimoji from "../../../assets/img/glassesimoji.png";
import thumbup from "../../../assets/img/thumbup.png";
import crown from "../../../assets/img/crown.png";
import FloatinDiv from "../../../Component/FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

const Banner = () => {
    const isMd = useMediaQuery(960);
    // Transition
    const transition = { duration: 2, type: "spring" };

    return ( 
        <>
        {
            isMd? 
                    <Grid.Container gap={2} justify="center" css={{
                        marginTop: '$10',
                    }}>
                        <Grid xs={12} md={6}>
                            <div className="i-right">
                                <div
                                    style={{
                                        display: 'flex',
                                        margin: "0 0px 0 100px",
                                        alignItems: "center",
                                        height: "550px",
                                        width: "550px",
                                        justifyContent: "center",
                                        backgroundColor: "#FF3CAC",
                                        backgroundImage: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
                                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% "
                                    }}
                                >
                                    <div
                                        style={{
                                            marginBottom: "75px",
                                            marginRight: "70px",
                                            height: '100%',
                                            width: '100%',
                                            borderRadius: "40%",
                                            backgroundImage: `url(${boy})`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center'
                                        }}>

                                    </div>
                                    {/* <img src={boy} alt="" className='i-right-img'/> */}
                                </div>
                                <motion.img
                                    initial={{ left: "-36%" }}
                                    whileInView={{ left: "-24%" }}
                                    transition={transition}
                                    src={glassesimoji}
                                    alt=""
                                />

                                <motion.div
                                    initial={{ top: "-4%", left: "74%" }}
                                    whileInView={{ left: "68%" }}
                                    transition={transition}
                                    className="floating-div"
                                >
                                    <FloatinDiv img={crown} text1="Web" text2="Developer" />
                                </motion.div>

                                {/* animation */}
                                <motion.div
                                    initial={{ left: "9rem", top: "22rem" }}
                                    whileInView={{ left: "1rem" }}
                                    transition={transition}
                                    className="floating-div"
                                >
                                    {/* floatinDiv mein change hy dark mode ka */}
                                    <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
                                </motion.div>
                            </div>
                        </Grid>
                        <Grid xs={12} md={6} css={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ width: "500px", display: "flex", flexDirection: "column" }}>
                                <div>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>
                                        <SocialLink color="violet"><BsFacebook /></SocialLink>
                                        <SocialLink color="violet"><BsFacebook /></SocialLink>
                                        <SocialLink color="violet"><BsFacebook /></SocialLink>
                                        <SocialLink color="violet"><BsFacebook /></SocialLink>
                                    </div>
                                </div>
                                <div>
                                    <Text
                                        h4
                                        size={30}
                                        css={{
                                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                            marginBottom: "$0",
                                        }}
                                        weight="semibold"
                                    >
                                        Hello I'm
                                    </Text>
                                    <Text
                                        h1
                                        size={60}
                                        css={{
                                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                            marginBottom: "$0"
                                        }}
                                        weight="bold"
                                    >
                                        Shuvo Khan
                                    </Text>
                                    <div>
                                        <Text
                                            h1
                                            size={30}
                                            css={{
                                                textGradient: "45deg, $purple600 -20%, $pink600 100%"
                                            }}
                                        >
                                            As a
                                            <span style={{ marginLeft: "10px" }}>
                                                <Typewriter
                                                    words={['Web Developer.', 'Front End Developer.', 'MERN Stack Developer.', 'React Developer.']}
                                                    loop={100}
                                                    cursor
                                                    cursorStyle='।'
                                                    typeSpeed={70}
                                                    deleteSpeed={50}
                                                    delaySpeed={1000}
                                                />
                                            </span>
                                        </Text>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <ButtonLink color='violet' css={{ fontSize: "small" }} to="Contact">
                                        <Link to="Contact"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            Hire Me
                                        </Link>
                                    </ButtonLink>

                                    <Spacer x={1} />
                                    <a href={resume} download>
                                        <Button
                                        >
                                            Get Resume
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </Grid>
                    </Grid.Container>
            : 
                    <Grid.Container gap={2} justify="center" css={{
                        marginTop: '$20', height: '77vh'
                    }}>
                        <Grid xs={12} md={6} css={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ width: "500px", display: "flex", flexDirection: "column" }}>
                                <div>
                                    <div style={{
                                        display: "flex"
                                    }}>
                                        <SocialLink href='https://www.facebook.com/profile.php?id=100013424979068' color="violet"><BsFacebook /></SocialLink>
                                        <SocialLink href='https://www.linkedin.com/in/shuvok/' color="violet"><BsLinkedin /></SocialLink>
                                        <SocialLink href='https://github.com/ShuvoProgram' color="violet"><BsGithub /></SocialLink>
                                        <SocialLink color="violet"><BsInstagram /></SocialLink>
                                    </div>
                                </div>
                                <div>
                                    <Text
                                        h4
                                        size={30}
                                        css={{
                                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                            marginBottom: "$0"
                                        }}
                                        weight="semibold"
                                    >
                                        Hello I'm
                                    </Text>
                                    <Text
                                        h1
                                        size={60}
                                        css={{
                                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                            marginBottom: "$0"
                                        }}
                                        weight="bold"
                                    >
                                        Shuvo Khan
                                    </Text>
                                    <div>
                                        <Text
                                            h1
                                            size={30}
                                            css={{
                                                textGradient: "45deg, $purple600 -20%, $pink600 100%"
                                            }}
                                        >
                                            As a
                                            <span style={{ marginLeft: "10px" }}>
                                                <Typewriter
                                                    words={['Web Developer.', 'Front End Developer.', 'MERN Stack Developer.', 'React Developer.']}
                                                    loop={100}
                                                    cursor
                                                    cursorStyle='।'
                                                    typeSpeed={70}
                                                    deleteSpeed={50}
                                                    delaySpeed={1000}
                                                />
                                            </span>
                                        </Text>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <ButtonLink color='violet' css={{ fontSize: "small" }} to="Contact">
                                        <Link to="Contact"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            Hire Me
                                        </Link>
                                    </ButtonLink>
                                    
                                    <Spacer x={1} />
                                    <a href={resume} download>
                                    <Button
                                    >
                                        Get Resume
                                    </Button>
                                    </a>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} md={6}>                          
                            <div className="i-right">
                                <div
                                    style={{
                                        display: 'flex',
                                        margin: "0 0px 0 100px",
                                        alignItems: "center",
                                        height: "550px",
                                        width: "550px",
                                        justifyContent: "center",
                                        backgroundColor: "#FF3CAC",
                                        backgroundImage: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
                                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% "
                                    }}
                                >
                                    <div
                                        style={{
                                            marginBottom: "75px",
                                            marginRight: "70px",
                                            height: '100%',
                                            width: '100%',
                                            borderRadius: "40%",
                                            backgroundImage: `url(${boy})`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center'
                                        }}>

                                    </div>
                                    {/* <img src={boy} alt="" className='i-right-img'/> */}
                                </div> 
                                <motion.img
                                    initial={{ left: "-36%" }}
                                    whileInView={{ left: "-24%" }}
                                    transition={transition}
                                    src={glassesimoji}
                                    alt=""
                                />

                                <motion.div
                                    initial={{ top: "-4%", left: "74%" }}
                                    whileInView={{ left: "68%" }}
                                    transition={transition}
                                    className="floating-div"
                                >
                                    <FloatinDiv img={crown} text1="Web" text2="Developer" />
                                </motion.div>

                                {/* animation */}
                                <motion.div
                                    initial={{ left: "9rem", top: "22rem" }}
                                    whileInView={{ left: "1rem" }}
                                    transition={transition}
                                    className="floating-div"
                                >
                                    {/* floatinDiv mein change hy dark mode ka */}
                                    <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
                                </motion.div>
                            </div>
                        </Grid>
                    </Grid.Container>
        }
        
        </>
    );
};

export default Banner;