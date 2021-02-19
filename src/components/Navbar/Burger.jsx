import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#cadbc0",
  primaryLight: "#32533d",
};
//followed this tutorial for the hamburger https://www.youtube.com/watch?v=XQCuew98W4k&feature=emb_title
const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 1px 1px 2px black, 0 0 25px #cadbc0, 0 0 5px #f3b3a6;
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 3rem;
  right: 3rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#66101f")};

  box-shadow: ${(props) =>
    props.clicked
      ? "none"
      : "1px 1px 2px black, 0 0 25px #cadbc0, 0 0 5px #f3b3a6"};
  width: 2rem;
  height: 2px;
  display: inline-block;
  margin-top: 1.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    box-shadow: 1px 1px 2px black, 0 0 25px #cadbc0, 0 0 5px #f3b3a6;
    background-color: #66101f;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  text-shadow: 1px 1px 2px black, 0 0 25px #cadbc0, 0 0 5px #f3b3a6;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function Burger() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/new">
              Add Boulder
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              About
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default Burger;
