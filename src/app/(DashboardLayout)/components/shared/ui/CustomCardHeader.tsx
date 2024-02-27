
"use client"
import { CardHeader, styled } from "@mui/material";

export const DashboardCardHeader = styled(CardHeader)(({ theme }) => ({
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