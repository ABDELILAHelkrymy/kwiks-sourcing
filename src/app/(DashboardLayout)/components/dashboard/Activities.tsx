import DashboardCard from "../shared/DashboardCard";
import profile1 from "public/images/profile/profile1.png";
import profile2 from "public/images/profile/profile2.png";
import profile3 from "public/images/profile/profile3.png";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Stack, styled, Paper } from "@mui/material";
import { colors } from "@/utils/theme/colors";
import LinkStyled from "../shared/LinkStyled";

const activities = [
  {
    title: "UX UI Designer",
    name: "John Doe",
    status: "Brief validation",
    statusDescription: "You need to validate the brief",
    time: "10:00 AM",
    company: "",
    avatar: <Image src={profile1} alt="profile" width={40} height={40} />,
    bgColor: colors.error["50"],
  },
  {
    title: "Graphic Designer",
    name: "Said Nasri",
    status: "Finised",
    statusDescription: "just recruited one of your talents",
    time: "10:00 AM",
    company: "SoGé",
    avatar: <Image src={profile2} alt="profile" width={40} height={40} />,
    bgColor: colors.gray["50"],
  },
  {
    title: "UX UI Designer",
    name: "Said Nasri",
    status: "Brief validated",
    statusDescription: "Just validated the brief ",
    time: "10:00 AM",
    company: "Apple",
    avatar: <Image src={profile3} alt="profile" width={40} height={40} />,
    bgColor: colors.white.white,
  }
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
    case "Brief validated":
      return { color: colors.warning[500], bgColor: colors.warning[100] };
    default:
      return { color: colors.error[500], bgColor: colors.error[100] };
  }
}

const StackStyled = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  '& $:not(last-child)': {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  }
}));


const Activities = () => {
  return (
    <DashboardCard title="Avtivities" action={<LinkStyled href='#'>see all</LinkStyled>}>
      <>
        {
          activities.map((activity, index) => (
            <StackStyled key={index} direction="row" spacing={2} bgcolor={activity.bgColor} position='relative'>
              <Box>
                {activity.avatar}
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 2 }} justifyContent="space-between" alignItems='center' alignContent='center'>
                <Box display='flex' flexDirection='column'>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="600">{activity.title} @ {activity.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{calcTimeDuration(activity.time)} ago</Typography>
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
            </StackStyled>
          ))
        }
      </>
    </DashboardCard>
  );
};

export default Activities;
