import { Grid, Box, styled, Paper } from '@mui/material';
import React, { ReactPropTypes } from 'react'

interface ModulesGridProps {
    width: number;
    height: number;
}

const ModulesGridItem = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#aaaaaa" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: 2
}));

export default function ModulesGrid({ width, height }: ModulesGridProps) {
  return (
    <Grid container spacing={1} columns={width}>
        {Array.from(Array(height * width)).map((x, i) =>
            <Grid item key={i} xs={1}>
                <ModulesGridItem>
                    {i+1}
                </ModulesGridItem>
            </Grid>
        )}
    </Grid>
  )
}
