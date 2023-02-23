import React from "react";

import {
    Box,
    Typography,
} from '@mui/material'

import logo from '../../../assets/logo.png';

type Props = {};

export default function Header({}: Props) {
    return (
        <Box className="header" p={3} mb={3}>
            <Box
                className="header__logo"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={3}
            >
                <img
                    src={logo}
                    alt=""
                    className="header__logo__img"
                    height={64}
                />
                <Typography
                    variant="h4"
                    fontWeight={500}
                    className="header__logo__name"
                >
                    Module Calculator
                </Typography>
            </Box>
        </Box>
    );
}
