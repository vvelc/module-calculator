import React, { useState, useEffect } from "react";

import {
    Box,
    Container,
    CssBaseline,
    Menu,
    Button,
    AppBar,
    Toolbar,
    Typography,
    Link,
    TextField,
    InputAdornment,
    Stack,
    Grid,
    InputLabel,
    Select,
    FormControl,
    MenuItem,
    SelectChangeEvent,
    Divider,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import logo from "./assets/logo.png";
import { GifBoxTwoTone, Height } from "@mui/icons-material";


export default function App() {
    const [desiredScreenWidth, setDesiredScreenWidth] = useState(0);
    const [desiredScreenHeight, setDesiredScreenHeight] = useState(0);
    const [realScreenWidth, setrealScreenWidth] = useState(0);
    const [realScreenHeight, setrealScreenHeight] = useState(0);
    const [screenArea, setScreensArea] = useState(0);
    
    const [moduleSize, setModuleSize] = useState("3ft x 1.5ft");
    const [totalModules, setTotalModules] = useState(0);

    const [hideResult, setHideResult] = useState(false);

    const MODULE_SIZES = [
        "3ft x 1.5ft",
        "3ft x 3ft"
    ]

    const handleModeChange = (event: SelectChangeEvent) =>
        setModuleSize(event.target.value);

    

    const theme = createTheme({
        palette: {
            mode: window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light",
        },
    });
    //const [theme, setTheme] = useState(lightTheme);

    // // Color Theme functions
    // function switchTheme() {
    //     setTheme(theme == darkTheme ? lightTheme : darkTheme);
    // }

    const INIT_WIDTH = 300;
    const INIT_HEIGHT = 10;

    // Module Height functions
    function initHeight() {
        setDesiredScreenHeight(INIT_HEIGHT);
    }

    function increaseHeight() {
        setDesiredScreenHeight(desiredScreenHeight + 1);
    }

    function decreaseHeight() {
        if (desiredScreenHeight > 1) setDesiredScreenHeight(desiredScreenHeight - 1);
    }

    function handleHeightChange(value: number) {
        if (value > -1) setDesiredScreenHeight(value);
    }

    // Module Width functions
    function initWidth() {
        setDesiredScreenWidth(INIT_WIDTH);
    }

    function increaseWidth() {
        setDesiredScreenWidth(desiredScreenWidth + 1);
    }

    function decreaseWidth() {
        if (desiredScreenWidth > 1) setDesiredScreenWidth(desiredScreenWidth - 1);
    }

    function handleWidthChange(value: number) {
        if (value > -1) setDesiredScreenWidth(value);
    }

    

    // Module Area functions

    // Total Modules functions

    // On Init Component
    useEffect(() => {
        initHeight();
        initWidth();
    }, []);

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <Box
                    bgcolor={(theme) => theme.palette.background.default}
                    color={(theme) => theme.palette.text.primary}
                    sx={{ height: "100vh" }}
                    display="flex"
                    flexDirection="column"
                    //width="100vw"
                >
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
                    <Container className="content"
                        maxWidth="md"
                        sx={{ flex: "1 0 auto" }}
                    >
                        <Box className="content__result-container"
                            display={hideResult ? 'none' : 'block'}
                            mb={3}
                        >
                            <Box className="content__result-container__grid"             
                                //display={hideResult ? 'none' : 'block'}
                                alignItems="center"
                                //wrap="nowrap"
                                //p={1}
                                sx={{
                                    "& img": {
                                        width: "100%",
                                    },
                                }}
                                mb={2}
                            >
                                <img
                                    src={`https://via.placeholder.com/${desiredScreenWidth}x${desiredScreenHeight}/404040`}
                                    alt=""
                                />
                            </Box>
                            <Box className="content__result-container__panel-dimensions-result"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    border: (theme) =>
                                        `1px solid ${theme.palette.divider}`,
                                    borderRadius: 2,
                                    bgcolor: "background.paper",
                                    color: "text.secondary",
                                    textAlign: "center",
                                    "& svg": {
                                        m: 1.5,
                                    },
                                    "& hr": {
                                        mx: 0.5,
                                    }
                                }}
                            >
                                <Box 
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        flex: '1 1 auto',
                                    }}
                                    p={3}
                                >
                                    <Typography variant="subtitle1">Your module dimensions are</Typography>
                                    <Typography variant="h3" fontWeight='medium' color="primary">{moduleSize}</Typography>
                                </Box>
                                <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />
                                <Box 
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        flex: '1 1 auto',
                                        wordWrap: "break-word"
                                    }}
                                    p={3}
                                >
                                    <Typography variant="subtitle1">Total Modules</Typography>
                                    <Typography variant="h3" fontWeight='medium' color="primary">{totalModules} modules</Typography>
                                </Box>
                            </Box>
                            <Box className="content__result-container__desired-screen-area-dimensions"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    border: (theme) =>
                                        `1px solid ${theme.palette.divider}`,
                                    borderRadius: 2,
                                    bgcolor: "background.paper",
                                    color: "text.secondary",
                                    textAlign: "center",
                                    "& svg": {
                                        m: 1.5,
                                    },
                                    "& hr": {
                                        mx: 0.5,
                                    }
                                }}
                            >
                                <Box 
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        flex: '1 1 auto',
                                    }}
                                    p={3}
                                >
                                    <Typography variant="subtitle1">Your screen dimensions are</Typography>
                                    <Typography variant="h3" fontWeight='medium' color="secondary">{realScreenHeight}ft x {realScreenWidth}ft</Typography>
                                </Box>
                                <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />
                                <Box 
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        flex: '1 1 auto',
                                        wordWrap: "break-word"
                                    }}
                                    p={3}
                                >
                                    <Typography variant="subtitle1">Your screen is approximately</Typography>
                                    <Typography variant="h3" fontWeight='medium' color="secondary">{screenArea} sq ft</Typography>
                                </Box>
                            </Box>
                            <Box className="content__result-container__real-screen-area-dimensions-result"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    border: (theme) =>
                                        `1px solid ${theme.palette.divider}`,
                                    borderRadius: 2,
                                    bgcolor: "background.paper",
                                    color: "text.secondary",
                                    textAlign: "center",
                                    "& svg": {
                                        m: 1.5,
                                    },
                                    "& hr": {
                                        mx: 0.5,
                                    }
                                }}
                            >
                                <Box 
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        flex: '1 1 auto',
                                    }}
                                    p={3}
                                >
                                    <Typography variant="subtitle1">The closest possible screen size is</Typography>
                                    <Typography variant="h3" fontWeight='medium' color="initial">{realScreenHeight}ft x {realScreenWidth}ft</Typography>
                                </Box>
                                <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />
                                <Box 
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        flex: '1 1 auto',
                                        wordWrap: "break-word"
                                    }}
                                    p={3}
                                >
                                    <Typography variant="subtitle1">Your screen is approximately</Typography>
                                    <Typography variant="h3" fontWeight='medium' color="initial">{screenArea} sq ft</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="content__form-container"           
                            alignItems="center"
                        >
                            <Container maxWidth="sm">
                                <Stack
                                    className="content__form-container__form"
                                    component="form"
                                    //sx={{ width: '25ch' }}
                                    spacing={2}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <Typography variant="h4" mb={3}>
                                        Enter the screen dimensions below
                                    </Typography>
                                    {/* <Typography variant='body1'>
                                        The calculator will show you the most suitable configuration
                                    </Typography> */}
                                    <FormControl
                                        required
                                        sx={{ m: 1, minWidth: 120 }}
                                    >
                                        <InputLabel id="mode-select-label">
                                            Panel Size Mode
                                        </InputLabel>
                                        <Select
                                            labelId="mode"
                                            id="mode-select"
                                            value={moduleSize}
                                            label="Panel Size Mode"
                                            onChange={handleModeChange}
                                        >
                                            {MODULE_SIZES.map((x, i) => (
                                                <MenuItem value={x} key={i}>
                                                    {x}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        label="Screen Width (ft)"
                                        id="screen-width"
                                        //sx={{ m: 1, width: '25ch' }}
                                        type="number"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    ft
                                                </InputAdornment>
                                            ),
                                        }}
                                        //defaultValue={0}
                                        value={desiredScreenWidth}
                                        onChange={(event) =>
                                            handleWidthChange(
                                                parseInt(event.target.value)
                                            )
                                        }
                                    />
                                    <TextField
                                        label="Screen Height (ft)"
                                        id="screen-height"
                                        //sx={{ m: 1, width: '25ch' }}
                                        type="number"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    ft
                                                </InputAdornment>
                                            ),
                                        }}
                                        //defaultValue={0}
                                        value={desiredScreenHeight}
                                        onChange={(event) =>
                                            handleHeightChange(
                                                parseInt(event.target.value)
                                            )
                                        }
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth={false}
                                    >
                                        Calculate
                                    </Button>
                                </Stack>
                            </Container>
                        </Box>
                    </Container>
                    <Box className="footer"            
                        bgcolor={(theme) => theme.palette.divider}
                        sx={{ flexShrink: 0 }}
                        mt={3}
                        //mt={(theme) => `max(${theme.spacing(3)}, auto)`}
                    >
                        <Container maxWidth="lg">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                p={1}
                            >
                                <Typography variant="body1">
                                    Made with ❤️ by{" "}
                                    <Link
                                        color="inherit"
                                        fontWeight="bold"
                                        href="https://github.com/vvelc"
                                    >
                                        vvelc
                                    </Link>
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}
