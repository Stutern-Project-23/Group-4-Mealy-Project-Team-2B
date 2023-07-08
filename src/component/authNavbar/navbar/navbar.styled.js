/* eslint-disable no-nested-ternary */
import styled from "styled-components";

const NavWrapper = styled.nav`
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999999;
  font-size: 1.6rem;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  display: flex;
  height: 70px;
  padding-inline: ${({ mobile, tablet }) =>
    // eslint-disable-next-line no-nested-ternary
    mobile ? "40px" : tablet ? "60.9px" : "40px"};
  width: 100%;
  background: #fff;
  box-shadow: ${({ scroll, menuopen }) =>
    scroll && !menuopen && "1px 2px 5px rgba(1,1,1,.3)"};

  .mobile-nav-right-div {
    /* Styles for the parent div */
    justify-content: ${({ tablet }) => (tablet ? "center" : "")};
    align-items: ${({ tablet }) => (tablet ? "center" : "")};

    div {
      /* margin-left: 0.3em; */
      align-items: center;
    }
  }
`;

const NavItemsWrapper = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  align-items: center;
  display: flex;
`;

const Items = styled.li`
  display: flex;
  gap: 40px;

  align-items: center;
  &.nav--link--items {
    display: ${({ tablet }) => tablet && "none"};
  }
  & > a {
    transition: 200ms all ease-in-out;
    display: flex;
  }
  & > a.active {
    color: #c04a1c;
  }
`;

const MobileNavWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  background: #fff;
  display: flex;
  gap: 10px;
  top: 100%;
  overflow-y: hidden;
  transition: 300ms 0.2s all ease-in-out;
  display: none;
  box-shadow: ${({ tablet }) => tablet && "1px 2px 5px rgba(1,1,1,.3)"};
  padding-inline: ${({ mobile, tablet }) =>
    mobile ? "40px" : tablet ? "60.9px" : "40px"};
  &.open {
    display: grid;
    height: 90px;
    max-height: fit-content;
    padding-top: 1em;
    padding-bottom: 1em;
    justify-content: center;
    align-items: center;
    margin-left: 0.3em;
    display: flex;
    align-items: center;
  }

  & > a.active {
    transition: 200ms all ease-in-out;
    color: #c04a1c;
  }
`;
export { NavItemsWrapper, NavWrapper, LogoWrapper, Items, MobileNavWrapper };
