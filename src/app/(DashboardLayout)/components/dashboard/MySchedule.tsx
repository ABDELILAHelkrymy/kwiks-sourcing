import DashboardCard from "../shared/DashboardCard";
import { Box, Typography, Stack, styled, Paper } from "@mui/material";
import { colors } from "@/utils/theme/colors";
import LinkStyled from "../shared/LinkStyled";
import ArrowForword from "public/images/icons-svg/arrow_forward.svg"

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


const getDay = (dateString: string) => {
    const today = new Date();
    const meetingDate = parseDateString(dateString);

    
    const clearTime = (date: Date) => {
        date.setHours(0, 0, 0, 0);
        return date;
    };

    const clearToday = clearTime(new Date(today));
    const clearMeetingDate = clearTime(meetingDate);

    if (clearToday.getTime() === clearMeetingDate.getTime()) {
        return "Today";
    }

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const clearTomorrow = clearTime(tomorrow);

    if (clearTomorrow.getTime() === clearMeetingDate.getTime()) {
        return "Tomorrow";
    }

    return dateString;
};

const parseDateString = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
};

const getMeetingsByDay = (day: string) => {
    return cheduleMeetings.filter((meeting) => getDay(meeting.date) === day);
};


const MySchedule = () => {
    return (
        <DashboardCard title="My schedule" action={<LinkStyled href='#'>Go to calendar</LinkStyled>}>
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
