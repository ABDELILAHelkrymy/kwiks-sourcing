import { Grid, Box, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import theme from '@/utils/theme';
import RecruitmentSummary from './components/dashboard/RecruitmentSummary';
import Activities from './components/dashboard/Activities';
import MyInbox from './components/dashboard/MyInbox';
import UpcomingMeetings from './components/dashboard/UpcomingMeetings';
import MySchedule from './components/dashboard/MySchedule';
import MyMissions from './components/dashboard/MyMissions';
import { colors } from '@/utils/theme/colors';


const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <RecruitmentSummary />
      <Box mt={8}>

        <Box mt={1} mb={3}>
          <Typography variant="h2" style={{
            fontWeight: 700,
            color : colors.gray[800]
          }}>
            What do you have today?
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} md={6}>
            <Activities />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <MyInbox />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <UpcomingMeetings />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <MySchedule />
          </Grid>
          <Grid item xs={12} lg={8} md={12}>
            <MyMissions />
          </Grid>
        </Grid>
        
      </Box>
      
    </PageContainer>
  )
}

export default Dashboard;
