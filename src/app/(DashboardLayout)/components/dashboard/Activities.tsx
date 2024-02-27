import DashboardCard from "../shared/DashboardCard";
import profile1 from "public/images/profile/profile1.png";
import profile2 from "public/images/profile/profile2.png";
import profile3 from "public/images/profile/profile3.png";
import Image from "next/image";
import { Box, Typography, Stack, styled, Paper } from "@mui/material";
import { colors } from "@/utils/theme/colors";
import CardActionLink from "@/app/(DashboardLayout)/components/shared/ui/CardActionLink";
import Status from "@/app/(DashboardLayout)/components/shared/ui/Status";
import { ActivitiesStack } from "../shared/ui/CustomStack";
import { calcDurationOrTimeAgo } from "@/utils/helpers/tools";

const activities = [
  {
    title: "UX UI Designer",
    name: "John Doe",
    status: "Brief validation",
    statusDescription: "You need to validate the brief",
    time: "10:00 26/02/2024",
    company: "",
    avatar: <Image src={profile1} alt="profile" width={40} height={40} />,
    bgColor: colors.error["50"],
  },
  {
    title: "Graphic Designer",
    name: "Said Nasri",
    status: "Finised",
    statusDescription: "just recruited one of your talents",
    time: "10:00 27/02/2024",
    company: "SoGé",
    avatar: <Image src={profile2} alt="profile" width={40} height={40} />,
    bgColor: colors.gray["50"],
  },
  {
    title: "UX UI Designer",
    name: "Said Nasri",
    status: "Brief validated",
    statusDescription: "Just validated the brief ",
    time: "10:00 27/02/2024",
    company: "Apple",
    avatar: <Image src={profile3} alt="profile" width={40} height={40} />,
    bgColor: colors.white.white,
  }
];




const Activities = () => {
  return (
    <DashboardCard title="Avtivities" action={<CardActionLink href='#'>see all</CardActionLink>}>
      <>
        {
          activities.map((activity, index) => (
            <ActivitiesStack key={index} direction="row" spacing={2} bgcolor={activity.bgColor} position='relative'>
              <Box>
                {activity.avatar}
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 2 }} justifyContent="space-between" alignItems='center' alignContent='center'>
                <Box display='flex' flexDirection='column'>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="600">{activity.title} @ {activity.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{calcDurationOrTimeAgo(activity.time)} ago</Typography>
                  </Box>
                  <Box display='flex' flexDirection='row' alignItems='center'>
                    {activity.company && <Typography variant="h6" color="text.secondary" fontWeight='700' fontSize='12px' pr="2px">@{activity.company}</Typography>}
                    <Typography variant="caption" color="text.secondary" fontSize='12px'>{activity.statusDescription}</Typography>
                  </Box>
                  <Box ml={1} position='absolute' right={16} top={50}>
                    <Status status={activity.status} />
                  </Box>
                </Box>
              </Stack>
            </ActivitiesStack>
          ))
        }
      </>
    </DashboardCard>
  );
};

export default Activities;
