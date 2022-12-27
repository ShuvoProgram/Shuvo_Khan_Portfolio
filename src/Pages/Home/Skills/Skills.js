import React from 'react';
import {  Grid, Text, Container, Spacer, Image } from "@nextui-org/react";
import { useQuery } from 'react-query';

const Skills = () => {

    const { data: expertise = [] } = useQuery({
        queryKey: ['expertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/skills/expertise')
            const data = res.json();
            return data;
        }
    })
    const { data: comfortable = [] } = useQuery({
        queryKey: ['comfortable'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/skills/comfortable')
            const data = res.json();
            return data;
        }
    })
    const { data: tools = [] } = useQuery({
        queryKey: ['tools'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/skills/tools')
            const data = res.json();
            return data;
        }
    })

    return (
        <div style={{ marginTop: "40px" }} id='Skills'>
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
                   Skills
                </Text>
                <Spacer x={1} />
                <hr style={{ width: "30%" }} />
            </Container>
            <Container>
                <Text h1 size={30} color='secondary'>Expertise</Text>
                <Grid.Container gap={2}>
                    {
                        expertise.map(skill => (
                            <Grid xs={12} sm={1} css={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }} key={skill._id}>
                                <Text
                                    h6
                                    size={'$sm'}
                                    color="#ff4ecd"
                                    weight="bold"
                                >
                                    {skill.skill}
                                </Text>
                                <Image
                                    src={skill.img}
                                    width={50}
                                    height={50}
                                />
                            </Grid>
                        ))
                    }
                </Grid.Container>
                <Text h1 size={30} color='secondary'>Comfortable</Text>
                <Grid.Container gap={2}>
                    {
                        comfortable.map(skill => (
                            <Grid xs={12} sm={1} css={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }} key={skill._id}>
                                <Text
                                    h6
                                    size={'$sm'}
                                    color="#ff4ecd"
                                    weight="bold"
                                >
                                    {skill.skill}
                                </Text>
                                <Image
                                    src={skill.img}
                                    width={50}
                                    height={50}
                                />
                            </Grid>
                        ))
                    }
                </Grid.Container>
                <Text h1 size={30} color='secondary'>Tools</Text>
                <Grid.Container gap={2}>
                    {
                        tools.map(skill => (
                            <Grid xs={12} sm={1} css={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }} key={skill._id}>
                                <Text
                                    h6
                                    size={'$sm'}
                                    color="#ff4ecd"
                                    weight="bold"
                                >
                                    {skill.skill}
                                </Text>
                                <Image
                                    src={skill.img}
                                    width={50}
                                    height={50}
                                />
                            </Grid>
                        ))
                    }
                </Grid.Container>
            </Container>
        </div>
    );
};

export default Skills;