import React from "react";
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    TableContainer,
    Stack,
} from "@mui/material";
import Image from "next/image";
import DashboardCard from "../shared/DashboardCard";
import ArrowForword from "public/images/icons-svg/arrow_forward.svg"
import LinkStyled from "../shared/LinkStyled";
import { colors } from "@/utils/theme/colors";

import profile2 from "public/images/profile/profile2.png";

const products = [
    {
        id: "1",
        dateOfPoste: "23/02/2024",
        post: "Web Designer",
        status: "Waiting brief aproval",
        recruter: {
            name: "Ahmed Sebyani",
            title: "Fast Recruter",
            avatar: profile2
        }
    },
    {
        id: "2",
        dateOfPoste: "23/02/2024",
        post: "Project Manager",
        status: "Waiting contract",
        recruter: {
            name: "Ahmed Sebyani",
            title: "Fast Recruter",
            avatar: profile2
        }
    },
    {
        id: "3",
        dateOfPoste: "23/02/2024",
        post: "Project Manager",
        status: "Finised",
        recruter: {
            name: "Ahmed Sebyani",
            title: "Fast Recruter",
            avatar: profile2
        }
    },
    {
        id: "4",
        dateOfPoste: "23/02/2024",
        post: "Frontend Engineer",
        status: "Finised",
        recruter: {
            name: "Ahmed Sebyani",
            title: "Fast Recruter",
            avatar: profile2
        }
    },
];

type StatusProps = {
    status: string;
};

const Status = ({ status }: StatusProps) => {
    const { color, bgColor } = calcStatusColor(status);
    return (
        <Stack direction="row" alignItems='center' spacing={1} width='fit-content' sx={{ bgcolor: bgColor, p: "2px 12px", borderRadius: "50px" }}>
            <Box sx={{ bgcolor: color, width: "5px", height: "5px", borderRadius: "50%" }}></Box>
            <Typography variant="caption" color={color} fontSize='10px'>{status}</Typography>
        </Stack>
    );
}

const calcStatusColor = (status: string) => {
    switch (status) {
        case "Brief validation":
            return { color: colors.error[500], bgColor: colors.error[100] };
        case "Finised":
            return { color: colors.green[500], bgColor: colors.green[100] };
        case "Waiting brief aproval":
            return { color: colors.warning[500], bgColor: colors.warning[100] };
        case "Waiting contract":
            return { color: colors.warning[500], bgColor: colors.warning[100] };
        default:
            return { color: colors.error[500], bgColor: colors.error[100] };
    }
}

const MyMissions = () => {
    return (
        <DashboardCard title="My missions" action={<LinkStyled href="#">Go to my missions</LinkStyled>}>
            <TableContainer
                sx={{
                    width: {
                        xs: "274px",
                        sm: "100%",
                    },
                }}
            >
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                    }}
                >
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.dateOfPoste}>
                                <TableCell>
                                    <Box display="flex" alignItems="center" pr={8}>
                                        <Box>
                                            <Typography variant="h6" fontSize={16} fontWeight={700}>
                                                {product.post}
                                            </Typography>
                                            <Typography color="textSecondary" fontSize="12px">
                                                {product.dateOfPoste}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Stack>
                                        <Box display="flex" alignItems="center">
                                            <Box mr={2}>
                                                <Image
                                                    src={product.recruter.avatar}
                                                    alt="profile"
                                                    width={40}
                                                    height={40}
                                                />
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" fontWeight={600}>
                                                    {product.recruter.name}
                                                </Typography>
                                                <Typography color="textSecondary" fontSize="13px">
                                                    {product.recruter.title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Box ml={1}>
                                        <Status status={product.status} />
                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    <ArrowForword />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </DashboardCard>
    );
};

export default MyMissions;
