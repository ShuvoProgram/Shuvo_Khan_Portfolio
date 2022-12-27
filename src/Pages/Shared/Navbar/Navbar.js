import React, { useState } from "react";
import { Navbar, Text, Switch, Image, useTheme } from "@nextui-org/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme as useNextTheme } from 'next-themes'
import BrandLogo from "../../../assets/logo.png";
import { Wrapper } from '../../../Component/Style/Style';
import { Link } from "react-scroll";
import './Navbar.css';

const Navber = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const collapseItems = ["Projects", "Skills", "About", "Contact"];
  const [focused, setFocused] = useState(null);
  const [selected, setSelected] = useState('Item 1')
  return (
    <Navbar shouldHideOnScroll isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}>
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
        variant="highlight-rounded">
        <Wrapper onMouseLeave={() => setFocused(null)}>
          <Link
          to="Projects"
            spy={true} smooth={true} offset={-70}
            duration={500}
            className="navbar-link"
          >
            Projects
          </Link>
          <Link
          to="Skill"
            spy={true} smooth={true} offset={-70}
            duration={500}
            className="navbar-link"
          >
            Skill
          </Link>
          <Link
          to="About"
            spy={true} smooth={true} offset={-70}
            duration={500}
            className="navbar-link"
          >
            About
          </Link>
          <Link
          to="Contact"
            spy={true} smooth={true} offset={-70}
            duration={500}
            className="navbar-link"
          >
           Contact
          </Link>
          </Wrapper>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}>
        <Switch
          checked={isDark} 
          color="secondary"
          size="xl"
          iconOn={<BsFillSunFill filled="true" />}
          iconOff={<BsFillMoonFill filled="true" />}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
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
            isActive={index === 2}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              to={`/${item}`}>
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navber;
