import React from 'react';
import { Modal, Button, Text, Image, Container, Grid, Link } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const ProjectModal = ({visible, closeHandler, showCase}) => {
    const { projectName, showImg, features, technology, GithubClient, GithubServer, link } = showCase;
    return (
        <div>
            <Modal
                closeButton
                preventClose
                width="600px"
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Container id="modal-title">
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                showImg &&
                                showImg.map(img => (
                                    <SwiperSlide><Image src={img.img} style={{height: "400px"}}/></SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Container>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <Text
                            h2
                            css={{
                                color: "$gray800",
                                textAlign: "center"
                            }}
                            >
                                {projectName}
                            </Text>
                            <hr />
                            <Text 
                            h4
                            css={{
                                color: "$gray800"
                            }}
                            >
                                Feature
                            </Text>
                            <ul>
                                {features && 
                                features.map((feature, idx) => (
                                    <li>{idx + 1}.{feature.feature}</li>
                                ))
                                }
                            </ul>
                            <Text 
                            h4
                            css={{
                                color: "$gray800"
                            }}
                            >
                            Technology
                            </Text>
                            <Grid.Container gap={2}>
                                {
                                    technology && 
                                    technology.map(tech => (
                                        <Grid>
                                            <Button color="primary" auto size="xs">
                                                {tech.tech}
                                            </Button>
                                        </Grid>
                                    ))
                                }
                            </Grid.Container>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer css={{display: "flex", justifyContent: "space-around"}}>
                    {
                        link &&
                        <>
                            <Button flat auto rounded color="secondary">
                                <Link
                                    href={GithubClient}
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Github Client
                                </Link>
                            </Button>
                            <Button flat auto rounded color="secondary">
                                <Link
                                    href={GithubServer}
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Github Server
                                </Link>
                            </Button>
                            <Button flat auto rounded color="secondary">
                                <Link
                                    href={link}
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Live Demo
                                </Link>
                            </Button>
                        </>
                        
                    }
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProjectModal;