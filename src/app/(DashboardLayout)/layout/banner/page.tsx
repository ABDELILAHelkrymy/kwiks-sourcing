"use client";
import React from 'react'
import { Box } from '@mui/material'
import {colors} from '@/utils/theme/colors'

type Props = {}

const Banner = (props: Props) => {
    return (
        <Box
            sx={{
                height: '160px',
                width: '100%',
                backgroundColor: colors.brand["600"],
                backgroundImage: 'url(images/backgrounds/bgBanner.png)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: colors.white["white"],
                    textAlign: 'center',
                }}
            >   <Box
                    sx={{
                        fontSize: '14px',
                    }}
                >
                    Welcome Karim
                </Box>
                <Box
                    sx={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                    }}
                >
                    Glad to see you again
                </Box>
            </Box>
        </Box>
    )
}

export default Banner