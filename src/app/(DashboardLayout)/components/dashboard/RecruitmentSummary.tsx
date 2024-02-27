"use client"
import { Box, Grid, Typography, styled } from "@mui/material"
import BlankCard from "../shared/BlankCard"
import MissionIcon from 'public/images/icons-svg/mission.svg';
import MissionsEncourIcon from 'public/images/icons-svg/missions-encours.svg';
import RerutementValideIcon from 'public/images/icons-svg/recrutement-valide.svg';
import { colors } from "@/utils/theme/colors";
import CircleBg from "../shared/ui/CircleBg";

const states = [
    {
        title: 'Profils qualifiés',
        numbers : 3,
        icon : <MissionIcon color={colors.orange[800]}/>,
        bgColor: colors.orange[50]
    },
    {
        title: 'Profils validés',
        numbers : 3,
        icon : <MissionIcon color={colors.orange[800]}/>,
        bgColor: colors.orange[50]
    },
    {
        title: 'Missions en cours',
        numbers : 12,
        icon : <MissionsEncourIcon color={colors.brand[800]}/>,
        bgColor: colors.brand[50]
    },
    {
        title: 'Recrutements validés',
        numbers : 2,
        icon : <RerutementValideIcon color={colors.success[800]}/>,
        bgColor: colors.success[50]
    }
]

const RecruitmentSummary = () => {
  return (
    <Box mt={-8}>
        <Grid container spacing={2}>
            {states.map((state, index) => (
                <Grid item xs={12} lg={3} md={3} key={index}>
                    <BlankCard>
                        <Box display="flex" alignItems="center" justifyContent="flex-start" p={3}>
                            <CircleBg bgColor={state.bgColor}>
                                <Box position="absolute" top='50%' left='50%' sx={{transform: 'translate(-50%, -50%)'}}>
                                    {state.icon}
                                </Box>
                            </CircleBg>
                            <Box>
                                <Typography variant="h6" textTransform='uppercase' fontSize={12} fontWeight={700}>
                                    {state.title}
                                </Typography>
                                <Typography variant="h3" color={colors.gray[700]} fontWeight={500}>
                                    {state.numbers}
                                </Typography>
                            </Box>
                        </Box>
                    </BlankCard>
                </Grid>
            ))}
        </Grid>
      </Box>
  )
}

export default RecruitmentSummary