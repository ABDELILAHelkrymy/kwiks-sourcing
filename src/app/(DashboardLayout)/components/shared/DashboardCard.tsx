import React from "react";
import { Card, CardHeader, CardContent,styled } from "@mui/material";
import {DashboardCardHeader} from "./ui/CustomCardHeader"

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
      <DashboardCardHeader
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
