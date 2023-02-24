import React from "react";

import {
    Box,
    Typography,
    Divider,
} from '@mui/material'

type Props = {
    moduleSize: ModuleSize;
    totalModules: number;
    desiredScreenHeight: number;
    desiredScreenWidth: number;
    screenArea: number;
    realScreenHeight: number;
    realScreenWidth: number;
};

export default function ModuleResultPanels({
    moduleSize,
    totalModules,
    desiredScreenHeight,
    desiredScreenWidth,
    screenArea,
    realScreenHeight,
    realScreenWidth
}: Props) {
    return (
        <Box
            className="content__result-container"
            //display={hideResult ? "none" : "block"}
            mb={3}
        >
            <Box className="content__result-container__initial-dimensions-result"   
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    color: "text.secondary",
                    textAlign: "center",
                    "& svg": {
                        m: 1.5,
                    },
                    "& hr": {
                        mx: 0.5,
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: "1 1 auto",
                    }}
                    p={3}
                >
                    <Typography variant="subtitle1">
                        Your module dimensions are
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: {
                                xs: 36,
                                md: 48
                            }
                        }}
                        fontWeight="medium"
                        color="primary"
                    >   
                        {moduleSize[0]}
                    </Typography>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: "1 1 auto",
                    }}
                    p={3}
                >
                    <Typography variant="subtitle1">
                        Your {moduleSize[1].type} dimensions are
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: {
                                xs: 36,
                                md: 48
                            }
                        }}
                        fontWeight="medium"
                        color="primary"
                    >
                        {desiredScreenHeight}ft x {desiredScreenWidth}ft
                    </Typography>
                </Box>
            </Box>
            <Box className="content__result-container__real-dimensions-result"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    color: "text.secondary",
                    textAlign: "center",
                    "& svg": {
                        m: 1.5,
                    },
                    "& hr": {
                        mx: 0.5,
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: "1 1 auto",
                    }}
                    p={3}
                >
                    <Typography variant="subtitle1">
                        Your closest possible {moduleSize[1].type} size is
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: {
                                xs: 36,
                                md: 48
                            }
                        }}
                        fontWeight="medium"
                        color="secondary"
                    >
                        {realScreenHeight}ft x {realScreenWidth}ft
                    </Typography>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: "1 1 auto",
                        wordWrap: "break-word",
                    }}
                    p={3}
                >
                    <Typography variant="subtitle1">
                        Your {moduleSize[1].type} will be
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: {
                                xs: 36,
                                md: 48
                            }
                        }}
                        fontWeight="medium"
                        color="secondary"
                    >
                        {screenArea} sq ft
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    color: "text.secondary",
                    textAlign: "center",
                    "& svg": {
                        m: 1.5,
                    },
                    "& hr": {
                        mx: 0.5,
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: "1 1 auto",
                        wordWrap: "break-word",
                    }}
                    p={3}
                >
                    <Typography variant="subtitle1">Your {moduleSize[1].type} will need</Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: {
                                xs: 36,
                                md: 48
                            }
                        }}
                        fontWeight="medium"
                        color="initial"
                    >
                        {totalModules} modules
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
