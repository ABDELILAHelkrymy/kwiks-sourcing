import React from "react";
import { Card, CardHeader, CardContent,styled } from "@mui/material";

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
};

const CardHeaderStyled = styled(CardHeader)(({ theme }) => ({
  backgroundColor: "#fff",
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)",
  "& .MuiCardHeader-title": {
    fontSize: "16px",
    fontWeight: "700",
    color: theme.palette.secondary.dark,
  },
  "& .MuiCardHeader-action": {
    marginTop: "0px",
    fontSize: "14px",
    color: theme.palette.primary.main,
    fontWeight: "500",
  },
}));

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: Props) => {
  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      <CardHeaderStyled
        title={title}
        action={action}
        sx={{ 
          p: 3,
        }}
      />
  
      <CardContent sx={{ padding: 0, height: '320px', backgroundColor:'#fff' }}>
        {children}
      </CardContent>
      
    </Card>
  );
};

export default DashboardCard;
