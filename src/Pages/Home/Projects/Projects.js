import React, { useState } from 'react';
import { Grid, Text, Container, Spacer, Card, Row, Col, Button, Link } from "@nextui-org/react";
import { useQuery } from 'react-query';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import ProjectModal from '../../../Component/ProjectModal/ProjectModal';
import CardSkeleton from '../../../Component/CardSkeleton/CardSkeleton';

const Projects = () => {
    const [visible, setVisible] = useState(false);
    const [showCase, setShowCase] = useState("");
    const handler = (project) => {
        setShowCase(project)
        setVisible(true)
    }

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    const { data: projects = [], isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/projects')
            const data = res.json();
            return data;
        }
    })

    if(isLoading){
        return <CardSkeleton/>;
    }

    return (
    <div id='projects'>
    <Container css={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <hr style={{width: "30%"}}/>
                <Spacer x={1} />
                <Text
                    h4
                    size={30}
                    css={{
                        textGradient: "45deg, $purple600 -20%, $pink600 100%",
                    }}
                    weight="semibold"
                >
                    Projects
                </Text>
                <Spacer x={1} />
        <hr style={{width: "30%"}}/>
    </Container>
    <Spacer y={2}/>
        <Grid.Container gap={1} justify="center">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
            {
                projects.map((project, idx) => (
                    <Grid xs={12} md={4} key={idx + 1}>
                            <SwiperSlide>
                                <Card css={{ w: "90%", h: "350px", margin: "auto" }}>
                                    <Card.Body css={{ p: 0 }}>
                                        <Card.Image
                                        src={project.projectImg}
                                            width="100%"
                                            height="100%"
                                            objectFit="cover"
                                            alt={project.projectName}
                                        />
                                    </Card.Body>
                                    <Card.Footer
                                        isBlurred
                                        css={{
                                            position: "absolute",
                                            bgBlur: "#ffffff66",
                                            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                            bottom: 0,
                                            zIndex: 1,
                                        }}
                                    >
                                        <Row>
                                            <Col>
                                                <Text h3 color="#000" size={12} transform="uppercase">
                                                    {project.projectName}
                                                </Text>
                                            </Col>
                                            <Col>
                                                <Row justify="flex-end">
                                                <Button auto color="warning" shadow onClick={() => handler(project)}>
                                                    ShowCase
                                                </Button>
                                                </Row>
                                            </Col>
                                            <Col>
                                                <Row justify="flex-end">
                                                    <Button flat auto rounded color="secondary">
                                                        <Link
                                                            href={project.link}
                                                            css={{ color: "inherit" }}
                                                            size={12}
                                                            weight="bold"
                                                            transform="uppercase"
                                                        >
                                                            Live Demo
                                                        </Link>
                                                    </Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                    </Grid>
                ))
            }
                </Swiper>
        </Grid.Container>
        <Spacer y={2} />
        { 
            <ProjectModal
            visible={visible}
            closeHandler={closeHandler}
            showCase={showCase}
            />
        }
    </div>
    );
};

export default Projects;