"use client"
import { Stack, styled } from "@mui/material";

export const ActivitiesStack = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(2),
    '& $:not(last-child)': {
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
    }
  }));

