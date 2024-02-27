"use client"
import Link from 'next/link';
import styled from '@mui/material/styles/styled';


const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: "14px",
    fontWeight: "600",
    textDecoration: "none",
    "&:hover": {
        textDecoration: "none",
    },
    "&:active": {
        color: theme.palette.primary.main,
    },
    "&:focus": {
        color: theme.palette.primary.main,
    },

}));

type LinkStyledProps = {
    children: React.ReactNode;
    href: string;
};

const CardActionLink = ({ children, href }: LinkStyledProps) => {
    return (
        <StyledLink href={href}>
            {children}
        </StyledLink>
    )
}


export default CardActionLink