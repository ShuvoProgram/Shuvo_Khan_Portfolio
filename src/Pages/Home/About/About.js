import React, { useState } from 'react';
import { Container, Grid, Spacer, Text } from '@nextui-org/react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Tabs.css';
import { FiUser } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TabMenu = [
    { icon: <FiUser /> ,label: "Personal"},
    { icon: <FaUserGraduate /> ,label: "Education"},
    {icon: <FiUser/> ,label: "Interest"}
]

const About = () => {
    const [selectedTab, setSelectedTab] = useState([]);
    return (
        <div id='about'>
            <Container css={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <hr style={{ width: "30%" }} />
                <Spacer x={1} />
                <Text
                    h4
                    size={30}
                    css={{
                        textGradient: "45deg, $purple600 -20%, $pink600 100%",
                    }}
                    weight="semibold"
                >
                    About
                </Text>
                <Spacer x={1} />
                <hr style={{ width: "30%" }} />
            </Container>
            <Grid.Container gap={1} justify='center'>
                <Grid xs={12} md={4}>

                </Grid>
                <Grid xs={12} md={8} className="about">
                    <Tabs className="Tabs">
                        <TabList>
                            {
                                TabMenu.map(tabs => (
                                    <Tab onClick={() => setSelectedTab(tabs)}>{tabs.icon} {tabs.label}</Tab>
                                ))
                            }
                        </TabList>
                        <TabPanel>
                            <AnimatePresence exitBeforeEnter>
                                <motion.div
                                    key={selectedTab ? selectedTab.label : "empty"}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    
                                </motion.div>
                            </AnimatePresence>
                            
                        </TabPanel>
                        <TabPanel>
                            <AnimatePresence exitBeforeEnter>
                                <motion.div
                                    key={selectedTab ? selectedTab.label : "empty"}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className='education'>
                                        <div className='qualification'>
                                            <Text h3>Diploma Of CSE</Text>
                                            <Text h5>City Institute Of Technology. Khagan, Ashulia</Text>
                                        </div>
                                        <div>
                                            <Text
                                                css={{
                                                    width: "150px",
                                                    color: "White",
                                                    backgroundColor: "#4158D0",
                                                    borderRadius: "10px"
                                                }}
                                            >2020 - present</Text>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            
                        </TabPanel>
                        {/* <TabPanel>
                            <p>Tab 3 works!</p>
                        </TabPanel> */}
                    </Tabs>
                </Grid>
            </Grid.Container>
        </div>
    );
};

export default About;