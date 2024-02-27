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
import CardActionLink from "../shared/ui/CardActionLink";
import Status from "../shared/ui/Status";
import { calcDurationOrTimeAgo } from "@/utils/helpers/tools";

import profile2 from "public/images/profile/profile2.png";

const missions = [
    {
        id: "1",
        dateOfPoste: "11:00 23/02/2024",
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
        dateOfPoste: "18:00 23/02/2024",
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
        dateOfPoste: "15:00 23/02/2024",
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
        dateOfPoste: "12:00 23/02/2024",
        post: "Frontend Engineer",
        status: "Finised",
        recruter: {
            name: "Ahmed Sebyani",
            title: "Fast Recruter",
            avatar: profile2
        }
    },
];


const MyMissions = () => {
    return (
        <DashboardCard title="My missions" action={<CardActionLink href="#">Go to my missions</CardActionLink>}>
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
                        {missions.map((mission) => (
                            <TableRow key={mission.dateOfPoste}>
                                <TableCell>
                                    <Box display="flex" alignItems="center" pr={8}>
                                        <Box>
                                            <Typography variant="h6" fontSize={16} fontWeight={700}>
                                                {mission.post}
                                            </Typography>
                                            <Typography color="textSecondary" fontSize="12px">
                                                {calcDurationOrTimeAgo(mission.dateOfPoste) + " ago"}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Stack>
                                        <Box display="flex" alignItems="center">
                                            <Box mr={2}>
                                                <Image
                                                    src={mission.recruter.avatar}
                                                    alt="profile"
                                                    width={40}
                                                    height={40}
                                                />
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" fontWeight={600}>
                                                    {mission.recruter.name}
                                                </Typography>
                                                <Typography color="textSecondary" fontSize="13px">
                                                    {mission.recruter.title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Box ml={1}>
                                        <Status status={mission.status} />
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
