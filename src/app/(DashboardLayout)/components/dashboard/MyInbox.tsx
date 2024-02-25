import DashboardCard from "../shared/DashboardCard";
import profile1 from "public/images/profile/profile1.png";
import profile2 from "public/images/profile/profile2.png";
import profile3 from "public/images/profile/profile3.png";
import Reply_all from "public/images/icons-svg/reply_all.svg"
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Stack, styled, Paper } from "@mui/material";
import { colors } from "@/utils/theme/colors";
import LinkStyled from "../shared/LinkStyled";

const messages = [
    {
        title: "UX UI Designer",
        name: "John Doe",
        message: "Hey! I just finished interviewing the candidate #87876889 I think he is the one for the job",
        time: "10:00 AM",
        avatar: <Image src={profile1} alt="profile" width={40} height={40} />,
    },
    {
        title: "Graphic Designer",
        name: "Said Nasri",
        message: "Hey! I just finished interviewing the candidate #87876889 I think he is the one for the job",
        time: "10:00 AM",
        avatar: <Image src={profile2} alt="profile" width={40} height={40} />,
    },
];

const calcTimeDuration = (startTime: string) => {
    const currentTime = new Date().getTime();
    const startTimeParts = startTime.split(':');
    const start = new Date();
    start.setHours(parseInt(startTimeParts[0], 10));
    start.setMinutes(parseInt(startTimeParts[1], 10));

    // Calculate difference in milliseconds
    const diffMs = currentTime - start.getTime();

    // Convert milliseconds to hours and minutes
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return hours > 0 ? `${hours} hour` : `${minutes} min`;
}

const MyInbox = () => {
    return (
        <DashboardCard title="My Inbox" action={<LinkStyled href='#'>see all</LinkStyled>}>
            <>
                {
                    messages.map((message, index) => (
                        <Stack key={index} direction="row" bgcolor="#fff" spacing={2} sx={{ p: 2, borderBottom: "1px solid #f0f0f0", width: '100%' }} position='relative'>
                            <Box>
                                {message.avatar}
                            </Box>
                            <Stack direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 2 }} justifyContent="space-between" alignItems='center' alignContent='center'>
                                <Box display='flex' flexDirection='column'>
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="600">{message.title} @ {message.name}</Typography>
                                        <Typography variant="caption" color="text.secondary">{calcTimeDuration(message.time)} ago</Typography>
                                    </Box>
                                    <Box display='flex' flexDirection='row' alignItems='center' my={1}>
                                        <Typography variant="caption" color="text.secondary" fontSize='12px'>{message.message}</Typography>
                                    </Box>
                                    <Box ml={1} position='absolute' right={16} top={25}>
                                        <Box sx={{ bgcolor: colors.brand[500], width: "5px", height: "5px", borderRadius: "50%" }}></Box>
                                    </Box>
                                    <LinkStyled href='#'>
                                        <Typography variant="caption">
                                            <Reply_all /> replay
                                        </Typography>
                                    </LinkStyled>
                                </Box>

                            </Stack>
                        </Stack>
                    ))
                }
            </>
        </DashboardCard>
    );
};

export default MyInbox;
