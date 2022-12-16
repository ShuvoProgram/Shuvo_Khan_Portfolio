import React from 'react';
import { Grid, Text, Button, Spacer } from "@nextui-org/react";
import { useMediaQuery } from '../../../hooks/useMediaQueries';
import profile from '../../../assets/IMG_20220605_151318-removebg-preview.png';
import { BsFacebook } from "react-icons/bs";
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../../assets/shuvo.pdf';

const Banner = () => {
    const isMd = useMediaQuery(960);

    return ( 
        <>
        {
            isMd? 
                    <Grid.Container gap={2} justify="center" css={{
                        marginTop: '$10',
                    }}>
                        <Grid xs={12} md={6}
                        css={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: "center",
                                height: "380px",
                                width: "380px",
                                justifyContent: "center",
                                backgroundColor: "#FF3CAC",
                                backgroundImage: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
                                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% "
                            }}>
                                <div
                                    style={{
                                        marginBottom: "50px",
                                        marginRight: "50px",
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: "40%",
                                        backgroundImage: `url(${profile})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}>

                                </div>
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
                                        <Button css={{ width: "30px", height: "30px" }}
                                            color="primary" auto ghost
                                            // color="error"
                                            icon={<BsFacebook />}
                                        />
                                        <Spacer x={0.5} />
                                        <Button
                                            css={{ width: "30px", height: "30px" }}
                                            color="primary" auto ghost
                                            // color="error"
                                            icon={<BsFacebook />}
                                        />
                                        <Spacer x={0.5} />
                                        <Button
                                            css={{ width: "30px", height: "30px" }}
                                            color="primary" auto ghost
                                            // color="error"
                                            icon={<BsFacebook />}
                                        />
                                        <Spacer x={0.5} />
                                        <Button
                                            css={{ width: "30px", height: "30px" }}
                                            color="primary" auto ghost
                                            // color="error"
                                            icon={<BsFacebook />}
                                        />
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
                                    <Button
                                        color="secondary">
                                        Hire Me
                                    </Button>
                                    <Spacer x={1} />
                                    <a href={resume} download={true}>
                                        <Button>
                                            Get Resume
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </Grid>
                    </Grid.Container>
            : 
                    <Grid.Container gap={2} justify="center" css={{
                        marginTop: '$10',
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
                                        <Button css={{ width: "30px", height: "30px" }}
                                            color="primary" auto ghost
                                            icon={<BsFacebook />}
                                            to="https://www.facebook.com/profile.php?id=100013424979068"
                                        >
                                        </Button>
                                        <Spacer x={0.5} />
                                        <Button
                                            css={{ width: "30px", height: "30px" }}
                                            color="primary" auto ghost
                                            // color="error"
                                            icon={<BsFacebook />}
                                        />
                                        <Spacer x={0.5} />
                                        <Button
                                            css={{ width: "30px", height: "30px" }}
                                            color="primary" auto ghost
                                            // color="error"
                                            icon={<BsFacebook />}
                                        />
                                        <Spacer x={0.5} />
                                        <Button
                                            css={{ width: "30px", height: "30px" }}
                                            color="primary" auto ghost
                                            // color="error"
                                            icon={<BsFacebook />}
                                        />
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
                                    <Button
                                        //  icon={<LockIcon fill="currentColor" />}
                                        color="secondary">
                                        Hire Me
                                    </Button>
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
                            <div style={{
                                display: 'flex',
                                margin: "0 0px 0 100px",
                                alignItems: "center",
                                height: "380px",
                                width: "380px",
                                justifyContent: "center",
                                backgroundColor: "#FF3CAC",
                                backgroundImage: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
                                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% "
                            }}>
                                <div
                                    style={{
                                        marginBottom: "50px",
                                        marginRight: "50px",
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: "40%",
                                        backgroundImage: `url(${profile})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}>

                                </div>
                            </div>
                        </Grid>
                    </Grid.Container>
        }
        
        </>
    );
};

export default Banner;