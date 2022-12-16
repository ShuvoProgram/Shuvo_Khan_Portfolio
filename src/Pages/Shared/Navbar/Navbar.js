import React from 'react';
import { Navbar, Link, Text, Switch, Image } from "@nextui-org/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import BrandLogo from '../../../assets/logo.png';

const Navber = () => {
    const collapseItems = [
        "Projects",
        "Skills",
        "About",
        "Contact",
    ];
    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <Image
                width={50}
                height={50}
                src={BrandLogo}
                alt="Shuvo Khan"
                objectFit="cover"
                />
                <Text b color="inherit" hideIn="xs">
                    Shuvo Khan
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                variant="highlight-rounded"
            >
                <Navbar.Link href="#projects">Projects</Navbar.Link>
                <Navbar.Link href="#skills">Skills</Navbar.Link>
                <Navbar.Link href="#about">About</Navbar.Link>
                <Navbar.Link href="#contact">Contact</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content
                css={{
                    "@xs": {
                        w: "12%",
                        jc: "flex-end",
                    },
                }}
            >
                <Switch
                    checked={true}
                    color="secondary"
                    size="xl"
                    iconOn={<BsFillSunFill filled="true" />}
                    iconOff={<BsFillMoonFill filled="true" />}
                />
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item}
                        activeColor="secondary"
                        css={{
                            color: index === collapseItems.length - 1 ? "$error" : "",
                        }}
                        isActive={index === 2}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            to={`/${item}`}
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navber;