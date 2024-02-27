"use client"
import { Box, styled } from '@mui/material';
import React from 'react';

type Props = {
    children : React.ReactNode,
    bgColor : string
}

const CircleBg = ({children, bgColor}: Props) => {
    const BoxStyled = styled(Box)(({ theme }) => ({
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        position: 'relative',
        backgroundColor : bgColor,
        marginRight : 16
    }));

  return (
    <BoxStyled>
        {children}
    </BoxStyled>
  )
}

export default CircleBg