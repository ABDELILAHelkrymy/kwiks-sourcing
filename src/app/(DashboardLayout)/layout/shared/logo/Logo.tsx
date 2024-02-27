"use client"
import Link from "next/link";
import { styled } from "@mui/material";
import LogoIcon from 'public/images/logos/logo.svg';

const LinkStyled = styled(Link)(() => ({
  height: "30px",
  width: "100px",
  overflow: "hidden",
  display: "block",
}));

const Logo = ({color}: {color:string}) => {
  return (
    <LinkStyled href="/">
      <LogoIcon color={color}/>
    </LinkStyled>
  );
};

export default Logo;
