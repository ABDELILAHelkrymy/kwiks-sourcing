import DashboardCard from "../shared/DashboardCard";
import TimeIcon from "public/images/icons-svg/time.svg"
import BusinessCenter from "public/images/icons-svg/business_center.svg"
import { Box, Typography, Stack, Button } from "@mui/material";
import { colors } from "@/utils/theme/colors";
import { calcDurationOrTimeAgo } from "@/utils/helpers/tools";
import CircleBg from "../shared/ui/CircleBg";

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
                                    <Typography variant="h6">{metting.startTime} - {metting.endTime} ({calcDurationOrTimeAgo(metting.startTime, metting.endTime)})</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2} mt={2}>
                                    <BusinessCenter />
                                    <Typography variant="h6">{metting.title}</Typography>
                                </Stack>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="flex-start" py={3}>
                                <CircleBg bgColor={colors.gray[700]}>
                                    <Box position="absolute" top='50%' left='50%' fontWeight='700' fontSize='18px' color={colors.white.white} sx={{ transform: 'translate(-50%, -50%)' }}>
                                        {metting.profile.avatar}
                                    </Box>
                                </CircleBg>
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
                            <Button variant="outlined" size="large" color="secondary">
                                Reschedule
                            </Button>
                            <Button variant="contained" color="primary" size="large">
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
