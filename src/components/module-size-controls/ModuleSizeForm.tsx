import React from "react";

import {
    Box,
    Container,
    Stack,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    InputAdornment
} from "@mui/material"

type Props = {
    moduleSize: ModuleSize;
    handleModuleSizeChange: (size: string) => void;
    desiredScreenHeight: number;
    handleDesiredScreenHeightChange: (size: number) => void;
    desiredScreenWidth: number;
    handleDesiredScreenWidthChange: (size: number) => void;
    moduleSizes: Map<string, ModuleProps>;
    handleResetDimensions: () => void;
};

export default function ModuleSizeForm({
    moduleSize,
    handleModuleSizeChange,
    desiredScreenHeight,
    handleDesiredScreenHeightChange,
    desiredScreenWidth,
    handleDesiredScreenWidthChange,
    moduleSizes,
    handleResetDimensions,
}: Props) {

    return (
        <Box className="content__form-container" alignItems="center">
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
                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="mode-select-label">
                            Panel Size Mode
                        </InputLabel>
                        <Select
                            labelId="mode"
                            id="mode-select"
                            value={moduleSize[0]}
                            label="Panel Size Mode"
                            onChange={(event) => handleModuleSizeChange(event.target.value)}
                        >
                            {Array.from(moduleSizes).map((x, i) => (
                                <MenuItem value={x[0]} key={i}>
                                    {x[0]} ({x[1].type})
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
                            handleDesiredScreenHeightChange(parseInt(event.target.value))
                        }
                    />
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
                            handleDesiredScreenWidthChange(parseInt(event.target.value))
                        }
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth={false}
                        onClick={() => handleResetDimensions()}
                    >
                        Reset
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}
