import DashboardCard from "../shared/DashboardCard";
import TimeIcon from "public/images/icons-svg/time.svg"
import BusinessCenter from "public/images/icons-svg/business_center.svg"
import { Box, Typography, Stack, styled, Paper, Button } from "@mui/material";
import { colors } from "@/utils/theme/colors";

const meetings = [
    {
        date: "Friday, 6 July",
        startTime: "11:30",
        endTime: "12:00",
        title: "UX UI Designer",
        profile: {
            name: "John Doe",
            avatar: "JD",
            job: "General Practitioner",
        },
    }
];

const calcTimeDuration = (startTime: string, endTime: string) => {
    const currentTime = new Date().getTime();
    const startTimeParts = startTime.split(':');
    const start = new Date();
    start.setHours(parseInt(startTimeParts[0], 10));
    start.setMinutes(parseInt(startTimeParts[1], 10));
    const endTimeParts = endTime.split(':');
    const end = new Date();
    end.setHours(parseInt(endTimeParts[0], 10));
    end.setMinutes(parseInt(endTimeParts[1], 10));
    // calculate dif in minutes
    const diffMs = end.getTime() - start.getTime();
    return `${Math.floor(diffMs / (1000 * 60))} min`;
}

const BoxStyled = styled(Box)(({ theme }) => ({
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    position: 'relative',
    backgroundColor: colors.gray[700],
    marginRight: "16px",
}));


const UpcomingMeetings = () => {
    return (
        <DashboardCard title="Upcoming meetings">
            <>
                {
                    meetings.map((metting, index) => (
                        <>
                        <Stack key={metting.date + index} direction="column" bgcolor="#fff" spacing={2} sx={{ p: 2, borderBottom: "1px solid #f0f0f0", width: '100%' }} position='relative'>
                            <Box>
                                <Typography variant="h5" style={{ fontWeight: 700, color: colors.gray["800"] }}>{metting.date}</Typography>
                                <Stack direction='row' spacing={2} mt={2}>
                                    <TimeIcon />
                                    <Typography variant="h6">{metting.startTime} - {metting.endTime} ({calcTimeDuration(metting.startTime, metting.endTime)})</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2} mt={2}>
                                    <BusinessCenter />
                                    <Typography variant="h6">{metting.title}</Typography>
                                </Stack>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="flex-start" py={3}>
                                <BoxStyled>
                                    <Box position="absolute" top='50%' left='50%' fontWeight='700' fontSize='18px' color={colors.white.white} sx={{ transform: 'translate(-50%, -50%)' }}>
                                        {metting.profile.avatar}
                                    </Box>
                                </BoxStyled>
                                <Box>
                                    <Typography variant="h3" color={colors.gray[900]} fontSize={16} fontWeight={700}>
                                        {metting.profile.name}
                                    </Typography>
                                    <Typography variant="h6" color={colors.gray[700]} fontSize={14} fontWeight={500}>
                                        {metting.profile.job}
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                        <Stack direction="row" spacing={2} p={2} justifyContent="flex-end">
                            <Button sx={{
                                color: colors.gray[700],
                                fontWeight: 700,
                                textTransform: 'capitalize',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                border: `2px solid ${colors.gray[300]}`,
                                boxShadow: 'none',
                            }} variant="outlined" size="large">
                                Reschedule
                            </Button>
                            <Button sx={{
                                color: colors.white.white,
                                fontWeight: 700,
                                textTransform: 'capitalize',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                boxShadow: 'none',
                            
                            }} variant="contained" color="primary" size="large">
                                Confirm 
                            </Button>
                        </Stack>
                        </>
                        
                    ))
                }
            </>
        </DashboardCard>
    );
};

export default UpcomingMeetings;
