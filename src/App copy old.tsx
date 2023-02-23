import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
    Container,
    Box,
    Typography,
    Grid,
    Paper,
    CssBaseline,
    Alert,
    createTheme,
    Button,
    ThemeProvider,
    Stack,
} from "@mui/material";

import "./App.scss";
import ModulesGrid from "./components/modules-grid/ModulesGrid";

const lightTheme = createTheme({
    palette: {
      mode: 'light',
    }
})

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
})

export default function App() {
    const [modulesWidth, setModulesWidth] = useState(0);
    const [modulesHeight, setModulesHeight] = useState(0);
    const [modulesArea, setMdulesArea] = useState(0);
    const [totalModules, setTotalModules] = useState(0);

    const [theme, setTheme] = useState(lightTheme);

    // Color Theme functions
    function switchTheme() {
        setTheme(theme == darkTheme ? lightTheme : darkTheme);
    }

    // Module Height functions
    function initHeight() {
        setModulesHeight(1);
    }

    function increaseHeight() {
        setModulesHeight(modulesHeight + 1);
    }

    function decreaseHeight() {
        if(modulesHeight > 1) setModulesHeight(modulesHeight - 1);
    }

    // Module Width functions
    function initWidth() {
        setModulesWidth(1);
    }

    function increaseWidth() {
        setModulesWidth(modulesWidth + 1);
    }

    function decreaseWidth() {
        if(modulesWidth > 1) setModulesWidth(modulesWidth - 1);
    }

    // Module Area functions

    // Total Modules functions

    // On Init Component
    useEffect(() => {
        initHeight();
        initWidth();
    }, [])

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Button onClick={() => switchTheme()} color="primary" variant="contained">
                    Switch Theme
                </Button>
                <Container maxWidth="xl">
                    <Box className="grid-controls">
                        <Box className="grid-controls__width">
                            <Typography variant="h5">Width</Typography>
                            <Stack spacing={1} direction="row">
                                <Button variant="contained" color="error" onClick={() => decreaseWidth()}>-</Button>
                                <Button variant="contained" color="primary" onClick={() => increaseWidth()}>+</Button>
                            </Stack>
                        </Box>
                        <Box className="grid-controls__height">
                            <Typography variant="h5">Height</Typography>
                            <Stack spacing={1} direction="row">
                                <Button variant="contained" color="error" onClick={() => decreaseHeight()}>-</Button>
                                <Button variant="contained" color="primary" onClick={() => increaseHeight()}>+</Button>
                            </Stack>
                        </Box>
                    </Box>
                    <Box sx={{width: '300px'}}>
                        <ModulesGrid height={modulesHeight} width={modulesWidth}/>
                    </Box>
                    <div className="panel-calc-container container mt-5 py-5 px-4 px-md-5">
                        <div className="row">
                            <div className="col-md-5 mb-5 mb-md-0 form-container">
                                <h2 className="mb-3">
                                    Introduce the size of the screen
                                </h2>
                                <form id="form">
                                    <div className="form-floating input-group mb-3">
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="width"
                                            placeholder="Width"
                                            value="3"
                                            required
                                        />
                                        <label htmlFor="width">Width in feet</label>
                                        <div className="increment-decrement-container">
                                            <button
                                                className="btn btn-primary"
                                                id="inc-width"
                                                type="button"
                                            >
                                                +
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                id="dec-width"
                                                type="button"
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-floating input-group">
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="height"
                                            placeholder="Height"
                                            value="6"
                                            required
                                        />
                                        <label htmlFor="height">Height in feet</label>
                                        <div className="increment-decrement-container">
                                            <button
                                                className="btn btn-primary"
                                                id="inc-height"
                                                type="button"
                                            >
                                                +
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                id="dec-height"
                                                type="button"
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="extra-info mt-4">
                                    <p>
                                        Area: <span id="areaSpan"></span> m<sup>2</sup>
                                    </p>
                                    <p>
                                        Total Modules: <span id="modulesSpan"></span>{" "}
                                        Modules
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="grid-container">
                                    <div className="grid" id="grid">
                                        <div className="cell"></div>
                                        <div className="cell"></div>
                                        <div className="cell"></div>
                                        <div className="cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </ThemeProvider>
            
        </React.Fragment>
    );
}
