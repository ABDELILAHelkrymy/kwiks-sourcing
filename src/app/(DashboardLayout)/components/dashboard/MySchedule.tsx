import DashboardCard from "../shared/DashboardCard";
import { Box, Typography, Stack, styled, Paper } from "@mui/material";
import { colors } from "@/utils/theme/colors";
import CardActionLink from "../shared/ui/CardActionLink";
import ArrowForword from "public/images/icons-svg/arrow_forward.svg"
import { getDay } from "@/utils/helpers/tools";

const cheduleMeetings = [
    {
        date: "26/02/2024",
        timeIntervale: "10:00 - 11:00",
        title: "9 Degree Project Estimation Meeting",
    },
    {
        date: "27/02/2024",
        timeIntervale: "10:00 - 11:00",
        title: "9 Degree Project Estimation Meeting",
    },
    {
        date: "27/02/2024",
        timeIntervale: "10:00 - 11:00",
        title: "9 Degree Project Estimation Meeting",
    }

];


const getMeetingsByDay = (day: string) => {
    return cheduleMeetings.filter((meeting) => getDay(meeting.date) === day);
};

const MySchedule = () => {
    return (
        <DashboardCard title="My schedule" action={<CardActionLink href='#'>Go to calendar</CardActionLink>}>
            <Stack direction="column" p={2} bgcolor={colors.white.white}>

                <Typography variant="caption" color="secondary" style={{ fontWeight: 700 }}>
                    Today
                </Typography>
                {
                    getMeetingsByDay("Today").map((cheduleMeeting, index) => (
                        <Box key={index}>
                            <Paper elevation={0} variant="outlined" sx={{ borderRadius: 2, bgcolor: colors.white.white }}>
                            <Stack direction='row' justifyContent='space-between' p={2} alignItems='center'>
                                <Box>
                                    <Typography variant="caption" color="secondary">
                                        {cheduleMeeting.timeIntervale}
                                    </Typography>
                                    <Typography variant="body2" color="secondary" style={{ fontWeight: 700 }}>
                                        {cheduleMeeting.title}
                                    </Typography>
                                </Box>
                                <Box>
                                    <ArrowForword />
                                </Box>
                            </Stack>
                        </Paper>
                        </Box>
                    ))
                }
                <Typography mt={2} variant="caption" color="secondary" style={{ fontWeight: 700 }}>
                    Tomorrow
                </Typography>
                {
                    getMeetingsByDay("Tomorrow").map((cheduleMeeting, index) => (
                        <Box key={index} mb={1}>
                            <Paper elevation={0} variant="outlined" sx={{ borderRadius: 2, bgcolor: colors.white.white }}>
                            <Stack direction='row' justifyContent='space-between' p={2} alignItems='center'>
                                <Box>
                                    <Typography variant="caption" color="secondary">
                                        {cheduleMeeting.timeIntervale}
                                    </Typography>
                                    <Typography variant="body2" color="secondary" style={{ fontWeight: 700 }}>
                                        {cheduleMeeting.title}
                                    </Typography>
                                </Box>
                                <Box>
                                    <ArrowForword />
                                </Box>
                            </Stack>
                        </Paper>
                        </Box>
                    ))
                }
            </Stack>
        </DashboardCard>
    );
};

export default MySchedule;
