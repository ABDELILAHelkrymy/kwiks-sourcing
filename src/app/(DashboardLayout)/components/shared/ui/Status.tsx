import { colors } from '@/utils/theme/colors';
import { Box, Stack, Typography } from '@mui/material';


type StatusProps = {
    status: string;
};

const calcStatusColor = (status: string) => {
    switch (status) {
        case "Brief validation":
            return { color: colors.error[500], bgColor: colors.error[100] };
        case "Finised":
            return { color: colors.green[500], bgColor: colors.green[100] };
        case "Brief validated":
            return { color: colors.warning[500], bgColor: colors.warning[100] };
        case "Waiting brief aproval":
            return { color: colors.warning[500], bgColor: colors.warning[100] };
        case "Waiting contract":
            return { color: colors.warning[500], bgColor: colors.warning[100] };
        default:
            return { color: colors.error[500], bgColor: colors.error[100] };
    }
}

const Status = ({ status }: StatusProps) => {
    const { color, bgColor } = calcStatusColor(status);
    return (
        <Stack direction="row" alignItems='center' spacing={1} width='fit-content' sx={{ bgcolor: bgColor, p: "2px 12px", borderRadius: "50px" }}>
            <Box sx={{ bgcolor: color, width: "5px", height: "5px", borderRadius: "50%" }}></Box>
            <Typography variant="caption" color={color} fontSize='10px'>{status}</Typography>
        </Stack>
    );
}

export default Status