import React, { useState, useEffect } from "react";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    CssBaseline,
    Typography
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material'

import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import ModuleResultPanels from "./components/module-result-panels/ModuleResultPanels";
import ModuleSizeForm from "./components/module-size-controls/ModuleSizeForm";
import Canvas from "./components/modules-grid/Canvas";

export default function App() {
    const [desiredScreenWidth, setDesiredScreenWidth] = useState(0);
    const [desiredScreenHeight, setDesiredScreenHeight] = useState(0);
    const [realScreenWidth, setrealScreenWidth] = useState(0);
    const [realScreenHeight, setrealScreenHeight] = useState(0);
    const [screenArea, setScreenArea] = useState(0);
    
    const [moduleSize, setModuleSize] = useState<ModuleSize>(["3ft x 1.5ft", { height: 3, width: 1.5, type: "screen" }]);
    const [totalModules, setTotalModules] = useState(0);

    const [hideResult, setHideResult] = useState(false);

    const MODULE_SIZES = new Map<string, ModuleProps>()
        .set("3ft x 1.5ft", { height: 3, width: 1.5, type: "screen" })
        .set("4ft x 4ft", { height: 4, width: 4, type: "pallet" })
        .set("4ft x 8ft", { height: 4, width: 8, type: "pallet" });
    
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

    //
    //  DYNAMIC PROPERTIES
    //

    function handleModuleSizeChange(key: string) {
        const value = MODULE_SIZES.get(key)
        if(value != undefined) setModuleSize([key, value])
    }
    function handleDesiredScreenHeightChange(value: number) {
        setDesiredScreenHeight(value)
    }
    function handleDesiredScreenWidthChange(value: number) {
        setDesiredScreenWidth(value)
    }

    function resetDimensions() {
        handleDesiredScreenHeightChange(0);
        handleDesiredScreenWidthChange(0);
    }

    //
    // CALCULATIONS
    //
    function calculateArea(height: number, width: number) {
        return height * width;
    }

    function calculateTotalModules(
        moduleHeight: number, moduleWidth: number, 
        screenHeight: number, screenWidth: number
    ) {
        const heightInModules = screenHeight / moduleHeight;
        const widthInModules = screenWidth / moduleWidth;

        return heightInModules * widthInModules
    }

    function calculateClosestPossibleScreenHeight(moduleHeight: number, desiredHeight: number) {
        return (Math.floor(desiredHeight/moduleHeight) * moduleHeight);
    }

    function calculateClosestPossibleScreenWidth(moduleWidth: number, desiredWidth: number) {
        return (Math.floor(desiredWidth/moduleWidth) * moduleWidth);
    }

    // Update Recommended Screen Dimensions on form changes
    useEffect(() => {
        if(desiredScreenHeight < 0 || desiredScreenWidth < 0) return;
        if(Number.isNaN(desiredScreenHeight) || Number.isNaN(desiredScreenWidth)) return;
        setrealScreenHeight(
            calculateClosestPossibleScreenHeight(moduleSize[1].height, desiredScreenHeight)
        );
        setrealScreenWidth(
            calculateClosestPossibleScreenWidth(moduleSize[1].width, desiredScreenWidth)
        );
    }, [moduleSize, desiredScreenHeight, desiredScreenWidth]) 

    // Update Area and Total Modules on Result Changes
    useEffect(() => {
        setScreenArea(
            calculateArea(realScreenHeight, realScreenWidth)
        );
        setTotalModules(
            calculateTotalModules(
                moduleSize[1].height, moduleSize[1].width, 
                realScreenHeight, realScreenWidth
            )
        );
    }, [moduleSize, realScreenHeight, realScreenWidth])

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
                    <Header/>
                    <Container className="content"
                        maxWidth="md"
                        sx={{ flex: "1 0 auto" }}
                    >
                        <Box className="content__result-container"
                            display={hideResult ? 'none' : 'block'}
                            mb={3}
                        >
                            
                            <Accordion elevation={0} defaultExpanded={false}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="accordion-canvas-content"
                                    id="accordion-canvas-header"
                                >
                                    <Typography>Grid Example</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box
                                        sx={{
                                            border: '1px solid',
                                            borderColor: (theme) => theme.palette.divider,
                                            borderRadius: 2 
                                        }}
                                        mb={2}
                                    >
                                        <Canvas
                                            moduleSize={moduleSize} 
                                            realScreenHeight={realScreenHeight} 
                                            realScreenWidth={realScreenWidth} 
                                            canvasHeight={250} 
                                            canvasWidth={500}
                                        />
                                    </Box>
                                    
                                </AccordionDetails>
                                
                            </Accordion>
                            <Accordion elevation={0} defaultExpanded={true}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="accordion-result-content"
                                    id="accordion-results-header"
                                >
                                <Typography>Results</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ModuleResultPanels
                                        desiredScreenHeight={desiredScreenHeight}
                                        desiredScreenWidth={desiredScreenWidth}
                                        moduleSize={moduleSize}
                                        realScreenHeight={realScreenHeight}
                                        realScreenWidth={realScreenWidth}
                                        screenArea={screenArea}
                                        totalModules={totalModules}
                                    />
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        <ModuleSizeForm
                            moduleSize={moduleSize}
                            desiredScreenHeight={desiredScreenHeight}
                            desiredScreenWidth={desiredScreenWidth}
                            moduleSizes={MODULE_SIZES}
                            handleModuleSizeChange={handleModuleSizeChange}
                            handleDesiredScreenHeightChange={handleDesiredScreenHeightChange}
                            handleDesiredScreenWidthChange={handleDesiredScreenWidthChange}
                            handleResetDimensions={resetDimensions}
                        />
                    </Container>
                    <Footer/>
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}
